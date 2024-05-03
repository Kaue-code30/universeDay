import Image from "next/image";
import luaImage from "@/assets/Home/Lua.svg";
import banner from "@/assets/Home/bannerHome.svg";

export default function HomeSection() {
  return (
    <section className="flex flex-col w-full md:h-[70vh]">
      <div className="flex  justify-between w-full h-[50px]">
        <div className="h-24 z-10 flex pl-36 items-center ">
          <ul className="flex gap-3">
            <li className=" cursor-pointer font-normal hover:scale-95 rounded hover:text-[#4271D0] ">
              Curiosidades
            </li>
            <li className="cursor-pointer font-normal hover:scale-95 rounded hover:text-[#4271D0]  ">
              Localização ISS
            </li>
            <li className="cursor-pointer font-normal hover:scale-95 rounded hover:text-[#4271D0]  ">
              Foto astronômica
            </li>
            <li className="cursor-pointer font-normal hover:scale-95 rounded hover:text-[#4271D0]  ">
              Quiz
            </li>
          </ul>
        </div>
        <Image
          quality={1000}
          className="w-12 md:w-auto md:h-36"
          src={luaImage.src}
          width={100}
          height={100}
          alt="Imagem da lua"
        />
      </div>
      <div className="md:px-36 flex md:flex-row md:items-center flex-row w-full h-full">
        <div className="flex md:flex-row flex-col-reverse items-center  justify-start md:justify-between w-full">
          <div className="flex md:items-start items-center justify-center gap-5 flex-col w-4/5 md:w-1/2 h-full">
            <h1 className="flex leading-none gap-1 text-4xl md:text-[5.2rem] text-black dark:text-white items-center justify-start font-semibold">
              UNIVERSE{" "}
              <div className="md:w-7 w-3 h-3 md:h-7 mt-4 md:mt-[30px] bg-[#4271D0]"></div>{" "}
              DAY
            </h1>
            <p className=" md:text-sm text-[0.95rem] md:text-left text-center dark:text-white w-full md:w-3/4 text-black">
              O espaço, vasto e misterioso, continua a fascinar a humanidade com
              sua imensidão e beleza incomparáveis. É um domínio que transcende
              os limites da Terra, estendendo-se além da atmosfera para além do
              que podemos imaginar. Nele, encontramos uma infinidade de corpos
              celestes, desde as estrelas que pontilham o céu noturno até os
              planetas, luas, asteroides e cometas que orbitam ao redor delas.
            </p>
            <button className="h-10 hover:scale-95 transition font-semibold w-64 bg-gradient-to-b from-[rgba(66,113,208,1)] to-[rgba(251,197,40,1)] text-white rounded-lg">
              conhecer o universo
            </button>
          </div>
          <div className="flex  items-center justify-center w-4/5 md:w-1/2 h-auto md:h-full">
            <Image
              className="w-52 md:w-auto "
              src={banner.src}
              width={100}
              height={100}
              alt="Imagem da lua"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// primaryColor: "#4271D0",
//       secondColor:"#fff",
//       threeColor:"#273239",
//       fourColor:"#000",
//       fiveColor:"#FBC528"
