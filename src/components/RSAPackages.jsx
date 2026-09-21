import { useState } from "react";
import ServiceRequestModal from "./ServiceRequestModal";

const rsaPackages = [
  {
    title: "Two-wheeler RSA - Silver",
    price: "₹ 599/-",
    visits: "3 Visits",
    features: ["Towing*", "Battery Jumpstart"],
  },
  {
    title: "Two-wheeler RSA - Gold",
    price: "₹ 999/-",
    visits: "5 Visits",
    features: ["Towing*", "Flat Tyre - Tubeless*"],
  },
  {
    title: "Two-wheeler RSA - Platinum",
    price: "₹ 1499/-",
    visits: "5 Visits",
    features: ["Towing*", "Flat Tyre - Tubeless*"],
  },
  {
    title: "Two-wheeler RSA - EV",
    price: "₹ 1499/-",
    visits: "5 Visits",
    features: ["Towing*", "Flat Tyre - Tubeless*"],
  },
];

export default function RSAPackages() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="bg-gray-100 text-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-10">
          Roadside Assistance (RSA) Packages
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {rsaPackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 border border-indigo-500 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-lg font-bold text-indigo-600 mb-2">{pkg.title}</h3>
                <p className="text-2xl font-extrabold text-black mb-1">{pkg.price}</p>
                <p className="text-sm text-gray-600 mb-3">{pkg.visits}</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
                <button className="text-indigo-600 underline hover:text-indigo-500 text-sm mt-4">
                  See checklist
                </button>
              </div>

              <button onClick={() => setModalOpen(true)} className="mt-6 btn-primary">
                Check Price
              </button>
            </div>
          ))}
        </div>
      </div>

      <ServiceRequestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
