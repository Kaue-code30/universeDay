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
  console.log(data?.url);
  
  const dateString: string | undefined = data?.date;
  let day: string = "";
  let month: string = "";
  let year: string = "";

  if (dateString) {
    [year, month, day] = dateString.split("-");
  }
  return (
    <div className=" bg-cover bg-no-repeat bg-black opacity-95 transition-transform fixed w-full flex-col flex items-center justify-center  top-0 shadow-lg z-50 h-full  mt-0  ">
      <div
        style={{ backgroundImage: `url(${bannerBackground.src})` }}
        className="w-full z-50 h-full md:p-10"
      >
        <div className="w-[90%] h-20 md:h-20 flex items-center justify-end  ">
          <div
            onClick={closeModal}
            className="flex items-center hover:scale-95 transition-all justify-center font-bold w-5 md:w-8 md:h-8 text-black bg-white rounded-full"
          >
            <IoMdCloseCircle className="w-full  h-full text-red-600" />
          </div>
        </div>
        {isPending && (
          <h1 className="animate-pulse text-white">carregando...</h1>
        )}
        {!isPending && (
          <div className="flex  items-center justify-start md:justify-center flex-col md:flex-row w-full bg-contain rounded-2xl bg-no-repeat h-[90%]">
            <div className="flex items-center justify-center  w-4/5 md:w-1/2 h-1/4 md:h-full">
              {
                data?.url.startsWith("https://www.youtube.com/")  ? (
                  <iframe className="w-4/5 h-full border border-white rounded-lg" src={data?.url}/>
                ) : <Image
                className="w-4/5"
                src={`${data?.url}`}
                alt="Image today"
                width={100}
                height={100}
                priority
                quality={1000}
              />
              }
              
            </div>
            <div className="flex flex-col items-center md:justify-center md:items-start gap-4 justify-center w-4/5 md:w-1/2 h-[50%] md:h-full">
              <h2 className=" w-[90%] md:text-left text-center text-xl md:text-3xl font-bold text-white">
                {data?.title}
              </h2>
              {data?.copyright ? (
                <h3 className="text-white w-4/5">
                  Créditos de imagem: {data?.copyright}
                </h3>
              ) : (
                <h3 className="text-sm text-white">
                  Data: {day}/{month}/{year}
                </h3>
              )}

              <p className=" text-[0.6rem] md:text-left text-center md:text-[0.85rem] md:h-1/2 h-full overflow-auto  w-[90%] text-white">
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
