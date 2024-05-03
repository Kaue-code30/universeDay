interface content {
  backgroundDark: string;
  backgroundLight: string;
}

export default function CtaOne({ backgroundDark, backgroundLight }: content) {
  return (
    <section className="h-[40vh] mt-3 md:h-[100vh] w-full">
      <div
        style={{ backgroundImage: `url(${backgroundLight})` }}
        className="h-full dark:[display:none] bg-no-repeat bg-contain md:bg-cover  w-full"
      ></div>
      <div
        style={{ backgroundImage: `url(${backgroundDark})` }}
        className="h-full [display:none] dark:[display:flex] bg-no-repeat bg-contain md:bg-cover  w-full"
      ></div>
    </section>
  );
}
