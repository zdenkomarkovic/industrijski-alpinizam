"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import Hero1 from "../public/hero1.jpg";
import Hero2 from "../public/hero2.jpg";
import Hero3 from "../public/hero3.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <Carousel
        className="absolute top-0 left-0 w-full h-[100dvh] z-[0]"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 5000,
          }),
          Fade(),
        ]}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
        <CarouselContent>
          <CarouselItem>
            <Image
              src={Hero1}
              alt="visinski radovi"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero2}
              alt="visinski radovi"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero3}
              alt="visinski radovi"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="relative flex flex-col gap-6 w-full items-center justify-center text-white z-[1] text-center">
        <h1 className="flex flex-col primary-text-gradient md:text-[4rem] text-3xl font-semibold max-w-[900px] leading-[1.2] px-4">
          INDUSTRIJSKI ALPINIZAM
          <span className="text-5xl md:text-8xl py-5">M Migic</span>
        </h1>
        <h2 className="text-background font-medium md:text-4xl text-2xl max-w-[800px] px-4">
          Alpinisticki radovi u industriji
        </h2>
      </div>
    </div>
  );
};

export default Hero;
