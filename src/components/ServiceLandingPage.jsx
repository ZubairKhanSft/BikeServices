import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import { siteConfig } from './routeData';

const slugMap = {
  'car-puncture-repair-chhindwara': {
    title: 'Doorstep & Roadside Car Puncture Repair in Chhindwara (24x7)',
    h1: 'Doorstep & Roadside Car Puncture Repair in Chhindwara (24x7)',
    description:
      'Emergency car puncture repair in Chhindwara with doorstep assistance, tube and tubeless tyre repair, emergency tyre change, and 24x7 roadside support.',
    intro:
      'Fast car puncture repair in Chhindwara for home, office, and highway emergencies. We help with tube and tubeless puncture repair, emergency tyre changes, and quick air pressure checks.',
    highlights: ['Tube & tubeless puncture repair', 'Emergency tyre change', 'Home/office doorstep support', 'Air pressure check'],
    faq: [
      {
        q: 'Chhindwara me ghar ya raste par Car/Bike puncture repair ke liye kisse contact karein?',
        a: 'Aap +91 8305855880 par call kar sakte hain ya WhatsApp par live location share karke emergency help request kar sakte hain. Coverage Chhindwara ke Bail Bazar, Rautha Wada, Parasia Road, Khajri, Gulabra, Lalbagh, Chandameta, Mohan Nagar, railway station area, aur nearby highway routes ke liye available hai. Typical response time 20-30 minutes.',
      },
      {
        q: 'Kya doorstep car tube & tubeless puncture repair service available hai?',
        a: 'Haan. Car tube aur tubeless puncture repair, emergency air check, and on-site tyre assistance available hai ghar, office, parking, ya roadside locations par. Agar tyre replace karna pade, to emergency tyre change support bhi available hai.',
      },

    ],
  },
  'bike-puncture-repair-chhindwara': {
    title: 'Home & Roadside Bike Puncture Repair Service Chhindwara',
    h1: 'Home & Roadside Bike Puncture Repair Service Chhindwara',
    description:
      'Doorstep bike puncture repair in Chhindwara with quick tyre service, tube or tubeless repair, and roadside support for bikes.',
    intro:
      'Need a quick bike puncture fix in Chhindwara? We provide fast home and roadside bike puncture repair for both tube and tubeless tyres, often within 20–30 minutes.',
    highlights: ['Bike tyre puncture repair', 'Tube & tubeless repair', 'Home/office service', 'Roadside emergency help'],
    faq: [
      {
        q: 'Chhindwara me ghar ya raste par Car/Bike puncture repair ke liye kisse contact karein?',
        a: 'Aap +91 8305855880 par call kar sakte hain. Fast response hota hai Chhindwara ke local areas aur nearby highway routes ke liye, including Bail Bazar, Rautha Wada, Parasia Road, Khajri, Gulabra, Lalbagh, Chandameta, Mohan Nagar, and Chhindwara Railway Station area.',
      },
      {
        q: 'Kya doorstep puncture repair service available hai?',
        a: 'Bike service ke liye doorstep puncture repair available hai. Tube and tubeless tyre issues ko site par check karke repair/replace kiya ja sakta hai.',
      },

    ],
  },
  'roadside-assistance-chhindwara': {
    title: '24/7 Car & Bike Roadside Assistance (RSA) in Chhindwara',
    h1: '24/7 Car & Bike Roadside Assistance (RSA) in Chhindwara',
    description:
      'Emergency roadside assistance in Chhindwara for car and bike breakdowns, puncture repair, jumpstart, towing, and highway support.',
    intro:
      '24/7 emergency assistance for cars and bikes in Chhindwara. We support puncture emergencies, breakdown help, battery jumpstart, towing, and on-road rescue across local and highway routes.',
    highlights: ['Towing support', 'Battery jumpstart', 'Fuel delivery help', 'Puncture emergency service'],
    faq: [
      {
        q: 'Chhindwara me ghar ya raste par Car/Bike puncture repair ke liye kisse contact karein?',
        a: 'Call +91 8305855880 for urgent support. Chhindwara and nearby local routes ke liye doorstep and roadside emergency assistance available hai.',
      },
      {
        q: 'Kya doorstep car tube & tubeless puncture repair service available hai?',
        a: 'Haan. Car puncture repair service ghar, office, parking ya roadside par available hai, with emergency tyre change support as needed. Hum tube aur tubeless puncture repair dono provide karte hain.',
      },

    ],
  },
};

