import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import ServicesWithImage from "@/components/ServicesWithImage";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 mx-auto pt-24 space-y-5 md:space-y-10">
        {" "}
        <h1 className="text-2xl md:text-5xl font-bold primary-text-gradient text-center">
          Industrijski alpinizam
        </h1>{" "}
        <p className="text-lg md:text-2xl first-letter:pl-6">
          <span className="font-bold text-primary">Pristup užetom</span> -
          tehnika kojom se mestu rada pristupa pomoću užadi i odgovarajuće
          opreme, pod uslovom da se izvodi prema važećim standardima, prihvaćena
          je kao legitiman način rada na visini.
        </p>
        <p className="text-lg md:text-2xl first-letter:pl-6">
          Koncept{" "}
          <span className="font-bold text-primary">industrijski alpinizam</span>{" "}
          se koristi duže vreme, ali zvanično takva grana ne postoji.
        </p>
        <p className="text-lg md:text-2xl first-letter:pl-6">
          Ranije su radovi na objektima visokogradnje sprovođeni uz pomoć
          uređaja za dizanje, kope, skela, itd. To je skupo i ponekad čak i
          nemoguće. Kada su alpinisti počeli da koriste svoje veštine i opremu
          za rešavanje problema u industriji, pojavio se pojam{" "}
          <span className="font-bold text-primary">industrijski alpinizam</span>
          .
        </p>
        <p className="text-lg md:text-2xl first-letter:pl-6">
          Danas, on se razvio u nezavisnu granu.
        </p>
        <p className="text-lg md:text-2xl first-letter:pl-6">
          Ovaj metod eliminiše upotrebu nezgrapnih skela i podizanje uređaja
          koji diže radnike na njihovim radnim mestima, i čini rad
          jednostavnijim i jeftinijim. Osim toga, podizanje skele je prilično
          glomazan posao, i montaža ovih uređaja zahteva mnogo vremena, što
          utiče na cenu rada kao rezultat. Oprema koja se koristi od strane
          naših stručnjaka može se lako smestiti u prtljažnik automobila, a
          njena priprema za rad traje oko sat vremena. Nivo bezbednosti u
          industrijskom planinarenju je znatno veći nego u uobičajenom izgradnji
          gde se koriste skele. Radnik je stalno osiguran, što praktično
          eliminiše mogućnost pada. Ljudi koji su savladali tehniku
          industrijskog planinarenja mogu da sprovedu niz popravki i
          građevinskih radova na objektu bilo koje visine.
        </p>
      </div>
      <ServicesWithImage />
      <PozoviteNasOdmah
        title={
          "Ako na ovom spisku nema to sto vama treba neznaci da to neradimo – Pozovite i proverite."
        }
      />
    </div>
  );
};

export default page;
