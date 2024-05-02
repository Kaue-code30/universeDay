import HomeSection from "@/components/Home";
import CtaOne from "@/components/ctaOne/";
import CuriosidadesUniverse from "@/components/curiosidadesUniverso";
import ctaOneImage from "@/assets/cta/lightImage.png";
import ctaOneDark from "@/assets/cta/darkImage.png";
import ctaTwoBanner from "@/assets/cta/planetLight.png"
import ctaTwoBannerDark from "@/assets/cta/planetDark.png"

export default function Home() {
  return (
    <main className="flex w-full h-full bg-white dark:bg-[#273239] flex-col items-center justify-center">
      <HomeSection />
      <CtaOne backgroundDark={ctaOneDark.src} backgroundLight={ctaOneImage.src}/>
      <CuriosidadesUniverse/>
      <CtaOne backgroundDark={ctaTwoBannerDark.src} backgroundLight={ctaTwoBanner.src}/>
    </main>
  );
}
