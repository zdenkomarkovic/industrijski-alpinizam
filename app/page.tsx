import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cards2 from "@/components/Cards2";
import Hero from "@/components/Hero";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import Reference from "@/components/Reference";
import ServicesWithImage from "@/components/ServicesWithImage";
import { cards2Data3, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About2 />
      <PozoviteNasOdmah />
      <ServicesWithImage />
      <Cards2
        title={"Prednosti industrijskog alpinizma"}
        data={cards2Data3}
        text={cards2DataText}
      />
      <BackgroundImage image={"/bgImage.jpg"} />
      <Reference />
      <BackgroundImage image={"/painting-bilo-silo-two-asce.jpg"} />
    </div>
  );
}
