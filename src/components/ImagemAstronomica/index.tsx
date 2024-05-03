import { useState } from "react";
import ModalImage from "../modalImage";
import banner from "@/assets/solarSystem.svg";
import { imageDayData } from "@/hooks/imageDayData";
import Image from "next/image";

export default function ImagemAstronomicaDoDia() {
  const { data, isPending } = imageDayData();
  const dateString: string | undefined = data?.data.date;
  let day: string = "";
  let month: string = "";
  let year: string = "";


  if (dateString) {
    [year, month, day] = dateString.split("-");
  }

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <section className="flex justify-center items-center flex-col h-full  w-full md:h-[80vh]">
      {modalOpen && <ModalImage isPending={isPending} background={`${data?.data.hdurl}`} />}
      <div className="max-w-[1996px] w-[90%] flex-col h-full mb-40 flex items-center justify-center">
        <div className="w-full h-full flex">
          <div className="flex justify-center items-center w-1/2 h-full">
            <Image
              className="w-4/5"
              src={banner.src}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="flex  items-center justify-start w-1/2 h-full">
            <div className="flex w-4/5 flex-col gap-3">
              <h1 className="text-black dark:text-white text-5xl font-bold">
                Foto astronômica do dia
              </h1>

              <h2 className="text-black dark:text-white">{data?.data.title}</h2>
              {data?.data.copyright ? (
                <h3 className="text-black dark:text-white">Créditos de imagem: {data?.data.copyright}</h3>
              ) : (
                <h3 className="text-black dark:text-white">Data: {day}/{month}/{year}</h3>
              )}

              <p className="text-black dark:text-white">
                <span className="font-bold">Explicação:</span>{" "}
                {data?.data.explanation}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handleOpen}
          className="flex items-center justify-center w-1/2 h-12 hover:scale-95 transition-all bg-[#000] text-white rounded-lg"
        >
          ver foto do dia
        </button>
      </div>
    </section>
  );
}
