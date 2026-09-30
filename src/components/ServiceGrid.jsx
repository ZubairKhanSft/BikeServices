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

const services = [
  { icon: <FaTruckMoving size={32} />, label: 'Roadside Assistance' },
  { icon: <FaTools size={32} />, label: 'Bike Repair' },
  { icon: <FaBolt size={32} />, label: 'Bike Puncture Repair' },
  { icon: <FaCog size={32} />, label: 'Car Puncture Repair' },
  { icon: <FaDoorOpen size={32} />, label: 'Doorstep Mechanic' },
  { icon: <FaCarBattery size={32} />, label: 'Battery Jumpstart' },
  { icon: <FaTruckMoving size={32} />, label: 'Towing Assistance' },
  { icon: <FaCogs size={32} />, label: 'Motorcycle Repair' },
  { icon: <FaCalendarAlt size={32} />, label: 'Bike Servicing' },
  { icon: <FaShieldAlt size={32} />, label: 'Tubeless Tyre Repair' },
  { icon: <FaBroom size={32} />, label: 'Emergency Road Service' },
  { icon: <FaShoppingCart size={32} />, label: 'Bike Mechanic Support' },
];

export default function ServiceGrid() {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 text-gray-800 p-5 rounded-xl shadow-sm flex flex-col items-center justify-center"
          >
            <div className="mb-3 text-yellow-500">{service.icon}</div>
            <p className="font-medium text-sm">{service.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
