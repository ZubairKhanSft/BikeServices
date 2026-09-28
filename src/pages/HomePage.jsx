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
import { siteConfig } from '../components/routeData';

const serviceLinks = siteConfig.services;

export default function HomePage() {
  // Homepage-level EmergencyService JSON-LD to help AI indexing of areaServed
  const emergencySchema = {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    name: siteConfig.business.name,
    telephone: siteConfig.business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address,
      addressLocality: siteConfig.business.city,
      addressRegion: siteConfig.business.state,
      postalCode: '480001',
      addressCountry: 'IN'
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '22.0574',
          longitude: '78.9382'
        },
        geoRadius: '12000'
      },
      ... (siteConfig.areaServedLocalities || []),
      ... (siteConfig.areaServedSuburbs || [])
    ]
  };

  return (
    <>
      <SEOHead
        title="Chhindwara Bike & Car Services | Car Puncture Repair, Bike Puncture Repair & Roadside Assistance"
        description="Chhindwara Bike & Car Services offers doorstep bike puncture repair, car puncture repair, roadside assistance, and emergency help in Chhindwara. Call +91 8305855880."
        ogTitle="Chhindwara Bike & Car Services"
        ogDescription="Doorstep car puncture repair, bike puncture repair, and roadside assistance in Chhindwara."
        path="/"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }} />

      <Navbar />
      <GlobalEmergencyBar />

      <section id="contact">
        <ServiceRequestCard />
      </section>
      <section id="about">
        <WhyChooseUs />
        <ChhindwaraMark />
      </section>
      <section id="services" className="bg-[#f8fafc] py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b1d3a]">Emergency service</p>
              <h2 className="mt-2 text-3xl font-bold text-[#0b1d3a] md:text-4xl">Car & Bike puncture & roadside assistance</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {serviceLinks.map((service) => (
              <a
                key={service.url}
                href={service.url}
                className="group flex h-full flex-col justify-between rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0b1d3a]">Service</p>
                  <h3 className="mt-3 text-xl font-bold text-[#0b1d3a] group-hover:text-[#0d2247]">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0d2247]">
                  Learn more
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8">
            <ServiceGrid />
          </div>
        </div>
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
