"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";
import { cards2Data1, cards2Data2 } from "@/constants/index";
import Cards3Kosina from "./Cards3Kosina";

const ServicesWithImage = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto text-center pb-10 ">
      <h2 className="text-2xl md:text-5xl text-primary font-bold py-3 md:py-20">
        Evo za sta sve mozete da se obratite nama
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-around items-center ">
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" hidden md:block rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/services.jpg"}
            width={500}
            height={500}
            alt="industrijski alpinizam"
            className="object-cover rounded-xl"
          />
        </motion.div>
        <div className=" ">
          <Cards3Kosina data={cards2Data1} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center ">
        <div className=" ">
          <Cards3Kosina data={cards2Data2} />
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/services.jpg"}
            width={500}
            height={500}
            alt="industrijski alpinizam"
            className="object-cover rounded-xl"
          />
        </motion.div>
      </div>
      <p className="primary-text-gradient text-xl md:text-3xl font-bold pt-5">
        Ako na ovom spisku nema to sto vama treba neznaci da to neradimo –
        Pozovite i proverite.
      </p>
    </div>
  );
};

export default ServicesWithImage;
