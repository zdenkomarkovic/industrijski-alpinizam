import { Cards2Data, Cards2DataText } from "@/constants/index";
import { CardHeader, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";

const Cards2 = ({
  title,
  data,
  text,
}: {
  title: string;
  data: Cards2Data[];
  text: Cards2DataText;
}) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-16 border-t-2 space-y-10 md:space-y-20">
        <h2 className="text-3xl md:text-5xl text-center primary-text-gradient font-bold">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
          {data.slice(0, 3).map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />;
              </MotionComponent1>
            );
          })}
        </div>
        <div className="grid md:grid-cols-2 text-center gap-6 md:gap-8 items-stretch">
          {data.slice(3).map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />;
              </MotionComponent1>
            );
          })}
        </div>
        <p className="first-letter:pl-6 text-xl md:text-3xl">{text.text}</p>
      </div>
    </div>
  );
};

export default Cards2;

const OneCard = ({ item }: { item: Cards2Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full">
      <CardHeader className="relative z-10">
        {" "}
        <div className="flex gap-5 items-center text-2xl md:text-3xl justify-center ">
          <div className="text-5xl md:text-7xl text-primary">
            <IconComponent className="" />
          </div>
          <p className="inline-block">{item.title}</p>
        </div>
      </CardHeader>
      <CardContent className="relative z-10 md:space-y-4">
        <p className=" first-letter:pl-6  text-md md:text-lg">{item.text}</p>
      </CardContent>
    </Card>
  );
};
