import ImageEditor from "@/components/ImageEditor";
import ServicesWithImage2 from "@/components/ServicesWithImage2";
import { limarija, limSlike } from "@/constants/index";
import React from "react";

const page = () => {
  return (
    <div className="pt-24 md:pb-20">
      <div className="container px-2 md:px-4 mx-auto  space-y-5 md:space-y-10">
        <h1 className="text-2xl md:text-5xl primary-text-gradient text-center">
          Građevinska limarija – Zaštita i dugotrajnost vašeg krova
        </h1>
        <p className="text-lg md:text-2xl first-letter:pl-6">
          Građevinska limarija je sastavni, ali često i najproblematičniji deo
          krova. Kvalitetna izrada i pravilna ugradnja limenih elemenata ključni
          su za zaštitu objekta od vode, vlage i vremenskih nepogoda.
        </p>
        <p className="text-lg md:text-2xl first-letter:pl-6">
          Naš tim, uz alpinističke sertifikate i licenciranu opremu, može da
          reši sve izazove – bez obzira na nepristupačnost terena i složenost
          radova.
        </p>
        <h3 className="text-2xl md:text-4xl primary-text-gradient pl-20">
          Naše usluge
        </h3>
        <ServicesWithImage2 image={"/lim3.webp"} data={limarija} />
        <ImageEditor images={limSlike} />
      </div>
    </div>
  );
};

export default page;
