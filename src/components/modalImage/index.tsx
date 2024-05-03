interface content {
  background: string;
  isPending: boolean;
}

export default function ModalImage({ background, isPending }: content) {
    console.log(isPending);
    
  return (
    <div className=" fixed w-full flex items-center justify-center top-0 z-50 h-full mt-0 overflow-hidden  bg-[#273239]">
      {isPending && <h1 className="animate-pulse text-white">carregando...</h1>}
      {!isPending && (
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="w-[90%] bg-cover rounded-2xl bg-no-repeat h-[90%]"
        ></div>
      )}
    </div>
  );
}