export default function ServiceLandingPage({ slug }) {
  const page = slugMap[slug];
  const schema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    name: siteConfig.business.name,
    image: 'https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=1200&q=80',
    telephone: siteConfig.business.phone,
    url: `https://www.chhindwarabikeservices.in${slug ? `/${slug}` : '/'}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address,
      addressLocality: siteConfig.business.city,
      addressRegion: siteConfig.business.state,
      postalCode: '480001',
      addressCountry: 'IN',
    },
    areaServed: siteConfig.business.areaServed,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.business.coordinates.lat,
      longitude: siteConfig.business.coordinates.lng,
    },
    openingHours: siteConfig.business.openingHours,
    description: page.description,
    sameAs: ['https://www.google.com/maps/place/Chhindwara+Bike+Services/@22.0605777,78.9422883,17z'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: page.h1,
      itemListElement: page.highlights.map((item) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: item },
      })),
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: page.h1,
          description: page.description,
        },
      },
    ],
  }), [page, slug]);

  const faqSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }), [page]);

  return (
    <>
      <SEOHead
        title={page.title}
        description={page.description}
        ogTitle={page.title}
        ogDescription={page.description}
        path={`/${slug}`}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-100 text-slate-800">
        <div className="bg-[#0b1d3a] text-white py-3 px-4 text-center text-sm font-medium">
          Now Available: 20-30 Min Doorstep & Highway Car + Bike Puncture Repair in Chhindwara!
        </div>

        <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <div className="mb-8 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm md:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0b1d3a]">Chhindwara Car & Bike Emergency Service</p>
            <h1 className="text-3xl font-black leading-tight text-[#0b1d3a] md:text-5xl">{page.h1}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">{page.intro}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.business.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-white shadow hover:bg-green-600">
                Share Live Location on WhatsApp
              </a>
              <a href={siteConfig.business.phoneHref} className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-[#0b1d3a] shadow hover:bg-yellow-300">
                Call Now: +91 8305855880
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-[#0b1d3a] mb-4">Why customers choose us</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {page.highlights.map((item) => (
                  <div key={item} className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 font-semibold text-[#0b1d3a]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#0b1d3a] p-5 text-white">
                <h3 className="text-xl font-bold">Serviceable locations in Chhindwara</h3>
                <p className="mt-2 text-sm font-medium text-yellow-200">20–30 Minute Instant Doorstep & Highway Assistance within 12 km Radius of Bail Bazar Workshop.</p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-yellow-200 mb-2">City & Localities (0-5 km)</h4>
                    <div className="flex flex-wrap gap-2">
                      {siteConfig.areaServedLocalities.map((loc) => (
                        <span key={loc} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-100">{loc}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-yellow-200 mb-2">Suburbs & Highway Assistance (Up to 12 km)</h4>
                    <div className="flex flex-wrap gap-2">
                      {siteConfig.areaServedSuburbs.map((loc) => (
                        <span key={loc} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-100">{loc}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-[#0b1d3a] mb-4">Quick contact</h2>
              <div className="space-y-3 text-sm text-slate-700">
                <p><strong>Phone:</strong> <a href={siteConfig.business.phoneHref} className="text-[#0b1d3a] font-semibold">{siteConfig.business.phone}</a></p>
                <p><strong>Location:</strong> {siteConfig.business.address}</p>
                <p><strong>Hours:</strong> Open daily 9:00 AM – 10:00 PM</p>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <a href={siteConfig.business.phoneHref} className="w-full rounded-xl bg-yellow-400 px-4 py-3 text-center font-bold text-[#0b1d3a]">Call Now</a>
                <a href={siteConfig.business.whatsappHref} target="_blank" rel="noreferrer" className="w-full rounded-xl bg-green-500 px-4 py-3 text-center font-bold text-white">WhatsApp for Help</a>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0b1d3a]">Frequently asked questions</h2>
            <div className="mt-5 space-y-4">
              {page.faq.map(({ q, a }) => (
                <div key={q} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-[#0b1d3a]">{q}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="inline-flex items-center justify-center rounded-xl border border-[#0b1d3a] px-4 py-2 font-semibold text-[#0b1d3a] hover:bg-[#0b1d3a] hover:text-white">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
