import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import doorstepImage from '../assets/doorstepservice.jpeg';
import doorstepVideo from '../assets/door-step-service.mp4';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Doorstep Bike Service in Chhindwara',
  serviceType: 'Doorstep Bike Service',
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
    'Doorstep bike service in Chhindwara for routine maintenance, emergency repair, service at home, and quick two-wheeler support by trained mechanics.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is doorstep bike service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Doorstep bike service means a technician visits your home, office, or preferred location in Chhindwara to inspect, repair, or service your motorcycle without you needing to visit a workshop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide doorstep service for bike repair and servicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Chhindwara Bike Services offers doorstep bike servicing, repair support, oil change, brake checks, basic tuning, and other local maintenance services across Chhindwara.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book doorstep bike service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call or WhatsApp +91 9340383207 to schedule a convenient time. We will arrange a local service visit in Chhindwara.',
      },
    },
  ],
};

export default function DoorstepServicePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Doorstep Bike Service in Chhindwara | Chhindwara Bike Services</title>
        <meta
          name="description"
          content="Book doorstep bike service in Chhindwara for bike servicing, repair, oil change, brake check, and quick support at your home or office."
        />
        <link rel="canonical" href="https://www.chhindwarabikeservice.in/doorstep-service" />
        <meta property="og:title" content="Doorstep Bike Service in Chhindwara | Chhindwara Bike Services" />
        <meta
          property="og:description"
          content="Book doorstep bike service in Chhindwara for bike servicing, repair, oil change, brake check, and on-site support."
        />
        <meta property="og:url" content="https://www.chhindwarabikeservice.in/doorstep-service" />
        <meta property="og:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Doorstep Bike Service in Chhindwara" />
        <meta
          name="twitter:description"
          content="Home bike service in Chhindwara for maintenance, repair, and quick local support."
        />
        <meta name="twitter:image" content="https://www.chhindwarabikeservice.in/Chhindwara-logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Helmet>

      <main className="mx-auto max-w-6xl px-3 py-6 sm:px-4 md:px-5 lg:px-6 lg:py-10">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Doorstep Service' }]} />

        <article className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:rounded-[30px]">
          <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b2340] text-white">
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200 sm:text-xs">
                  Home service • Chhindwara
                </span>
                <h1 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Doorstep Bike Service in Chhindwara
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg md:leading-8">
                  Looking for a <strong className="text-amber-300">bike service at home in Chhindwara</strong>? We bring professional bike care to your door with reliable inspection, repair, servicing, and quick support without the workshop hassle.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="tel:+919340383207" className="btn-primary justify-center text-sm sm:text-base">Call +91 9340383207</a>
                  <a
                    href="https://wa.me/919340383207?text=Hi%20Chhindwara%20Bike%20Services%2C%20I%20want%20doorstep%20bike%20service%20in%20Chhindwara."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost justify-center border border-white/20 bg-white/5 text-sm text-white hover:bg-white/10 sm:text-base"
                  >
                    WhatsApp Us
                  </a>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-lg font-bold text-amber-300 sm:text-xl">Same Day</div>
                    <div className="mt-1 text-xs text-slate-200 sm:text-sm">Support availability</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-lg font-bold text-amber-300 sm:text-xl">At Home</div>
                    <div className="mt-1 text-xs text-slate-200 sm:text-sm">Doorstep service</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-lg font-bold text-amber-300 sm:text-xl">Local</div>
                    <div className="mt-1 text-xs text-slate-200 sm:text-sm">Chhindwara mechanic</div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/30 shadow-2xl sm:rounded-[26px]">
                  <img
                    src={doorstepImage}
                    alt="Doorstep bike service in Chhindwara"
                    className="block h-[220px] w-full object-cover object-center sm:h-[260px] md:h-[320px] lg:h-[430px]"
                  />
                </div>
              </div>
            </div>
          </header>

          <section className="grid gap-5 p-4 sm:p-6 md:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
            <div className="flex items-center">
              <p className="text-base leading-8 text-gray-700 sm:text-lg">
                Chhindwara Bike Services makes <strong>bike servicing, repair, and basic maintenance</strong> easier for busy riders. Instead of waiting in a workshop, we come to your home, office, or preferred location and help you keep your bike in top condition.
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-slate-900 shadow-sm sm:rounded-[24px]">
              <video
                src={doorstepVideo}
                controls
                preload="metadata"
                playsInline
                className="block h-[220px] w-full object-cover sm:h-[240px] md:h-[260px]"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          <section className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-slate-50 p-5 sm:p-6">
                <h2 className="mb-3 text-xl font-semibold text-slate-900 sm:text-2xl">Why doorstep service is better</h2>
                <ul className="space-y-2 text-sm text-gray-700 sm:text-base">
                  <li>Save travel time and waiting at the workshop</li>
                  <li>Convenient service at your home or office</li>
                  <li>Quick support for urgent inspections and repairs</li>
                  <li>Mechanics inspect your bike at your location</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-slate-50 p-5 sm:p-6">
                <h2 className="mb-3 text-xl font-semibold text-slate-900 sm:text-2xl">Services available at your doorstep</h2>
                <ul className="space-y-2 text-sm text-gray-700 sm:text-base">
                  <li>Bike servicing and maintenance</li>
                  <li>Brake and electrical checks</li>
                  <li>Engine oil and filter service</li>
                  <li>Basic repair and emergency troubleshooting</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-5 sm:p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Doorstep bike service for busy riders</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                <p>
                  In a city like Chhindwara, many people need reliable two-wheeler support but do not have time to visit a full workshop. Our <strong>doorstep bike service</strong> is designed for that exact need. The mechanic arrives with basic tools, checks the bike, and gives a clear recommendation based on the condition of the vehicle.
                </p>
                <p>
                  Whether it is a regular service, oil change, brake check, or a small mechanical issue, our team focuses on practical, honest service. We help riders keep their bikes safe and road-ready without disrupting their routine.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">What happens during a doorstep service visit?</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
                <h3 className="mb-2 font-semibold text-gray-900">Step 1</h3>
                <p className="text-sm leading-7 text-gray-700 sm:text-base">Call or WhatsApp us to book a preferred time and location.</p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
                <h3 className="mb-2 font-semibold text-gray-900">Step 2</h3>
                <p className="text-sm leading-7 text-gray-700 sm:text-base">Our mechanic inspects the bike, checks key parts, and notes the issue.</p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
                <h3 className="mb-2 font-semibold text-gray-900">Step 3</h3>
                <p className="text-sm leading-7 text-gray-700 sm:text-base">We complete the required service or repair and explain the final condition clearly.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Benefits of choosing Chhindwara Bike Services</h2>
            <ul className="space-y-3 pl-5 text-sm leading-7 text-gray-700 list-disc sm:text-base">
              <li>Local service provider with direct knowledge of Chhindwara riding conditions</li>
              <li>Doorstep convenience for service, maintenance, and minor repairs</li>
              <li>Transparent communication about work required and parts needed</li>
              <li>Trusted support for regular bike care and quick fixes</li>
            </ul>
          </section>

          <section className="space-y-4 px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Common search queries this service covers</h2>
            <ul className="space-y-2 pl-5 text-sm leading-7 text-gray-700 list-disc sm:text-base">
              <li>doorstep bike service in Chhindwara</li>
              <li>bike service at home Chhindwara</li>
              <li>bike mechanic at home Chhindwara</li>
              <li>bike repair at door step in Chhindwara</li>
              <li>mobile bike mechanic Chhindwara</li>
            </ul>
          </section>

          <div className="mx-4 mb-4 rounded-[24px] border border-indigo-100 bg-indigo-50 p-4 sm:mx-6 sm:mb-6 sm:p-6 md:mx-8 md:mb-8 lg:mx-10 lg:mb-10">
            <h2 className="mb-3 text-xl font-semibold text-indigo-700 sm:text-2xl">Book a doorstep bike service today</h2>
            <p className="mb-4 text-sm leading-7 text-gray-700 sm:text-base">
              Call or WhatsApp today to book a service visit in Chhindwara. Tell us your location, bike type, and issue for quick assistance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:+919340383207" className="btn-primary w-full justify-center text-center">Call +91 9340383207</a>
              <a
                href="https://wa.me/919340383207?text=Hi%20Chhindwara%20Bike%20Services%2C%20I%20want%20doorstep%20bike%20service%20in%20Chhindwara."
                target="_blank"
                rel="noreferrer"
                className="btn-ghost w-full justify-center border border-indigo-200 bg-white text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <section className="space-y-4 px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Related services</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link to="/bike-servicing" className="rounded-3xl border border-indigo-200 bg-indigo-50 p-5 transition hover:bg-indigo-100 sm:p-6">
                <h3 className="mb-2 font-semibold text-indigo-700">Bike Servicing</h3>
                <p className="text-sm leading-7 text-gray-700 sm:text-base">Routine service for a smooth and reliable ride.</p>
              </Link>
              <Link to="/bike-repair" className="rounded-3xl border border-indigo-200 bg-indigo-50 p-5 transition hover:bg-indigo-100 sm:p-6">
                <h3 className="mb-2 font-semibold text-indigo-700">Bike Repair</h3>
                <p className="text-sm leading-7 text-gray-700 sm:text-base">Repair for mechanical issues and brake or parts work.</p>
              </Link>
              <Link to="/bike-spare-parts" className="rounded-3xl border border-indigo-200 bg-indigo-50 p-5 transition hover:bg-indigo-100 sm:p-6">
                <h3 className="mb-2 font-semibold text-indigo-700">Bike Spare Parts</h3>
                <p className="text-sm leading-7 text-gray-700 sm:text-base">Genuine replacement parts and quick fitment support.</p>
              </Link>
              <Link to="/engine-service" className="rounded-3xl border border-indigo-200 bg-indigo-50 p-5 transition hover:bg-indigo-100 sm:p-6">
                <h3 className="mb-2 font-semibold text-indigo-700">Engine Service</h3>
                <p className="text-sm leading-7 text-gray-700 sm:text-base">Oil, filter, ignition and engine performance check.</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
