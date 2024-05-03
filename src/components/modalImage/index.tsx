import { ImageDayData } from "@/interfaces/image-data";
import Image from "next/image";
import { IoMdCloseCircle } from "react-icons/io";
import bannerBackground from "@/assets/backgroundModal.jpg";

interface content {
  data: ImageDayData | undefined;
  isPending: boolean;
  closeModal: () => void;
}

export default function ModalImage({ data, isPending, closeModal }: content) {
  const dateString: string | undefined = data?.date;
  let day: string = "";
  let month: string = "";
  let year: string = "";

  if (dateString) {
    [year, month, day] = dateString.split("-");
  }
  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground.src})`,
        backgroundBlendMode: "darken",
      }}
      className=" bg-cover bg-no-repeat transition-transform opacity-5 fixed w-full flex-col flex items-center justify-center  top-0 shadow-lg rounded-md z-50 h-full  mt-0 overflow-hidden  "
    >
      <div className="w-[90%] h-[90%]">
        <div className="w-[90%] h-20 flex items-center justify-end  ">
          <div
            onClick={closeModal}
            className="flex items-center hover:scale-95 transition-all justify-center font-bold w-8 h-8 text-black bg-white rounded-full"
          >
            <IoMdCloseCircle className="w-full  h-full text-red-600" />
          </div>
        </div>
        {isPending && (
          <h1 className="animate-pulse text-white">carregando...</h1>
        )}
        {!isPending && (
          <div className="flex flex-row w-full bg-contain rounded-2xl bg-no-repeat h-[90%]">
            <div className="flex items-center justify-center w-1/2 h-full">
              <Image
                className="w-4/5"
                src={`${data?.hdurl}`}
                alt="Image today"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col items-start gap-4 justify-center w-1/2 h-full">
              <h2 className=" w-[90%] text-3xl font-bold text-white">
                {data?.title}
              </h2>
              {data?.copyright ? (
                <h3 className="text-white">
                  Créditos de imagem: {data?.copyright}
                </h3>
              ) : (
                <h3 className="text-white">
                  Data: {day}/{month}/{year}
                </h3>
              )}

              <p className=" text-[0.85rem]  w-[90%] text-white">
                <span className="font-bold">Explicação:</span>{" "}
                {data?.explanation}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
