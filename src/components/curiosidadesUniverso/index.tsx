import Image from "next/image";
import banner from "@/assets/curiosidades/curiosidades.svg";
import { IssPositionDayData } from "@/hooks/IssPositionData";

export default function CuriosidadesUniverse() {  
  return (
    <section className="flex items-center justify-center md:mb-52 -mt-16 md:h-[50vh] w-full">
      <div className="flex flex-col gap-10 md:gap-20 items-center justify-start max-w-[1996px] w-[90%] h-full ">
        <div className="w-full flex items-end justify-center ">
          <h1 className="md:text-6xl text-center flex items-center justify-center md:w-full  text-4xl text-black dark:text-white font-bold">
            Curiosidades sobre o espaço
          </h1>
        </div>
        <div className=" w-full h-full flex md:flex-row flex-col justify-center items-start ">
          <div className="flex flex-col justify-center gap-10 pb-10 items-center md:w-1/4  h-full">
            <div className="flex hover:scale-100 hover:p-1 transition-all hover:rounded-2xl hover:left-1/4  w-full gap-5 h-1/2">
              <div className="flex items-center justify-center shadow text-3xl font-bold text-white w-16 h-12 md:w-20 md:h-16  bg-[#4271D0] rounded-full">
                1
              </div>
              <div className="flex-col w-full h-full">
                <h2 className="md:text-2xl text-xl font-bold dark:text-white text-black">
                  Estrelas de Nêutrons
                </h2>
                <p className="dark:text-white text-black text-[0.8rem] md:text-[0.9rem]">
                  Uma colher de chá de material de uma estrela de nêutrons teria
                  uma massa de cerca de um bilhão de toneladas na Terra.
                  Estrelas de nêutrons são remanescentes densos de supernovas.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-5 ">
              <div className="flex items-center justify-center shadow text-3xl font-bold text-white w-16 h-12 md:w-20 md:h-16 bg-[#4271D0] rounded-full">
                2
              </div>
              <div className="flex-col w-full h-auto">
                <h2 className="md:text-2xl text-xl font-bold dark:text-white text-black">
                  A Velocidade da Luz
                </h2>
                <p className="dark:text-white text-black text-[0.8rem] md:text-[0.9rem]">
                  A luz viaja a uma velocidade incrível de cerca de 299.792.458
                  metros por segundo no vácuo. Isso significa que a luz poderia
                  dar a volta na Terra cerca de 7,5 vezes em apenas um segundo!
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-2/5">
            <Image
              className="w-full flex items-start justify-start"
              src={banner.src}
              width={100}
              height={100}
              alt="Astronauta"
            />
          </div>

          <div className="flex flex-col justify-center gap-10 pb-10 items-center md:w-1/4  h-full">
            <div className="flex w-full gap-5 h-1/2">
              <div className="flex items-center justify-center text-3xl shadow font-bold text-white w-16 h-12 md:w-20 md:h-16 bg-[#4271D0] rounded-full">
                3
              </div>
              <div className="flex-col w-full h-full">
                <h2 className="md:text-2xl text-xl font-bold dark:text-white text-black">
                  Buracos Negros Supermassivos
                </h2>
                <p className="dark:text-white text-black text-[0.8rem] md:text-[0.9rem]">
                  No centro de muitas galáxias, incluindo a nossa Via Láctea,
                  existem buracos negros supermassivos. O buraco negro no centro
                  da Via Láctea, chamado Sagitário A*, tem uma massa de
                  aproximadamente 4 milhões de vezes a massa do Sol.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-5 ">
              <div className="flex items-center justify-center text-3xl font-bold shadow text-white w-16 h-12 md:w-20 md:h-16 bg-[#4271D0] rounded-full">
                4
              </div>
              <div className="flex-col w-full h-auto">
                <h2 className="md:text-2xl text-xl font-bold dark:text-white text-black">
                  Galáxias Colidindo
                </h2>
                <p className="dark:text-white text-black text-[0.8rem] md:text-[0.9rem]">
                  As galáxias estão em constante movimento no universo em
                  expansão. Às vezes, elas colidem e se fundem. Essas colisões
                  levam milhões de anos para acontecer e podem criar novas
                  estrelas e formas galácticas interessantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
