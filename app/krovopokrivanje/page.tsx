import ServicesWithImage2 from "@/components/ServicesWithImage2";
import { krovopokrivacke } from "@/constants/index";
import React from "react";

const page = () => {
  return (
    <div className="pt-24 md:pb-20">
      <div className="container px-2 md:px-4 mx-auto space-y-5 md:space-y-10">
        <h1 className="text-2xl md:text-5xl font-bold primary-text-gradient text-center">
          Krovopokrivački radovi – Sigurnost i dugotrajnost vašeg krova
        </h1>
        <p className="text-lg md:text-2xl first-letter:pl-6">
          Bilo da je u pitanju izgradnja novog krova, prepravka postojećeg ili
          sanacija curenja, naš tim vam stoji na raspolaganju. Profesionalni
          pristup, kvalitetni materijali i precizna izvedba garantuju
          dugotrajnost i sigurnost vašeg krova, bez obzira na vremenske uslove.
        </p>
        <h3 className="text-2xl md:text-4xl primary-text-gradient pl-20">
          Naše usluge
        </h3>
        <ServicesWithImage2 image={"/servis.jpg"} data={krovopokrivacke} />
      </div>
    </div>
  );
};

export default page;
