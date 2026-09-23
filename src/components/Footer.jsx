import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const placeUrl = "https://www.google.com/maps/place/Chhindwara+Bike+Services/@22.0605777,78.9422883,17z";
  const embedUrl = "https://www.google.com/maps/place/Chhindwara+Bike+Services/@22.0605777,78.9422883,17z/data=!3m1!4b1!4m5!3m4!1s0x397723b6c84d4e9d:0x0!8m2!3d22.060591!4d78.9424304?hl=en&output=embed";

  return (
    <footer className="bg-white text-gray-800 py-10 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src="/Chhindwara-logo.png" alt="Chhindwara Bike Services" className="w-12 h-12 rounded-md shadow-sm" />
            <div>
              <h2 className="text-2xl font-bold">Chhindwara Bike Services</h2>
              <div className="text-sm text-gray-600">Doorstep bike repair, servicing & spare parts</div>
            </div>
          </div>

          <div className="mt-4">
            <a href="tel:+918305855880" className="inline-flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-md font-semibold shadow-sm hover:bg-yellow-400"> 
              <FaPhoneAlt /> <span>+91 8305855880</span>
            </a>
            <div className="mt-3 text-sm text-gray-600">Open: Mon–Sun 9:00 AM – 10:00 PM</div>
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
            Quick Support: <a href="tel:+918305855880" className="font-medium text-gray-800">+91 8305855880 (WhatsApp)</a>
          </div>
        </div>
      </div>

      {/* Interactive map section */}
      <div className="mt-8">
        <div className="mx-auto rounded-xl overflow-hidden shadow-lg" style={{ maxWidth: '1100px' }}>
          <div style={{ position: 'relative', paddingBottom: '36%' }}>
            <iframe
              title="Chhindwara Bike Services location map"
              src={embedUrl}
              className="absolute left-0 top-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <a href={placeUrl} target="_blank" rel="noopener noreferrer" className="absolute right-4 bottom-4 z-20 bg-yellow-500 text-black px-3 py-2 rounded-md font-semibold shadow-md hover:bg-yellow-400">Open in Google Maps</a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Chhindwara Bike Services. All rights reserved.
      </div>
    </footer>
  );
}
