import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0b2340] via-[#102b4d] to-[#0a2038] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/Chhindwara-logo.png" alt="Chhindwara Bike Services" className="w-12 h-12 rounded-md shadow-md" />
              <h2 className="text-2xl font-bold">Chhindwara Bike Services</h2>
            </div>
            <p className="text-sm text-white/90">
              Doorstep bike repair, servicing, and authentic spare parts in Chhindwara. Fast, reliable, and friendly mechanics.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="tel:+919340383207" className="inline-block bg-[#d4af37] text-[#0b2340] px-4 py-2 rounded-md font-semibold shadow-sm hover:bg-[#e0be56]">Call Now</a>
              <a href="#services" className="inline-block border border-white/20 px-4 py-2 rounded-md text-sm hover:bg-white/5">Book Service</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-white/90" />
                <div>
                  <div>Bail Bazar, Rautha Wada, Chhindwara, MP 480001</div>
                  <div className="text-xs text-white/70 mt-1">Open: Mon–Sun 9:00 AM – 11:00 PM</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <a href="tel:+919340383207" className="text-white/85">+91 8305855880</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <a href="mailto:info@chhindwarabikeservice.in" className="text-white/85">mkzubair4@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <FaTwitter />
              </a>
            </div>
            <div className="mt-6 text-sm text-white/80">
              <div className="font-medium">Quick Support</div>
              <a href="tel:+919340383207" className="block text-white/90">+91 8305855880 (WhatsApp)</a>
            </div>
          </div>
        </div>

        {/* Centered map below columns */}
        <div className="mt-8">
          <div className="mx-auto rounded-xl overflow-hidden shadow-lg" style={{ maxWidth: '1100px' }}>
            <div style={{ position: 'relative', paddingBottom: '36%' }}>
              <iframe
                title="Chhindwara Bike Services location map"
                src="https://www.google.com/maps?q=Chhindwara+Bike+Services+Bail+Bazar+Chhindwara&z=17&output=embed"
                className="absolute left-0 top-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} Chhindwara Bike Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
