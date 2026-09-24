import { useState } from "react";

const faqItems = [
  {
    question: "What services does Chhindwara Bike Services provide?",
    answer:
      "Chhindwara Bike Services offers motorcycle servicing, repair, doorstep service, battery support, spare parts, detailing, wheel care, accidental repair, and general maintenance for bikes.",
  },
  {
    question: "Where is Chhindwara Bike Services located?",
    answer:
      "The business is located at Bail Bazar, Rautha Wada, Chhindwara, Madhya Pradesh 480001.",
  },
  {
    question: "How much does bike servicing cost in Chhindwara?",
    answer:
      "Service pricing varies by bike type and package. The website lists At-Home service packages starting from ₹899 for the Classic package, with higher packages for premium, Royal Enfield, and sports bikes.",
  },
  {
    question: "Do you provide bike repair services in Chhindwara?",
    answer:
      "Yes. The business provides repair services including engine repair, accidental repair, wheel care, battery service, and regular maintenance work.",
  },
  {
    question: "Do you provide bike spare parts?",
    answer:
      "Yes. The business lists spare parts availability and a buy spare parts service.",
  },
  {
    question: "Do you provide bike pickup and drop?",
    answer:
      "The business promotes doorstep service and at-home service packages, which means service can be arranged at the customer’s location for eligible cases.",
  },
  {
    question: "Do you provide bike washing?",
    answer:
      "Yes. The website includes detailing and wash-related care under its service offerings.",
  },
  {
    question: "How can I contact Chhindwara Bike Services?",
    answer:
      "You can contact the business by phone at +91 8305855880, via WhatsApp, or by visiting Bail Bazar, Rautha Wada, Chhindwara, Madhya Pradesh 480001.",
  },
];

const googleReviewsUrl = "https://www.google.com/maps/place/Chhindwara+Bike+Services/@22.0605777,78.9422883,17z";

const reviewHighlights = [
  "Verified Google Business Profile",
  "Customer feedback on Google Maps",
  "Latest reviews and updates",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FaqAndReviews() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-slate-100 py-16 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b1d3a]">
              Business information
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0b1d3a] md:text-4xl">
              Frequently asked questions
            </h2>

            <div className="mt-6 space-y-4">
              {faqItems.map(({ question, answer }, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={question}
                    className="overflow-hidden rounded-2xl border border-yellow-200 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg font-semibold text-[#0b1d3a]">{question}</span>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border border-yellow-300 bg-yellow-50 text-lg font-bold text-[#0b1d3a] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-yellow-100 px-5 pb-5 pt-4">
                        <p className="text-sm leading-7 text-slate-700 md:text-base">{answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="rounded-3xl border border-yellow-300 bg-gradient-to-br from-[#0d2247] via-[#102a53] to-[#091a31] p-6 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-300">
              Google Reviews
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">Customer feedback from Google</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
              Review updates and customer feedback are available on the official Google Business Profile.
            </p>

            <div className="mt-5 space-y-3">
              {reviewHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-4 py-3 text-sm font-bold text-[#081b36] transition hover:bg-yellow-300"
              >
                View our Google Reviews
              </a>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-yellow-300 hover:text-yellow-300"
              >
                Review us on Google
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-300">
              We display the official Google business page without inventing a rating or fake customer review.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
