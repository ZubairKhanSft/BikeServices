import Navbar from '../components/NavBar';
import ServiceRequestCard from '../components/ServiceRequestCard';
import WhyChooseUs from '../components/WhyChooseUs';
import ChhindwaraMark from '../components/ChhindwaraMark';
import ServiceGrid from '../components/ServiceGrid';
import ServicePackages from '../components/ServicePackages';
import RSAPackages from '../components/RSAPackages';
import LabourPriceList from '../components/LabourPriceList';
import JoinUsBanner from '../components/JoinUsBanner';
import FaqAndReviews from '../components/FaqAndReviews';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import GlobalEmergencyBar from '../components/GlobalEmergencyBar';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Chhindwara Bike & Car Services | Car Puncture Repair, Bike Puncture Repair & Roadside Assistance"
        description="Chhindwara Bike & Car Services offers doorstep bike puncture repair, car puncture repair, roadside assistance, and emergency help in Chhindwara. Call +91 8305855880."
        ogTitle="Chhindwara Bike & Car Services"
        ogDescription="Doorstep car puncture repair, bike puncture repair, and roadside assistance in Chhindwara."
        path="/"
      />

      <Navbar />
      <GlobalEmergencyBar />

      <section id="contact">
        <ServiceRequestCard />
      </section>
      <section id="about">
        <WhyChooseUs />
        <ChhindwaraMark />
      </section>
      <section id="services">
        <ServiceGrid />
      </section>
      <ServicePackages />
      <RSAPackages />
      <section id="pricing">
        <LabourPriceList />
      </section>
      <JoinUsBanner />
      <FaqAndReviews />
      <Footer />
    </>
  );
}
