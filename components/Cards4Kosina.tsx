import { Krovopokrivac } from "@/constants/index";
import { CardHeader, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";

const Cards4Kosina = ({ data }: { data: Krovopokrivac[] }) => {
  return (
    <div className="">
      <div className=" mx-auto py-3 md:py-4 ">
        <div className="flex flex-col text-center gap-6 md:gap-8 items-stretch h-full">
          {data.map((item, i) => {
            return (
              <MotionComponent1 key={i}>
                <OneCard item={item} />
              </MotionComponent1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards4Kosina;

const OneCard = ({ item }: { item: Krovopokrivac }) => {
  return (
    <Card className="h-full relative overflow-hidden  bg-transparent">
      <svg
        className="absolute inset-0 w-full h-full text-card"
        viewBox="0 0 256 160"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 256,0 192,160 0,160" fill="currentColor" />
      </svg>

      <CardHeader className="relative z-10">
        <div className=" text-lg md:text-2xl text-left flex gap-3 items-center justify-start">
          <p className="">
            <span className="font-bold primary-text-gradient">
              {item.title}
            </span>{" "}
            {item.text}
          </p>
        </div>
      </CardHeader>
    </Card>
  );
};
