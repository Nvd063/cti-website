import HeroSlider from "@/components/home/HeroSlider";
import CoreServices from "@/components/home/CoreServices";
import Industries from "@/components/home/Industries";
import Certifications from "@/components/home/Certifications";
import NationwideCoverage from "@/components/home/NationwideCoverage";
import CustomerReviews from "@/components/home/CustomerReviews";
import Portfolio from "@/components/home/Portfolio";
import PartnerBrands from "@/components/home/PartnerBrands";
import { getFeaturedServices } from "@/services/service.service";

export default async function Home() {
  const services = await getFeaturedServices();
  return (
    <main>
      <HeroSlider />
      <CoreServices services={services} />
      <Industries />
      <Certifications />
      <NationwideCoverage />
      <CustomerReviews />
      <Portfolio />
      <PartnerBrands />
    </main>
  );
}
