import { useState } from "react";
import ModalImage from "../modalImage";
import banner from "@/assets/solarSystem.svg";
import { imageDayData } from "@/hooks/imageDayData";
import Image from "next/image";

export default function ImagemAstronomicaDoDia() {
  const { data, isPending } = imageDayData();

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <section
      className="flex justify-center items-center flex-col h-full  w-full md:h-[80vh]"
    >
      {modalOpen && (
        <ModalImage
          closeModal={handleOpen}
          isPending={isPending}
          data={data?.data}
        />
      )}
      <div className="max-w-[1996px] w-[90%] flex-col h-full mb-40 flex items-center justify-center">
        <div className="w-full h-full flex md:flex-row flex-col">
          <div className="flex justify-center items-center md:w-1/2 h-full">
            <Image
              className="w-full md:w-4/5"
              src={banner.src}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="flex  items-center justify-center md:justify-start w-full md:w-1/2 h-full">
            <div className="flex w-full md:w-4/5 gap-5 flex-col">
              <h1 className="text-black dark:text-white text-center text-2xl md:text-5xl font-bold">
                Foto astronômica do dia
              </h1>
              <p className="text-black dark:text-white text-sm text-center md:text-left">
                Prepare-se para uma jornada diária através dos confins do
                universo! Todos os dias, mergulhe em uma nova e incrível imagem
                astronômica que irá cativar sua imaginação e ampliar seus
                horizontes. De galáxias distantes a nebulosas coloridas, cada
                foto oferece uma visão única e deslumbrante do vasto cosmos que
                nos rodeia. Deixe-se envolver pela beleza e pela grandiosidade
                do espaço sideral enquanto contempla as maravilhas que só o
                universo pode oferecer. Uma experiência verdadeiramente
                inspiradora aguarda você a cada novo dia nesta jornada cósmica.
              </p>
              <button
                onClick={handleOpen}
                className="flex items-center justify-center w-full h-12 hover:scale-95 transition-all bg-[#4271D0] text-white rounded-lg"
              >
                ver foto do dia
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
