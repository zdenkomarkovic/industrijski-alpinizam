import { reference } from "@/constants/index";
import Image from "@/node_modules/next/image";
import React from "react";

const Reference = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 mx-auto ">
        <h1 className="text-6xl text-primary text-center py-70 md:py-10">
          Reference{" "}
        </h1>
        <div className="grid md:grid-cols-5 gap-5">
          {reference.slice(0, 15).map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center p-3 justify-between text-center rounded-lg shadow-md shadow-primary "
              >
                <Image
                  src={item.link}
                  width={100}
                  height={10}
                  alt="visinski radovi"
                  className="h-auto"
                />
                <p className="text-lg">{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="grid0 md:grid-cols-5 gap-5 pt-5">
          {reference.slice(15).map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center p-3 justify-between text-center  rounded-lg shadow-md shadow-primary "
              >
                <p className="text-lg mt-auto">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reference;
