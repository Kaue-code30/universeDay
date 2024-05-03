import Link from "next/link";
import { IssPositionDayData } from "@/hooks/IssPositionData";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import banner from "@/assets/satelite.svg";
import Image from "next/image";

export default async function IssPosition() {
  const { data, isPendingIss } = await IssPositionDayData();

  const redIcon = new Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <section className="flex items-center justify-center w-full pb-48 -mt-38 h-[80vh]">
      <div className="flex flex-row-reverse max-w-[1996px] w-[90%] h-full ">
        <div className="w-1/2 flex items-center justify-center h-full">
          <Image className="w-full" src={banner} alt="" width={100} height={100} />
        </div>

        <div className="w-1/2 h-full flex flex-col gap-5 items-center justify-center">
          <h1 className="text-5xl w-3/4 font-bold text-center">
            Tenha a localização exata da Estação Espacial Internacional
          </h1>
          <p className="w-[55%] text-center">
            A Estação Espacial Internacional está se movendo a cerca de{" "}
            <span className="font-bold text-[#4271D0]">28.000km/h,</span>
            então sua localização muda muito rápido! Onde está agora?
          </p>
          <span>
            Link documentação da API:{" "}
            <Link
              href={"http://open-notify.org/Open-Notify-API/ISS-Location-Now/"}
              className="font-bold hover:border-b text-[#4271D0]"
            >
              clique aqui
            </Link>
          </span>
          <div>
            <MapContainer
              center={[
                parseFloat(data ? data.data.iss_position.latitude : "0"),
                parseFloat(data ? data.data.iss_position.longitude : "0"),
              ]}
              zoom={1}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[
                  parseFloat(data ? data.data.iss_position.latitude : "0"),
                  parseFloat(data ? data.data.iss_position.longitude : "0"),
                ]}
                icon={redIcon}
              >
                <Popup>Olá eu sou a ISS.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
