export default function GlobalEmergencyBar() {
  return (
    <div className="bg-[#0b1d3a] text-white px-4 py-3 text-center text-sm font-medium">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
        <span>Now Available: 20-30 Min Doorstep & Highway Car + Bike Puncture Repair in Chhindwara!</span>
        <div className="flex items-center gap-3">
          <a href="tel:+918305855880" className="font-bold text-yellow-300 hover:text-yellow-200">Call Now: +91 8305855880</a>
          <a
            href="https://wa.me/918305855880?text=Hi%2C%20I%20need%20emergency%20puncture%20or%20RSA%20help%20in%20Chhindwara."
            target="_blank"
            rel="noreferrer"
            className="font-bold text-green-300 hover:text-green-200"
          >
            Share Live Location on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
