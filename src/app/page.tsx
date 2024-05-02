import HomeSection from "@/components/Home";
import ctaOneImage from "@/assets/cta/ctaOne.svg";
import CtaOne from "@/components/ctaOne/";
import CuriosidadesUniverse from "@/components/curiosidadesUniverso";

export default function Home() {
  return (
    <main className="flex w-full h-full bg-white dark:bg-[#273239] flex-col items-center justify-center">
      <HomeSection />
      <CtaOne />
      <CuriosidadesUniverse/>
    </main>
  );
}
