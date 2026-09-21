import {
  FaCalendarAlt,
  FaPaintRoller,
  FaShieldAlt,
  FaDoorOpen,
  FaCog,
  FaBroom,
  FaTools,
  FaCarBattery,
  FaShoppingCart,
  FaBolt,
  FaCogs,
  FaTruckMoving,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  { icon: <FaCalendarAlt size={32} />, label: 'Periodic Service', path: '/bike-servicing' },
  { icon: <FaPaintRoller size={32} />, label: 'Dent & Paint' },
  { icon: <FaShieldAlt size={32} />, label: 'Bike Insurance' },
  { icon: <FaDoorOpen size={32} />, label: 'Doorstep Service', path: '/doorstep-service' },
  { icon: <FaCog size={32} />, label: 'Wheel Care' },
  { icon: <FaBroom size={32} />, label: 'Detailing' },
  { icon: <FaTools size={32} />, label: 'Accidental Repair', path: '/bike-repair' },
  { icon: <FaCarBattery size={32} />, label: 'Bike Batteries' },
  { icon: <FaShoppingCart size={32} />, label: 'Buy Spare Parts', path: '/bike-spare-parts' },
  { icon: <FaBolt size={32} />, label: 'EV Bike Service' },
  { icon: <FaCogs size={32} />, label: 'Engine Repair', path: '/engine-service' },
  { icon: <FaTruckMoving size={32} />, label: 'Bike RSA Services' },
];

export default function ServiceGrid() {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
        {services.map((service, index) => (
          service.path ? (
            <Link
              key={index}
              to={service.path}
              className="group block bg-white hover:bg-[#f8f1d6] transition-colors duration-300 text-gray-800 p-5 rounded-xl shadow-sm flex flex-col items-center justify-center border border-[#e5d7a3] hover:border-[#d4af37]"
            >
              <div className="mb-3 text-[#0b2340] group-hover:text-[#0b2340]">{service.icon}</div>
              <p className="font-medium text-sm">{service.label}</p>
            </Link>
          ) : (
            <div
              key={index}
              className="group bg-white hover:bg-[#0b2340] hover:text-white transition-colors duration-300 text-gray-800 p-5 rounded-xl shadow-sm flex flex-col items-center justify-center border border-[#e5d7a3]"
            >
              <div className="mb-3 text-[#0b2340] group-hover:text-white">{service.icon}</div>
              <p className="font-medium text-sm">{service.label}</p>
            </div>
          )
        ))}
      </div>
    </section>
  );
}
