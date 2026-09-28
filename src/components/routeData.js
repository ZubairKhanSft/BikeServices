export const siteConfig = {
  business: {
    name: 'Chhindwara Bike & Car Services',
    phone: '+918305855880',
    phoneHref: 'tel:+918305855880',
    whatsappHref: 'https://wa.me/918305855880?text=Hi%2C%20I%20need%20emergency%20puncture%20or%20RSA%20help%20in%20Chhindwara.',
    address: 'Bail Bazar, Rautha Wada, Chhindwara, Madhya Pradesh 480001',
    city: 'Chhindwara',
    state: 'Madhya Pradesh',
    // Updated areaServed to reflect structured 12 km coverage (localities + GeoCircle)
    areaServed: [
      // GeoCircle for 12 km radius around Bail Bazar workshop
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '22.0574',
          longitude: '78.9382',
        },
        geoRadius: '12000'
      },
      // City Localities & Landmarks (0–5 km)
      'Bail Bazar', 'Rautha Wada', 'Khajri', 'Gulabra', 'Lalbagh', 'Mohan Nagar', 'Bodabag', 'Chandangaon', 'Suklu Dhana', 'Patel Nagar', 'Nirala Nagar', 'Shanti Nagar', 'VIP Road Area', 'Mansarovar Complex Area', 'Chhindwara Railway Station Area', 'Rajeev Gandhi Bus Stand Area',
      // Outskirts, Highways & Suburbs (5–12 km)
      'Linga (Nagpur Road)', 'Sarra', 'Kukda Jagat', 'Imaliya', 'Rohna', 'Sonpur', 'Dungariya', 'Parasia Road Bypass', 'Ring Road', 'Highway Exits'
    ],
    coordinates: { lat: 22.0605777, lng: 78.9422883 },
    openingHours: ['Mo-Su 09:00-22:00'],
  },
  services: [
    {
      name: 'Car Puncture Repair in Chhindwara',
      url: '/car-puncture-repair-chhindwara',
      description: 'Doorstep & roadside car puncture repair in Chhindwara with tube and tubeless tyre support and emergency mobile assistance.',
    },
    {
      name: 'Bike Puncture Repair in Chhindwara',
      url: '/bike-puncture-repair-chhindwara',
      description: 'Home and roadside bike puncture repair near Chhindwara with fast response for tube and tubeless tyres.',
    },
    {
      name: 'Roadside Assistance in Chhindwara',
      url: '/roadside-assistance-chhindwara',
      description: '24/7 car and bike roadside assistance with towing, battery jumpstart and puncture relief.',
    },
  ],
  // Structured area served: GeoCircle + explicit locality lists (separated for UI rendering)
  areaServedLocalities: [
    'Bail Bazar', 'Rautha Wada', 'Khajri', 'Gulabra', 'Lalbagh', 'Mohan Nagar', 'Bodabag', 'Chandangaon', 'Suklu Dhana', 'Patel Nagar', 'Nirala Nagar', 'Shanti Nagar', 'VIP Road Area', 'Mansarovar Complex Area', 'Chhindwara Railway Station Area', 'Rajeev Gandhi Bus Stand Area'
  ],
  areaServedSuburbs: [
    'Linga (Nagpur Road)', 'Sarra', 'Kukda Jagat', 'Imaliya', 'Rohna', 'Sonpur', 'Dungariya', 'Parasia Road Bypass', 'Ring Road', 'Highway Exits'
  ],
};
