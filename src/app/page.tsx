import HeroSlider from "@/components/home/HeroSlider";
import CoreServices from "@/components/home/CoreServices";
import Industries from "@/components/home/Industries";
import Certifications from "@/components/home/Certifications";
import NationwideCoverage from "@/components/home/NationwideCoverage";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <CoreServices />
      <Industries />
      <Certifications />
      <NationwideCoverage />
    </main>
  );
}