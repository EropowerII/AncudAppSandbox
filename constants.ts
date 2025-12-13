import { AppLocation, BusRoute, BusinessItem, EmergencyContact, EventItem, Language, LocationType } from './types';

// Approximate coordinates for Ancud locations based on descriptions/names
// Adjusted to ensure points are on land/accessible areas
export const LOCATIONS: AppLocation[] = [
  { id: 'loc_trauco', name: 'Ruta del Trauco', type: LocationType.ACTIVITY, coordinates: { lat: -41.8485, lng: -73.8050 }, link: 'https://maps.app.goo.gl/ZPaoAuF4bLw44ZPP9' },
  { id: 'loc_fuerte', name: 'Fuerte San Antonio', type: LocationType.HISTORY, coordinates: { lat: -41.8633, lng: -73.8372 }, link: 'https://maps.app.goo.gl/YyscsqnMdNwUm6kC8' },
  { id: 'loc_museum', name: 'Regional Museum of Ancud', type: LocationType.MUSEUM, coordinates: { lat: -41.8698, lng: -73.8268 }, link: 'https://maps.app.goo.gl/JBpaNVsi21dqfdDz7' },
  { id: 'loc_muelle', name: 'Muelle de la Luz', type: LocationType.ACTIVITY, coordinates: { lat: -42.0485, lng: -74.0325 }, link: 'https://maps.app.goo.gl/ZduauzHT6pN4w1VL6' }, // Moved to parking/entrance area
  { id: 'loc_hueihuen', name: 'Cerro Mirador Hueihuen', type: LocationType.VIEW, coordinates: { lat: -41.8850, lng: -73.8050 }, link: 'https://maps.app.goo.gl/Gep8dKPAs3jDgfJx6' },
  { id: 'loc_arena', name: 'Playa Arena Gruesa', type: LocationType.BEACH, coordinates: { lat: -41.8595, lng: -73.8210 }, link: 'https://maps.app.goo.gl/VPD56wFMyi6ZnmEa8' },
  { id: 'loc_lechagua', name: 'Playa Lechagua', type: LocationType.BEACH, coordinates: { lat: -41.8842, lng: -73.8745 }, link: 'https://maps.app.goo.gl/uZ7dfd9v2znvW3Ue6' },
  { id: 'loc_marbrava', name: 'Mar Brava', type: LocationType.BEACH, coordinates: { lat: -41.8667, lng: -74.0167 }, link: 'https://maps.app.goo.gl/imkhcrgNDXiRFsTT6' },
  { id: 'loc_caleuche', name: 'Muelle El Caleuche', type: LocationType.VIEW, coordinates: { lat: -41.8580, lng: -73.8400 }, link: 'https://maps.app.goo.gl/wdEHTLKriSrXpWRp8' },
  { id: 'loc_punihuil', name: 'Islotes de Puñihuil', type: LocationType.ACTIVITY, coordinates: { lat: -41.9215, lng: -74.0250 }, link: 'https://maps.app.goo.gl/KAEgzzHEuXJBFPsi7' }, // Moved to beach access
  { id: 'loc_pumillahue', name: 'Playa Pumillahue', type: LocationType.BEACH, coordinates: { lat: -41.9500, lng: -74.0200 }, link: 'https://maps.app.goo.gl/UAMit3MyGZrJsnGV8' },
  { id: 'loc_diujan', name: 'Diujan la ruta del amor', type: LocationType.VIEW, coordinates: { lat: -41.9800, lng: -73.9500 }, link: 'https://maps.app.goo.gl/p2Doa2mda3KKUUUa7' },
  { id: 'loc_duhatao_trail', name: 'Duhatao - Chepu Trail', type: LocationType.ACTIVITY, coordinates: { lat: -41.9900, lng: -74.0500 }, link: 'https://maps.app.goo.gl/24VE1jVQwqcmv3vN9' },
  { id: 'loc_duhatao_beach', name: 'Duhatao Beach', type: LocationType.BEACH, coordinates: { lat: -41.9950, lng: -74.0550 }, link: 'https://maps.app.goo.gl/yjbo6xwgQxp4BbiK6' },
  { id: 'loc_chepu_beach', name: 'Playa de Chepu', type: LocationType.BEACH, coordinates: { lat: -42.0400, lng: -74.0300 }, link: 'https://maps.app.goo.gl/NHjFUocoHtZwF37a7' },
  { id: 'loc_chepu_park', name: 'Reserva Ecologica Chepu', type: LocationType.PARK, coordinates: { lat: -42.0550, lng: -74.0050 }, link: 'https://maps.app.goo.gl/hHCsEjoux79N2xhcA' },
  { id: 'loc_caulin', name: 'Playa Caulin', type: LocationType.BEACH, coordinates: { lat: -41.8167, lng: -73.6167 }, link: 'https://maps.app.goo.gl/Jq7xK5Lk3Q2qQCAc7' },
  { id: 'loc_senda', name: 'Estación Biológica Senda Darwin', type: LocationType.ACTIVITY, coordinates: { lat: -41.8700, lng: -73.6800 }, link: 'https://maps.app.goo.gl/TTPjye19vxKgUdZCA' },
  { id: 'loc_linao', name: 'Costanera Linao', type: LocationType.BEACH, coordinates: { lat: -41.9200, lng: -73.6000 }, link: 'https://maps.app.goo.gl/1qdNGeKsySxh4Pqy8' },
  { id: 'loc_chilen', name: 'Punta Chilen', type: LocationType.BEACH, coordinates: { lat: -41.8300, lng: -73.7000 }, link: 'https://maps.app.goo.gl/ydkSQUkvmjrbXbqh9' },
  { id: 'loc_mitos', name: 'Refugio de los Mitos', type: LocationType.ACTIVITY, coordinates: { lat: -41.8500, lng: -73.7800 }, link: 'https://maps.app.goo.gl/kKhUy7gzaFFKLJvB6' },
  { id: 'loc_tren', name: 'Tren de Madera Chepu', type: LocationType.ACTIVITY, coordinates: { lat: -42.0450, lng: -74.0250 }, link: 'https://maps.app.goo.gl/fuGPyGDB7iYuMuWT8' },
  { id: 'loc_meular', name: 'Meular Park', type: LocationType.PARK, coordinates: { lat: -41.8900, lng: -73.7500 }, link: 'https://maps.app.goo.gl/Tfi4DH7E55RTnTWk6' },
  
  // Locations derived from Events
  { id: 'loc_evt_1', name: 'Costanera Ancud', type: LocationType.EVENT, coordinates: { lat: -41.8680, lng: -73.8300 } },
  { id: 'loc_evt_2', name: 'Bahía de Ancud', type: LocationType.EVENT, coordinates: { lat: -41.8620, lng: -73.8280 } }, // Moved slightly closer to shore

  // Locations derived from Business (Mock) - Distributed around Ancud rural areas
  { id: 'loc_biz_1', name: 'Quesos de Campo', type: LocationType.BUSINESS, coordinates: { lat: -41.9000, lng: -73.7500 } },
  { id: 'loc_biz_2', name: 'Ostras Caulin', type: LocationType.BUSINESS, coordinates: { lat: -41.8150, lng: -73.6200 } },
  { id: 'loc_biz_3', name: 'Tejidos a Telar', type: LocationType.BUSINESS, coordinates: { lat: -41.9500, lng: -73.8500 } },
  { id: 'loc_biz_4', name: 'Ajo Chilote', type: LocationType.BUSINESS, coordinates: { lat: -41.8300, lng: -73.7200 } },
  { id: 'loc_biz_5', name: 'Papas Nativas', type: LocationType.BUSINESS, coordinates: { lat: -41.8900, lng: -73.9500 } },
  { id: 'loc_biz_6', name: 'Tour Playas', type: LocationType.BUSINESS, coordinates: { lat: -41.8750, lng: -73.8350 } },
];

