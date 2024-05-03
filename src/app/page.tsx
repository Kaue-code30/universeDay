"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import HomeSection from "@/components/Home";
import CtaOne from "@/components/ctaOne/";
import CuriosidadesUniverse from "@/components/curiosidadesUniverso";
import ctaOneImage from "@/assets/cta/lightImage.png";
import ctaOneDark from "@/assets/cta/darkImage.png";
import ctaTwoBanner from "@/assets/cta/planetLight.png";
import ctaTwoBannerDark from "@/assets/cta/planetDark.png";
import { QueryClient } from '@tanstack/react-query';
import ImagemAstronomicaDoDia from '@/components/ImagemAstronomica';

// Carrega o QueryClientProvider dinamicamente para ser executado apenas no lado do cliente
const QueryClientProvider = dynamic(() => import('@tanstack/react-query').then(mod => mod.QueryClientProvider), { ssr: false });

export default function Home() {
  // Use uma variável de estado para controlar se o componente está sendo renderizado no lado do cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
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
            <ImagemAstronomicaDoDia />
          </main>
        </QueryClientProvider>
      )}
    </>
  );
}
