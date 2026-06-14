import Image from "next/image";
import StatsSection from "../components/StatsSection.jsx";
import FeaturesSection from "../components/feature.jsx";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <StatsSection />
      <FeaturesSection />
    </div>
  );
}
