"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <h2 className="text-4xl font-bold md:text-6xl primary-text-gradient flex flex-col  text-center">
            SZR M-MIGIĆ
            <span className="text-2xl  md:text-3xl  text-primary">
              Profesionalni visinski radovi i industrijski alpinizam
            </span>
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            <span className="font-bold primary-text-gradient">SZR M-MIGIĆ</span>{" "}
            je specijalizovana radnja za izvođenje radova na visini primenom
            industrijskog alpinizma – moderne tehnike koja omogućava efikasan,
            siguran i pristupačan način obavljanja najzahtevnijih zadataka bez
            upotrebe skela i teške mehanizacije.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Naš tim čine{" "}
            <span className="font-bold primary-text-gradient">
              iskusni industrijski alpinisti
            </span>
            , obučeni za rad u ekstremnim uslovima, uz korišćenje
            najkvalitetnije opreme renomiranih svetskih proizvođača. Posvećenost
            bezbednosti, preciznosti i profesionalizmu omogućila nam je da
            steknemo poverenje brojnih klijenata iz različitih industrija.
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/alpinizam (15).jpg"}
            width={500}
            height={800}
            alt="industrijski alpinizam"
            className="object-cover h-[300px] md:h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
