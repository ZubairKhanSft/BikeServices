import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bike Spare Parts',
  serviceType: 'Bike Spare Parts',
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
    'Bike spare parts in Chhindwara with delivery and fitment support for scooters, motorcycles, and electric two-wheelers.',
};

export default function BikeSparePartsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Bike Spare Parts in Chhindwara | Chhindwara Bike Services</title>
        <meta
          name="description"
          content="Get genuine bike spare parts in Chhindwara for brakes, filters, batteries, and more. Fast delivery and expert fitment available."
        />
        <link rel="canonical" href="https://www.chhindwarabikeservice.in/bike-spare-parts" />
        <meta property="og:title" content="Bike Spare Parts in Chhindwara | Chhindwara Bike Services" />
        <meta
          property="og:description"
          content="Get genuine bike spare parts in Chhindwara for brakes, filters, batteries, and more. Fast delivery and expert fitment available."
        />
        <meta property="og:url" content="https://www.chhindwarabikeservice.in/bike-spare-parts" />
        <meta property="og:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bike Spare Parts in Chhindwara" />
        <meta
          name="twitter:description"
          content="Get genuine bike spare parts in Chhindwara for brakes, filters, batteries, and more. Fast delivery and expert fitment available."
        />
        <meta name="twitter:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Bike Spare Parts' }]} />
        <div className="card bg-white p-8 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Bike Spare Parts in Chhindwara</h1>
          <p className="text-gray-700 mb-6">
            Find genuine bike spare parts for brakes, batteries, filters, lighting, and other key components.
            We deliver and fit parts for motorcycles, scooters, and electric bikes across Chhindwara.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-10">
            <div className="rounded-3xl border border-gray-200 p-6 bg-slate-50">
              <h2 className="text-2xl font-semibold mb-3">Parts we supply</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Brake shoes and brake pads</li>
                <li>Oil filters and air filters</li>
                <li>Bike batteries and spark plugs</li>
                <li>Tyres, bulbs, and electrical components</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-200 p-6 bg-slate-50">
              <h2 className="text-2xl font-semibold mb-3">Why choose us</h2>
              <ul className="space-y-2 text-gray-700">
                <li>100% genuine spares and honest pricing</li>
                <li>Delivery to your door in Chhindwara</li>
                <li>Fitment and support by trained mechanics</li>
                <li>Help selecting the correct part for your bike model</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-3xl mb-10">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Order spare parts now</h2>
            <p className="text-gray-700 mb-4">
              Send us a message with the part you need and we will confirm availability, price, and delivery details.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919340383207"
                className="btn-primary w-full text-center"
              >
                Call +91 9340383207
              </a>
              <a
                href="https://wa.me/919340383207?text=Hi%20Chhindwara%20Bike%20Services%2C%20I%20need%20bike%20spare%20parts%20in%20Chhindwara.%20Please%20assist."
                target="_blank"
                rel="noreferrer"
                className="btn-ghost w-full text-center"
              >
                WhatsApp Spare Parts
              </a>
            </div>
          </div>

          <section className="space-y-6 mb-10">
            <h2 className="text-3xl font-semibold text-gray-900">How we support spare parts</h2>
            <p className="text-gray-700">
              Our team checks compatibility with your exact bike model, suggests the right component, and can fit the part during the same visit.</p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Compatible parts</h3>
                <p>We match parts to your make and model for safe, reliable repair.</p>
              </div>
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Doorstep delivery</h3>
                <p>Get spare parts delivered anywhere within Chhindwara quickly.</p>
              </div>
              <div className="rounded-3xl bg-white border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold mb-2">Service-ready fitment</h3>
                <p>Our mechanic can install the part and test your bike right away.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">Related services</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link to="/bike-repair" className="rounded-3xl border border-indigo-200 p-6 bg-indigo-50 hover:bg-indigo-100 transition">
                <h3 className="font-semibold text-indigo-700 mb-2">Bike Repair</h3>
                <p className="text-gray-700">Have a damaged part? We can repair and replace it on the same visit.</p>
              </Link>
              <Link to="/engine-service" className="rounded-3xl border border-indigo-200 p-6 bg-indigo-50 hover:bg-indigo-100 transition">
                <h3 className="font-semibold text-indigo-700 mb-2">Engine Service</h3>
                <p className="text-gray-700">Use our engine service for oil, filter, and performance checks.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
