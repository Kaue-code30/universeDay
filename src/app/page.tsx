"use client"
import dynamic from "next/dynamic";
import HomeSection from "@/components/Home";
import CtaOne from "@/components/ctaOne/";
import CuriosidadesUniverse from "@/components/curiosidadesUniverso";
import ctaOneImage from "@/assets/cta/lightImage.png";
import ctaOneDark from "@/assets/cta/darkImage.png";
import ctaTwoBanner from "@/assets/cta/planetLight.png";
import ctaTwoBannerDark from "@/assets/cta/planetDark.png";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ImagemAstronomicaDoDia from "@/components/ImagemAstronomica";


const IssPosition = dynamic(() => import("@/components/IssPosition"), {
  ssr: false
});

export default function Home() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <main className="flex w-full h-full bg-white dark:bg-[#273239] flex-col items-center justify-center">
        <HomeSection />
        <CtaOne
          backgroundDark={ctaOneDark.src}
          backgroundLight={ctaOneImage.src}
        />
        <CuriosidadesUniverse />
        <CtaOne
          backgroundDark={ctaTwoBannerDark.src}
          backgroundLight={ctaTwoBanner.src}
        />
        <IssPosition />
        <ImagemAstronomicaDoDia />
      </main>
    </QueryClientProvider>
  );
}