export const EVENTS: EventItem[] = [
  { id: 'evt_1', date: '16/01', time: '10:30', title: 'Festival Nautico', program: 'Muestra Artesanos', description: 'Rescatando el patrimonio marítimo de la ribera tradicional de Chiloé', locationId: 'loc_evt_1' },
  { id: 'evt_2', date: '17/01', time: '10:30', title: 'Festival Nautico', program: 'Muestra Fotografica', description: 'Muestra Fotografica de lanchas chilotas. Expositor fotografico Claudio Pino.', locationId: 'loc_evt_1' },
  { id: 'evt_3', date: '18/01', time: '10:30', title: 'Festival Nautico', program: 'Competencia Remo', description: 'Competencia de Remo en la bahia de Ancud', locationId: 'loc_evt_2' },
  { id: 'evt_4', date: '19/01', time: '12:00', title: 'Festival Nautico', program: 'Acto Conmemorativo', description: '200 años de la anexion de La isla al continente', locationId: 'loc_fuerte' },
];

export const BUSINESSES: BusinessItem[] = [
  { id: 'biz_1', title: 'Quesos de campo', subtitle: 'Productores de Leche y quesos', description: 'Ven a probar nuestros exquisitos productos con vacas de pastoreo!', locationId: 'loc_biz_1' },
  { id: 'biz_2', title: 'Ostras Caulin', subtitle: 'Las mejores Ostras de Ancud', description: 'Ven a probar nuestra gran variedad de productos del mar!', locationId: 'loc_biz_2' },
  { id: 'biz_3', title: 'Tejidos a telar', subtitle: 'Conservando la tradicion Chilota', description: 'Productos de lana hechos con amor y tradición de la Isla!', locationId: 'loc_biz_3' },
  { id: 'biz_4', title: 'Ajo Chilote', subtitle: 'El mejor aliño para tu vida', description: 'Ven a conocer y a probar los diferentes productos derivados de el Ajo Chilote!', locationId: 'loc_biz_4' },
  { id: 'biz_5', title: 'Papas Nativas', subtitle: 'Fruto de nuestra tierra', description: 'Degustaciones de algunas de las mas de 220 variedades de papas que ofrece nuestra Isla.', locationId: 'loc_biz_5' },
  { id: 'biz_6', title: 'Tour Playas', subtitle: 'Visitas guiadas a nuestras costas', description: 'Agenda tus viajes y contacta a guias locales que te mostraran la verdadera magia del sur.', locationId: 'loc_biz_6' },
];

