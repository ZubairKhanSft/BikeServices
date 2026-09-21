import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bike Repair',
  serviceType: 'Bike Repair',
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
    'Fast bike repair services in Chhindwara for engine faults, brake issues, electrical repairs, and accident damage. Roadside help is available too.',
};

export default function BikeRepairPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Bike Repair in Chhindwara | Chhindwara Bike Services</title>
        <meta
          name="description"
          content="Fast bike repair services in Chhindwara for mechanical failures, brake repair, and accident damage. Contact our trained mechanics today."
        />
        <link rel="canonical" href="https://www.chhindwarabikeservice.in/bike-repair" />
        <meta property="og:title" content="Bike Repair in Chhindwara | Chhindwara Bike Services" />
        <meta
          property="og:description"
          content="Fast bike repair services in Chhindwara for mechanical failures, brake repair, and accident damage. Contact our trained mechanics today."
        />
        <meta property="og:url" content="https://www.chhindwarabikeservice.in/bike-repair" />
        <meta property="og:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bike Repair in Chhindwara" />
        <meta
          name="twitter:description"
          content="Fast bike repair services in Chhindwara for mechanical failures, brake repair, and accident damage."
        />
        <meta name="twitter:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Bike Repair' }]} />
        <div className="card bg-white p-8 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Bike Repair in Chhindwara</h1>
          <p className="text-gray-700 mb-6">
            Chhindwara Bike Services specializes in bike repair for mechanical faults, engine issues, brake problems, and roadside emergencies.
            We restore your two-wheeler with genuine parts and precise diagnostics.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-10">
            <div className="rounded-3xl border border-gray-200 p-6 bg-slate-50">
              <h2 className="text-2xl font-semibold mb-3">Common repairs</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Brake replacement and adjustment</li>
                <li>Chain, sprocket, and clutch repair</li>
                <li>Suspension and wheel repair</li>
                <li>Electrical systems and battery repair</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-200 p-6 bg-slate-50">
              <h2 className="text-2xl font-semibold mb-3">Breakdown support</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Roadside assistance inside Chhindwara</li>
                <li>Battery jump-start and towing support</li>
                <li>Speedy diagnostics and repair advice</li>
                <li>Transparent cost estimate before work begins</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-3xl mb-10">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Book a repair visit</h2>
            <p className="text-gray-700 mb-4">
              Send us a WhatsApp message or call to arrange a service technician at your home or workplace.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919340383207"
                className="btn-primary w-full text-center"
              >
                Call +91 9340383207
              </a>
              <a
                href="https://wa.me/919340383207?text=Hi%20Chhindwara%20Bike%20Services%2C%20I%20need%20bike%20repair%20in%20Chhindwara.%20Please%20help."
                target="_blank"
                rel="noreferrer"
                className="btn-ghost w-full text-center"
              >
                WhatsApp Repair Support
              </a>
            </div>
          </div>

          <section className="space-y-6 mb-10">
            <h2 className="text-3xl font-semibold text-gray-900">Repair expertise</h2>
            <p className="text-gray-700">
              We repair both conventional and modern two-wheelers. Our mechanics are experienced with brake repair, engine tuning, electrical diagnostics, and accident damage repair.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Brake Repair</h3>
                <p>Swift inspection and replacement for safe stopping power.</p>
              </div>
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Engine Faults</h3>
                <p>Diagnose leaks, noise, and performance issues with care.</p>
              </div>
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Electrical Repair</h3>
                <p>Fix batteries, wiring, lighting, and starter system problems.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">Related services</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link to="/engine-service" className="rounded-3xl border border-indigo-200 p-6 bg-indigo-50 hover:bg-indigo-100 transition">
                <h3 className="font-semibold text-indigo-700 mb-2">Engine Service</h3>
                <p className="text-gray-700">Deep engine checks and oil service for stronger performance.</p>
              </Link>
              <Link to="/bike-spare-parts" className="rounded-3xl border border-indigo-200 p-6 bg-indigo-50 hover:bg-indigo-100 transition">
                <h3 className="font-semibold text-indigo-700 mb-2">Spare Parts</h3>
                <p className="text-gray-700">Sources genuine bike spare parts for repairs and replacements.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
