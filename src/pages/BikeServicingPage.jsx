import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bike Servicing',
  serviceType: 'Bike Servicing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Chhindwara Bike Services',
    telephone: '+919340383207',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bail Bazar, Rautha Wada',
      addressLocality: 'Chhindwara',
      addressRegion: 'Madhya Pradesh',
      postalCode: '480001',
      addressCountry: 'IN',
    },
  },
  areaServed: 'Chhindwara',
  description:
    'Comprehensive bike servicing in Chhindwara for motorcycles, scooters, and electric two-wheelers with doorstep pickup and genuine parts.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does bike servicing take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most bike servicing appointments are completed within 60 to 90 minutes at your doorstep, depending on the condition of your motorcycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide service for electric bikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Chhindwara Bike Services offers electric bike servicing and inspections with trained technicians and genuine replacement components.',
      },
    },
  ],
};

export default function BikeServicingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Bike Servicing in Chhindwara | Chhindwara Bike Services</title>
        <meta
          name="description"
          content="Doorstep bike servicing in Chhindwara with trained mechanics, genuine spares, and fast on-site support. Book your bike service today."
        />
        <link rel="canonical" href="https://www.chhindwarabikeservice.in/bike-servicing" />
        <meta property="og:title" content="Bike Servicing in Chhindwara | Chhindwara Bike Services" />
        <meta
          property="og:description"
          content="Doorstep bike servicing in Chhindwara with trained mechanics, genuine spares, and fast on-site support. Book your bike service today."
        />
        <meta property="og:url" content="https://www.chhindwarabikeservice.in/bike-servicing" />
        <meta property="og:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bike Servicing in Chhindwara" />
        <meta
          name="twitter:description"
          content="Doorstep bike servicing in Chhindwara with trained mechanics, genuine spares, and fast on-site support."
        />
        <meta name="twitter:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Helmet>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Bike Servicing' }]} />
        <div className="card bg-white p-8 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Bike Servicing in Chhindwara</h1>
          <p className="text-gray-700 mb-6">
            Chhindwara Bike Services delivers complete bike servicing for motorcycles, scooters, and electric two-wheelers.
            We come to your home, inspect your bike, replace filters and fluids, tighten bolts, and ensure safe riding after every service.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-10">
            <div className="rounded-3xl border border-gray-200 p-6 bg-slate-50">
              <h2 className="text-2xl font-semibold mb-3">What we inspect</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Engine oil and filter check</li>
                <li>Brake system inspection</li>
                <li>Battery and electrical check</li>
                <li>Tyre pressure and wheel alignment</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-200 p-6 bg-slate-50">
              <h2 className="text-2xl font-semibold mb-3">Service benefits</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Doorstep appointment and fast service</li>
                <li>Genuine spares and transparent pricing</li>
                <li>Warranty-backed workmanship</li>
                <li>Clear follow-up recommendations</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-3xl mb-10">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Ready to book your bike service?</h2>
            <p className="text-gray-700 mb-4">
              Call or WhatsApp us now and we’ll arrange a convenient service slot at your address in Chhindwara.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919340383207"
                className="btn-primary w-full text-center"
              >
                Call +91 9340383207
              </a>
              <a
                href="https://wa.me/919340383207?text=Hi%20Chhindwara%20Bike%20Services%2C%20I%20need%20bike%20servicing%20in%20Chhindwara.%20Can%20you%20help%3F"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost w-full text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <section className="space-y-6 mb-10">
            <h2 className="text-3xl font-semibold text-gray-900">How our bike servicing works</h2>
            <p className="text-gray-700">
              Our technician arrives at your location, analyzes the bike condition, and runs a full maintenance checklist before giving you a clear service summary.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Step 1</h3>
                <p>Schedule your service by phone or WhatsApp.</p>
              </div>
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Step 2</h3>
                <p>Technician arrives with tools and genuine spare parts.</p>
              </div>
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Step 3</h3>
                <p>We complete the service, test your bike, and collect payment on delivery.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">Related services</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link to="/bike-repair" className="rounded-3xl border border-indigo-200 p-6 bg-indigo-50 hover:bg-indigo-100 transition">
                <h3 className="font-semibold text-indigo-700 mb-2">Bike Repair</h3>
                <p className="text-gray-700">Need repair work after a breakdown or accident? We handle mechanical repairs and roadside assistance.</p>
              </Link>
              <Link to="/engine-service" className="rounded-3xl border border-indigo-200 p-6 bg-indigo-50 hover:bg-indigo-100 transition">
                <h3 className="font-semibold text-indigo-700 mb-2">Engine Service</h3>
                <p className="text-gray-700">Choose an engine-focused inspection for performance, oil change, and long-term reliability.</p>
              </Link>
              <Link to="/bike-spare-parts" className="rounded-3xl border border-indigo-200 p-6 bg-indigo-50 hover:bg-indigo-100 transition">
                <h3 className="font-semibold text-indigo-700 mb-2">Spare Parts</h3>
                <p className="text-gray-700">Buy genuine bike spare parts and accessories delivered to your doorstep in Chhindwara.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
