import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Engine Service',
  serviceType: 'Engine Service',
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
    'Professional engine service in Chhindwara for bikes, including oil change, fuel system check, spark plug inspection, and performance tuning.',
};

export default function EngineServicePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Bike Engine Service in Chhindwara | Chhindwara Bike Services</title>
        <meta
          name="description"
          content="Professional bike engine service in Chhindwara with oil change, fuel system checks, and spark plug inspection. Improve performance and reliability."
        />
        <link rel="canonical" href="https://www.chhindwarabikeservice.in/engine-service" />
        <meta property="og:title" content="Bike Engine Service in Chhindwara | Chhindwara Bike Services" />
        <meta
          property="og:description"
          content="Professional bike engine service in Chhindwara with oil change, fuel system checks, and spark plug inspection. Improve performance and reliability."
        />
        <meta property="og:url" content="https://www.chhindwarabikeservice.in/engine-service" />
        <meta property="og:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bike Engine Service in Chhindwara" />
        <meta
          name="twitter:description"
          content="Professional bike engine service in Chhindwara with oil change, fuel system checks, and spark plug inspection."
        />
        <meta name="twitter:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Engine Service' }]} />
        <div className="card bg-white p-8 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Bike Engine Service in Chhindwara</h1>
          <p className="text-gray-700 mb-6">
            Keep your bike running smoothly with engine service from Chhindwara Bike Services.
            Our mechanics check oil, fuel delivery, spark plugs, and engine assembly for safer riding and better fuel economy.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-10">
            <div className="rounded-3xl border border-gray-200 p-6 bg-slate-50">
              <h2 className="text-2xl font-semibold mb-3">Engine service includes</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Oil change and oil filter replacement</li>
                <li>Spark plug inspection and replacement</li>
                <li>Fuel line and carburetor checks</li>
                <li>Compression and engine noise review</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-200 p-6 bg-slate-50">
              <h2 className="text-2xl font-semibold mb-3">Performance tuning</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Smoother acceleration and throttle response</li>
                <li>Reduced engine knocking and vibration</li>
                <li>Better mileage from a clean engine</li>
                <li>Preventive maintenance for long-term reliability</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-3xl mb-10">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Schedule engine service</h2>
            <p className="text-gray-700 mb-4">
              Book a service visit in Chhindwara and our mechanic will inspect your engine at your home, then complete any required maintenance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919340383207"
                className="btn-primary w-full text-center"
              >
                Call +91 9340383207
              </a>
              <a
                href="https://wa.me/919340383207?text=Hi%20Chhindwara%20Bike%20Services%2C%20I%20need%20engine%20service%20for%20my%20bike%20in%20Chhindwara.%20Please%20help."
                target="_blank"
                rel="noreferrer"
                className="btn-ghost w-full text-center"
              >
                WhatsApp Engine Service
              </a>
            </div>
          </div>

          <section className="space-y-6 mb-10">
            <h2 className="text-3xl font-semibold text-gray-900">Why engine service matters</h2>
            <p className="text-gray-700">
              Regular engine service prevents breakdowns, extends the life of your bike, and helps avoid costly repairs later.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Oil and filters</h3>
                <p>Fresh engine oil and clean filters keep moving parts protected.</p>
              </div>
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Spark plug care</h3>
                <p>Proper ignition reduces misfires and improves starting.</p>
              </div>
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Fuel delivery</h3>
                <p>Clean fuel lines and tuned carburetion deliver better mileage.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">Related services</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link to="/bike-servicing" className="rounded-3xl border border-indigo-200 p-6 bg-indigo-50 hover:bg-indigo-100 transition">
                <h3 className="font-semibold text-indigo-700 mb-2">Bike Servicing</h3>
                <p className="text-gray-700">Full service packages for regular maintenance and safety checks.</p>
              </Link>
              <Link to="/bike-spare-parts" className="rounded-3xl border border-indigo-200 p-6 bg-indigo-50 hover:bg-indigo-100 transition">
                <h3 className="font-semibold text-indigo-700 mb-2">Spare Parts</h3>
                <p className="text-gray-700">Need parts for your engine or maintenance service? We supply genuine components.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
