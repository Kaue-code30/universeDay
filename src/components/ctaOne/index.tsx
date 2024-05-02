interface content {
  backgroundDark: string;
  backgroundLight: string;
}
import ctaOneImage from "@/assets/cta/lightImage.png";
import ctaOneDark from "@/assets/cta/darkImage.png";

export default function CtaOne() {
  return (
    <section className="h-[40vh] mt-3 md:h-[100vh] w-full">
      <div
        style={{ backgroundImage: `url(${ctaOneImage.src})` }}
        className="h-full dark:[display:none] bg-no-repeat bg-contain md:bg-cover  w-full"
      ></div>
      <div
        style={{ backgroundImage: `url(${ctaOneDark.src})` }}
        className="h-full [display:none] dark:[display:flex] bg-no-repeat bg-contain md:bg-cover  w-full"
      ></div>
    </section>
  );
}
