import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cards2 from "@/components/Cards2";
import Hero from "@/components/Hero";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import Reference from "@/components/Reference";
import { cards2Data3, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About2 />
      <PozoviteNasOdmah
        title={
          "Za visinske radove, SZR M-MIGIĆ vam stoji na raspolaganju. Kontaktirajte nas za besplatnu procenu."
        }
      />

      <Cards2
        title={"Prednosti industrijskog alpinizma"}
        data={cards2Data3}
        text={cards2DataText}
      />
      <BackgroundImage image={"/bgImage.jpg"} />
      <Reference />
      <BackgroundImage image={"/lim2.jpg"} />
    </div>
  );
}
