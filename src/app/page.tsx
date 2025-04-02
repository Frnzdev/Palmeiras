import SerAvanti from "./components/reason";
import SectionPlanos from "./components/section-planos";
import Jogadores from "./components/section-players";
import SliderPalmeiras from "./components/slider-palmeiras";

export default function Home() {
  return (
    <div className="bg-gray-200 overflow-hidden">
      <SliderPalmeiras />
      <SerAvanti />
      <SectionPlanos />
      <Jogadores />
    </div>
  );
}
