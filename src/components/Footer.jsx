import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  // Coordinates embed for reliable interactive map
  const mapSrc = "https://www.google.com/maps?q=22.060591,78.9424304&z=17&output=embed";
  const placeUrl = "https://www.google.com/maps/place/Chhindwara+Bike+Services/@22.0605777,78.9422883,17z";

  return (
    <footer className="bg-white text-gray-800 py-12 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-center md:text-left">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/Chhindwara-logo.png" alt="Chhindwara Bike Services" className="w-12 h-12 rounded-md shadow-sm" />
              <div>
                <h2 className="text-2xl font-bold">Chhindwara Bike Services</h2>
                <div className="text-sm text-gray-600">Doorstep bike repair, servicing & spare parts</div>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <a href="tel:+918305855880" className="inline-flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-md font-semibold shadow-sm hover:bg-yellow-400"> 
                <FaPhoneAlt /> <span>+91 8305855880</span>
              </a>
              <a href="https://wa.me/918305855880" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-2 sm:mt-0 text-sm text-gray-600 hover:text-gray-800">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-gray-700" />
                <div>
                  Bail Bazar, Rautha Wada,<br/>Chhindwara, Madhya Pradesh 480001
                </div>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-gray-700" />
                <a href="tel:+918305855880" className="hover:text-gray-900">+91 8305855880</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-gray-700" />
                <a href="mailto:info@chhindwarabikeservice.in" className="hover:text-gray-900">info@chhindwarabikeservice.in</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <FaTwitter />
              </a>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Quick Support:
              <div className="mt-1">
                <a href="tel:+918305855880" className="font-medium text-gray-800 mr-3">+91 8305855880</a>
                <a href="https://wa.me/918305855880" target="_blank" rel="noreferrer" className="font-medium text-gray-800">Chat on WhatsApp</a>
              </div>
              <div className="mt-2 text-sm text-gray-600">Open: Mon–Sun 9:00 AM – 10:00 PM</div>
              <div className="mt-3 flex justify-center md:justify-start gap-2">
                <a href="tel:+918305855880" className="inline-block bg-yellow-500 text-black px-3 py-2 rounded-md font-semibold shadow-sm hover:bg-yellow-400">Call</a>
                <a href="https://wa.me/918305855880" target="_blank" rel="noreferrer" className="inline-block bg-green-500 text-white px-3 py-2 rounded-md font-semibold shadow-sm hover:bg-green-600">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        {/* Map section (responsive, smaller) */}
        <div className="mt-6">
          <div className="w-full rounded-lg overflow-hidden shadow mx-auto" style={{ maxWidth: '720px' }}>
            <div style={{ position: 'relative', paddingBottom: '45%' }}>
              <iframe
                title="Chhindwara Bike Services map"
                src={mapSrc}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="mt-3 text-center">
            <a href={placeUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-black px-3 py-2 rounded-md font-semibold shadow-md hover:bg-yellow-400">Open in Google Maps</a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Chhindwara Bike Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
