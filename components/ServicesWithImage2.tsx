import Image from "@/node_modules/next/image";
import React from "react";
import { Krovopokrivac } from "@/constants/index";
import MotionComponent2 from "./MotionComponent2";
import Cards4Kosina from "./Cards4Kosina";

const ServicesWithImage2 = ({
  image,
  data,
}: {
  image: string;
  data: Krovopokrivac[];
}) => {
  return (
    <div className=" mx-auto text-center pb-10 ">
      <div className="flex flex-col md:flex-row md:gap-10 justify-around items-center ">
        <MotionComponent2>
          <Image
            src={image}
            width={500}
            height={500}
            alt="industrijski alpinizam"
            className="object-cover rounded-xl"
          />
        </MotionComponent2>

        <div className=" ">
          <Cards4Kosina data={data} />
        </div>
      </div>
    </div>
  );
};

export default ServicesWithImage2;