export const BUS_SCHEDULE: BusRoute[] = [
  { destination: 'Ahui', schedule: 'LUNES- MIÉRCOLES- VIERNES 13:00 HRS (SÓLO IDA)' },
  { destination: 'Pilluco, Quilo, Aucaco', schedule: 'LUNES a VIERNES 13:30 HRS (SÓLO IDA)' },
  { destination: 'Recta Chacao, Butamanga', schedule: 'LUNES a VIERNES 14:00 HRS' },
  { destination: 'El Quilar, Lecam, Doca', schedule: 'LUNES a VIERNES 11:30, 16:00 y 18:00 HRS' },
  { destination: 'Chacao, Costa Manao', schedule: 'LUN-VIE 11:45, 13:00 | SAB 13:00 HRS' },
  { destination: 'Linao, Pumanzano', schedule: 'LUN-VIE 12:15, 15:00, 17:30 | SAB 13:30 HRS' },
  { destination: 'Huillinco, Lapahué', schedule: 'LUNES a VIERNES 13:00 HRS' },
  { destination: 'Lamecura, Coñimó', schedule: 'LUNES a VIERNES 12:00 y 16:00 HRS' },
  { destination: 'Caulín, Chacao', schedule: 'LUNES a VIERNES 12:00 y 15:30 HRS' },
  { destination: 'Caulín Alto y Bajo', schedule: 'LUNES a VIERNES 13:00 HRS' },
  { destination: 'Chepu', schedule: 'LUNES- MIÉRCOLES-VIERNES 15:00 HRS (SÓLO IDA)' },
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  { institution: 'CONAF', address: 'Errázuriz 317', phone1: '56652627520', phone2: '56652622413' },
  { institution: 'CAPITANÍA DE PUERTO', address: 'Lord Cochrane S/N', phone1: '56652623113' },
  { institution: 'BIBLIOTECA PÚBLICA', address: 'Chacabuco 795', phone1: '56652628244' },
  { institution: 'CARABINEROS', address: 'Baquedano 370', phone1: '56652765338' },
  { institution: 'SERNAC', address: 'Blanco Encalada 660', phone1: '56652487738' },
];

export const TRANSLATIONS = {
  viewOnMap: {
    [Language.ESP]: 'Ver en mapa',
    [Language.ENG]: 'View on map'
  },
  callNow: {
    [Language.ESP]: 'LLAMAR AHORA',
    [Language.ENG]: 'CALL NOW'
  },
  busOrigin: {
    [Language.ESP]: 'Desde: Terminal Rural, Colo Colo 318',
    [Language.ENG]: 'From: Rural Terminal, Colo Colo 318'
  },
  filterAll: {
    [Language.ESP]: 'Todo',
    [Language.ENG]: 'All'
  },
  tabs: {
    events: { [Language.ESP]: 'Eventos', [Language.ENG]: 'Events' },
    business: { [Language.ESP]: 'Negocios', [Language.ENG]: 'Business' },
    map: { [Language.ESP]: 'Mapa', [Language.ENG]: 'Map' },
    bus: { [Language.ESP]: 'Buses', [Language.ENG]: 'Buses' },
    info: { [Language.ESP]: 'Info', [Language.ENG]: 'Info' },
  },
  welcome: {
    [Language.ESP]: 'Bienvenido a Ancud',
    [Language.ENG]: 'Welcome to Ancud'
  }
};
