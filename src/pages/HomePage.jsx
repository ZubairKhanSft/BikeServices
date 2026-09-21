import { Helmet } from 'react-helmet-async';
import ServiceRequestCard from '../components/ServiceRequestCard';
import WhyChooseUs from '../components/WhyChooseUs';
import ChhindwaraMark from '../components/ChhindwaraMark';
import ServiceGrid from '../components/ServiceGrid';
import ServicePackages from '../components/ServicePackages';
import RSAPackages from '../components/RSAPackages';
import LabourPriceList from '../components/LabourPriceList';
import JoinUsBanner from '../components/JoinUsBanner';
import { Link } from 'react-router-dom';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Chhindwara Bike Services',
  description: 'On-demand bike repair, servicing, spare parts, and engine service in Chhindwara.',
  image: 'https://www.chhindwarabikeservice.in/Chhindwara-logo.png',
  telephone: '+918305855880',
  url: 'https://www.chhindwarabikeservice.in/',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bail Bazar, Rautha Wada',
    addressLocality: 'Chhindwara',
    addressRegion: 'Madhya Pradesh',
    postalCode: '480001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.060591,
    longitude: 78.9424304,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '22:00',
    },
  ],
  hasMap:
    'https://www.google.com/maps/place/Chhindwara+Bike+Services/@22.0605777,78.9422883,116m',
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Bike Servicing',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Bike Repair',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Bike Spare Parts',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Engine Service',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Chhindwara Bike Services — On-demand Repair, Service & Parts</title>
        <meta
          name="description"
          content="Chhindwara Bike Services offers doorstep bike servicing, repair, spare parts, and engine service in Chhindwara with reliable mechanics and quick support."
        />
        <link rel="canonical" href="https://www.chhindwarabikeservice.in/" />
        <meta property="og:title" content="Chhindwara Bike Services — On-demand Repair, Service & Parts" />
        <meta
          property="og:description"
          content="Doorstep bike servicing, repair, spare parts delivery, and engine service in Chhindwara. Call +91 8305855880 today."
        />
        <meta property="og:url" content="https://www.chhindwarabikeservice.in/" />
        <meta property="og:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chhindwara Bike Services" />
        <meta
          name="twitter:description"
          content="Doorstep bike servicing, repair, spare parts delivery, and engine service in Chhindwara. Call +91 8305855880."
        />
        <meta name="twitter:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      </Helmet>

      <section id="location" className="max-w-7xl mx-auto px-4 py-10">
        <div className="card flex flex-col gap-8 p-8 lg:flex-row lg:items-start">
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-bold text-indigo-600 mb-3">Chhindwara Bike Services</h2>
            <p className="text-gray-700 mb-4">
              Address: Bail Bazar, Rautha Wada, Chhindwara, Madhya Pradesh 480001.
            </p>
            <p className="text-gray-700 mb-4">
              Trusted local bike service, repair, and spare parts support with same-day doorstep assistance across Chhindwara.
            </p>
            <p className="text-gray-700 mb-3">
              Phone: <a href="tel:+919340383207" className="font-semibold text-indigo-600">+91 9340383207</a>
            </p>
            <p className="text-sm text-gray-500 mb-6">Open: Mon–Sun 9:00 AM – 6:00 PM</p>
            <div className="flex flex-wrap gap-3">
              <a
                className="btn-primary"
                href="https://www.google.com/maps/dir/?api=1&destination=22.060591,78.9424304"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
              <a
                className="btn-ghost"
                href="https://www.google.com/maps/place/Chhindwara+Bike+Services/@22.0605777,78.9422883,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
              <iframe
                src="https://www.google.com/maps/place/Chhindwara+Bike+Services/@22.0605777,78.9422883,17z/data=!3m1!4b1!4m5!3m4!1s0x397723b6c84d4e9d:0x0!8m2!3d22.060591!4d78.9424304?hl=en&output=embed"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chhindwara Bike Services location map"
              ></iframe>

              {/* Fallback static map (OpenStreetMap) - shown as a clickable image so users can still see the location if embeds are blocked */}
              <div className="mt-4 text-center">
                <a href="https://www.google.com/maps/place/Chhindwara+Bike+Services/@22.0605777,78.9422883,17z" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://staticmap.openstreetmap.de/staticmap.php?center=22.060591,78.9424304&zoom=17&size=800x400&markers=22.060591,78.9424304,red-pushpin"
                    alt="Chhindwara Bike Services map (fallback)"
                    className="mx-auto rounded-lg shadow-lg w-full max-w-3xl"
                  />
                </a>
                <p className="text-sm text-gray-600 mt-2">If the embedded map is blocked, click the image to open the location in Google Maps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
