// ============================================================
// data.js — PolarRoute · Dades completes de Polarier Mallorca
// Hackathon InnovaFP 2026
// ============================================================

// ----------------------------------------------------------
// HOTELS — Llista completa amb estat actual del moll
// camp alerta: true si hi ha incident actiu
// ----------------------------------------------------------
const HOTELS = [

  // ===== ZONA NORD — servits des del Hub Sa Pobla =====
  {
    id: 'h_elisa',
    nom: 'Aparthotel Elisa',
    zona: 'nord',
    adreca: 'Avda. de la Platja, Alcúdia',
    carros: 16,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 4.2,
    eta_prevista: '09:15'
  },
  {
    id: 'h_bordoy',
    nom: 'Bordoy Alcúdia Bay',
    zona: 'nord',
    adreca: 'Carrer dels Pins, Port d\'Alcúdia',
    carros: 22,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 5.1,
    eta_prevista: '09:45'
  },
  {
    id: 'h_eden_alc',
    nom: 'Eden Alcúdia',
    zona: 'nord',
    adreca: 'Platja d\'Alcúdia, Alcúdia',
    carros: 18,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 5.8,
    eta_prevista: '10:10'
  },
  {
    id: 'h_eden_playa',
    nom: 'Eden Playa',
    zona: 'nord',
    adreca: 'Passeig Marítim, Port d\'Alcúdia',
    carros: 20,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 6.3,
    eta_prevista: '10:40'
  },
  {
    // *** HOTEL AMB ALERTA ACTIVA — cas d'ús principal ***
    id: 'h_lago_aptos',
    nom: 'Lago Aptos',
    zona: 'nord',
    adreca: 'Avda. Tucán, Can Picafort',
    carros: 27,
    moll_ocupat: true,
    fins_hora: '12:45',
    vehicle_extern: true,
    motiu_ocupat: 'Camió de congelats (distribuïdor extern)',
    alerta: true,
    km_hub: 12.4,
    eta_prevista: '11:30',
    alerta_missatge: 'Camió de congelats ocupa el moll fins les 12:45h'
  },
  {
    id: 'h_lago_playa',
    nom: 'Lago Playa',
    zona: 'nord',
    adreca: 'Carrer dels Coralls, Can Picafort',
    carros: 19,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 13.1,
    eta_prevista: '13:15'
  },
  {
    id: 'h_orquidea',
    nom: 'Orquídea Playa',
    zona: 'nord',
    adreca: 'Passeig dels Anglesos, Can Picafort',
    carros: 15,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 13.8,
    eta_prevista: '13:50'
  },
  {
    id: 'h_mar_blau',
    nom: 'Mar Blau',
    zona: 'nord',
    adreca: 'Carrer Mar, Muro (Platja de Muro)',
    carros: 21,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 8.9,
    eta_prevista: '14:30'
  },

  // ===== ZONA PALMA / ARENAL — servits des de Son Castelló =====
  {
    id: 'h_balanguera',
    nom: 'Balanguera Beach',
    zona: 'palma',
    adreca: 'Carrer Balanguera, Palma',
    carros: 18,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 3.4,
    eta_prevista: '08:30'
  },
  {
    id: 'h_colon',
    nom: 'Cristóbal Colón',
    zona: 'palma',
    adreca: 'Carrer de Colom, Palma',
    carros: 15,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 4.1,
    eta_prevista: '09:00'
  },
  {
    id: 'h_don_camilo_palma',
    nom: 'Don Camilo',
    zona: 'palma',
    adreca: 'Avda. Joan Miró, Palma',
    carros: 20,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 5.2,
    eta_prevista: '09:30'
  },
  {
    id: 'h_gran_fiesta',
    nom: 'Gran Fiesta',
    zona: 'palma',
    adreca: 'Passeig de s\'Arenal, Llucmajor',
    carros: 25,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 14.7,
    eta_prevista: '10:15'
  },
  {
    id: 'h_negresco',
    nom: 'Negresco',
    zona: 'palma',
    adreca: 'Carrer del Gremi Boneters, Palma',
    carros: 17,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 4.8,
    eta_prevista: '10:45'
  },
  {
    id: 'h_pillari',
    nom: 'Pillari',
    zona: 'palma',
    adreca: 'Camí de Can Pastilla, Llucmajor',
    carros: 12,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 11.3,
    eta_prevista: '11:20'
  },
  {
    id: 'h_riviera',
    nom: 'Riviera Playa',
    zona: 'palma',
    adreca: 'Avda. Bartomeu Riutort, Can Pastilla',
    carros: 22,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 12.1,
    eta_prevista: '11:50'
  },
  {
    id: 'h_tent_arenal',
    nom: 'Tent Arenal',
    zona: 'palma',
    adreca: 'Carrer de la Mar, s\'Arenal',
    carros: 19,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 13.5,
    eta_prevista: '12:20'
  },
  {
    id: 'h_tent_bahia',
    nom: 'Tent Bahía de Palma',
    zona: 'palma',
    adreca: 'Passeig de s\'Arenal, s\'Arenal',
    carros: 23,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 13.9,
    eta_prevista: '12:50'
  },
  {
    id: 'h_tent_capi',
    nom: 'Tent Capi Playa',
    zona: 'palma',
    adreca: 'Carrer del Capità, Can Pastilla',
    carros: 16,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 11.8,
    eta_prevista: '13:20'
  },
  {
    id: 'h_tent_playa',
    nom: 'Tent Playa de Palma',
    zona: 'palma',
    adreca: 'Avda. Nacional, s\'Arenal',
    carros: 21,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 14.2,
    eta_prevista: '13:50'
  },
  {
    id: 'h_whala_beach',
    nom: 'Whala Beach',
    zona: 'palma',
    adreca: 'Passeig de la Mar, Palma',
    carros: 18,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 6.7,
    eta_prevista: '14:20'
  },
  {
    id: 'h_whala_fun',
    nom: 'Whala Fun',
    zona: 'palma',
    adreca: 'Carrer de la Platja, Palma Nova',
    carros: 14,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 7.1,
    eta_prevista: '14:50'
  },
  {
    id: 'h_soul_palma',
    nom: 'Soul Palma',
    zona: 'palma',
    adreca: 'Carrer de Sant Miquel, Palma',
    carros: 11,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 5.5,
    eta_prevista: '15:10'
  },

  // ===== ZONA PALMANOVA / MAGALUF =====
  {
    id: 'h_bermudas',
    nom: 'Bermudas',
    zona: 'palmanova',
    adreca: 'Carrer des Pins, Palmanova',
    carros: 15,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 18.3,
    eta_prevista: '09:10'
  },
  {
    id: 'h_bikini',
    nom: 'Bikini',
    zona: 'palmanova',
    adreca: 'Avda. de la Platja, Magaluf',
    carros: 13,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 19.7,
    eta_prevista: '09:45'
  },
  {
    id: 'h_club_palmanova',
    nom: 'Club Palmanova Park',
    zona: 'palmanova',
    adreca: 'Carrer Magaluf, Calvià',
    carros: 20,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 18.9,
    eta_prevista: '10:20'
  },
  {
    id: 'h_florida',
    nom: 'Florida',
    zona: 'palmanova',
    adreca: 'Carrer de Palmanova, Calvià',
    carros: 17,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 18.1,
    eta_prevista: '10:55'
  },
  {
    id: 'h_martinique',
    nom: 'Martinique',
    zona: 'palmanova',
    adreca: 'Avda. de la Platja, Palmanova',
    carros: 19,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 18.5,
    eta_prevista: '11:30'
  },
  {
    id: 'h_palmanova_beach',
    nom: 'Palmanova Beach Apts',
    zona: 'palmanova',
    adreca: 'Carrer de la Mar, Palmanova',
    carros: 22,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 17.8,
    eta_prevista: '12:05'
  },
  {
    id: 'h_palmanova_suites',
    nom: 'Palmanova Suites',
    zona: 'palmanova',
    adreca: 'Passeig de Palmanova, Calvià',
    carros: 18,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 17.5,
    eta_prevista: '12:40'
  },
  {
    id: 'h_tent_calvia',
    nom: 'Tent Calvià',
    zona: 'palmanova',
    adreca: 'Carrer de Calvià, Calvià',
    carros: 16,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 22.4,
    eta_prevista: '13:15'
  },
  {
    id: 'h_tent_mojito',
    nom: 'Tent Mojito',
    zona: 'palmanova',
    adreca: 'Avda. de Magaluf, Magaluf',
    carros: 14,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 20.1,
    eta_prevista: '13:50'
  },
  {
    id: 'h_tent_palmanova',
    nom: 'Tent Palmanova',
    zona: 'palmanova',
    adreca: 'Carrer de Palmanova, Palmanova',
    carros: 21,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 18.0,
    eta_prevista: '14:25'
  },
  {
    id: 'h_torrenova',
    nom: 'Torrenova',
    zona: 'palmanova',
    adreca: 'Avda. de Torrenova, Calvià',
    carros: 25,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 20.5,
    eta_prevista: '15:00'
  },

  // ===== ZONA PEGUERA =====
  {
    id: 'h_bella_paguera',
    nom: 'Bella Paguera',
    zona: 'peguera',
    adreca: 'Avda. Peguera, Peguera',
    carros: 18,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 28.7,
    eta_prevista: '09:30'
  },
  {
    id: 'h_don_camilo_peguera',
    nom: 'Don Camilo',
    zona: 'peguera',
    adreca: 'Carrer de Peguera, Calvià',
    carros: 15,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 28.2,
    eta_prevista: '10:10'
  },
  {
    id: 'h_lido_park',
    nom: 'Lido Park',
    zona: 'peguera',
    adreca: 'Passeig de Peguera, Peguera',
    carros: 20,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 29.1,
    eta_prevista: '10:50'
  },
  {
    id: 'h_paguera_park',
    nom: 'Paguera Park',
    zona: 'peguera',
    adreca: 'Avda. del Mar, Peguera',
    carros: 22,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 29.5,
    eta_prevista: '11:30'
  },

  // ===== ZONA EST — Cala d'Or, Cala Ratjada, Cala Millor =====
  {
    id: 'h_cala_ratjada',
    nom: 'Club Hotel Cala Ratjada',
    zona: 'est',
    adreca: 'Avda. dels Pins, Cala Ratjada',
    carros: 23,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 71.2,
    eta_prevista: '08:45'
  },
  {
    id: 'h_illot_park',
    nom: 'Illot Park',
    zona: 'est',
    adreca: 'Carrer de l\'Illot, Sa Coma',
    carros: 19,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 60.3,
    eta_prevista: '10:30'
  },
  {
    id: 'h_castell_royal',
    nom: 'Castell Royal',
    zona: 'est',
    adreca: 'Avda. del Sol, Cala Millor',
    carros: 21,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 58.7,
    eta_prevista: '11:15'
  },
  {
    id: 'h_cala_dor',
    nom: 'Apartamentos Cala d\'Or',
    zona: 'est',
    adreca: 'Avda. de Cala d\'Or, Santanyí',
    carros: 17,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 55.4,
    eta_prevista: '12:00'
  },
  {
    id: 'h_bahia_este',
    nom: 'Bahía del Este',
    zona: 'est',
    adreca: 'Carrer de la Platja, Cala d\'Or',
    carros: 25,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 55.9,
    eta_prevista: '12:45'
  },
  {
    id: 'h_sumba',
    nom: 'Sumba',
    zona: 'est',
    adreca: 'Passeig Marítim, Cala Millor',
    carros: 20,
    moll_ocupat: false,
    fins_hora: null,
    vehicle_extern: false,
    motiu_ocupat: null,
    alerta: false,
    km_hub: 59.1,
    eta_prevista: '13:30'
  }
];

// ----------------------------------------------------------
// RUTES — Hotels assignats per tipus de vehicle
// Cada vehicle N1 fa la ruta nord des del Hub Sa Pobla
// Els N2 fan zones Palma, Palmanova, Peguera i Est des de Son Castelló
// ----------------------------------------------------------
const RUTES = {
  N1:          ['h_elisa', 'h_bordoy', 'h_eden_alc', 'h_eden_playa',
                'h_lago_aptos', 'h_lago_playa', 'h_orquidea', 'h_mar_blau'],
  N2_palma:    ['h_balanguera', 'h_colon', 'h_don_camilo_palma', 'h_gran_fiesta',
                'h_negresco', 'h_pillari', 'h_riviera', 'h_tent_arenal',
                'h_tent_bahia', 'h_tent_capi', 'h_tent_playa', 'h_whala_beach',
                'h_whala_fun', 'h_soul_palma'],
  N2_palmanova:['h_bermudas', 'h_bikini', 'h_club_palmanova', 'h_florida',
                'h_martinique', 'h_palmanova_beach', 'h_palmanova_suites',
                'h_tent_calvia', 'h_tent_mojito', 'h_tent_palmanova', 'h_torrenova'],
  N2_peguera:  ['h_bella_paguera', 'h_don_camilo_peguera', 'h_lido_park', 'h_paguera_park'],
  N2_est:      ['h_cala_ratjada', 'h_illot_park', 'h_castell_royal',
                'h_cala_dor', 'h_bahia_este', 'h_sumba']
};

// ----------------------------------------------------------
// VEHICLES — Flota activa de Polarier (10 vehicles)
// estat: 'en_ruta' | 'en_moll' | 'alert' | 'completat'
// ----------------------------------------------------------
const VEHICLES = [
  {
    matricula: '1234-PMN',
    tipus: 'N1',
    ruta: 'N1',
    hub: 'sa_pobla',
    xofer: 'Miquel Àngel Perelló',
    estat: 'en_ruta',
    hotel_actual: 'h_eden_alc',
    km_fets: 34.2,
    km_totals: 89.4
  },
  {
    matricula: '5678-PMN',
    tipus: 'N1',
    ruta: 'N1',
    hub: 'sa_pobla',
    xofer: 'Toni Riera Vives',
    estat: 'en_moll',
    hotel_actual: 'h_bordoy',
    km_fets: 28.1,
    km_totals: 76.2
  },
  {
    // Vehicle amb alerta activa — vehicle per defecte al login xofer
    matricula: '9012-PMN',
    tipus: 'N1',
    ruta: 'N1',
    hub: 'sa_pobla',
    xofer: 'Pep Llull Mestre',
    estat: 'alert',
    hotel_actual: 'h_lago_aptos',
    km_fets: 45.8,
    km_totals: 102.3
  },
  {
    matricula: '3456-PMN',
    tipus: 'N2',
    ruta: 'N2_palma',
    hub: 'son_castello',
    xofer: 'Joan Ferrer Nadal',
    estat: 'en_ruta',
    hotel_actual: 'h_gran_fiesta',
    km_fets: 52.4,
    km_totals: 134.7
  },
  {
    matricula: '7890-PMN',
    tipus: 'N2',
    ruta: 'N2_palma',
    hub: 'son_castello',
    xofer: 'Biel Tomàs Garau',
    estat: 'en_moll',
    hotel_actual: 'h_riviera',
    km_fets: 61.3,
    km_totals: 145.2
  },
  {
    matricula: '2345-PMN',
    tipus: 'N2',
    ruta: 'N2_palmanova',
    hub: 'son_castello',
    xofer: 'Rafel Mas Rotger',
    estat: 'en_ruta',
    hotel_actual: 'h_florida',
    km_fets: 38.7,
    km_totals: 118.9
  },
  {
    matricula: '6789-PMN',
    tipus: 'N2',
    ruta: 'N2_palmanova',
    hub: 'son_castello',
    xofer: 'Bernat Coll Homar',
    estat: 'en_ruta',
    hotel_actual: 'h_martinique',
    km_fets: 44.1,
    km_totals: 122.4
  },
  {
    matricula: '0123-PMN',
    tipus: 'N2',
    ruta: 'N2_peguera',
    hub: 'son_castello',
    xofer: 'Llorenç Soler Fiol',
    estat: 'completat',
    hotel_actual: null,
    km_fets: 87.5,
    km_totals: 87.5
  },
  {
    matricula: '4567-PMN',
    tipus: 'N2',
    ruta: 'N2_est',
    hub: 'son_castello',
    xofer: 'Sebastià Vidal Llull',
    estat: 'en_ruta',
    hotel_actual: 'h_illot_park',
    km_fets: 120.3,
    km_totals: 248.6
  },
  {
    matricula: '8901-PMN',
    tipus: 'N2',
    ruta: 'N2_est',
    hub: 'son_castello',
    xofer: 'Andreu Font Sastre',
    estat: 'en_ruta',
    hotel_actual: 'h_cala_ratjada',
    km_fets: 98.7,
    km_totals: 221.4
  }
];

// ----------------------------------------------------------
// HUBS — Punts de base i trànsit de la flota
// ----------------------------------------------------------
const HUBS = {
  son_castello: {
    id: 'son_castello',
    nom: 'Son Castelló',
    etiqueta: 'Base principal',
    adreca: 'Polígon Son Castelló, Palma de Mallorca',
    zones: ['palma', 'palmanova', 'peguera', 'est']
  },
  sa_pobla: {
    id: 'sa_pobla',
    nom: 'Hub Sa Pobla',
    etiqueta: 'Hub de trànsit',
    adreca: 'Polígon Sa Vileta, Sa Pobla',
    zones: ['nord']
  }
};

// ----------------------------------------------------------
// FACTORS CO2 — Font: Aina Terrades, Dept. Sostenibilitat
// Unitat: kg de CO2 per quilòmetre recorregut
// ----------------------------------------------------------
const CO2_FACTORS = {
  N1: 0.40,  // Vehicle lleuger — fins a 15 carros
  N2: 0.58   // Vehicle pesant — fins a 27 carros
};

// Objectiu d'estalvi diari en kg CO2 (ruta optimitzada vs. ruta no optimitzada)
const CO2_OBJECTIU_ESTALVI = 193;

// ----------------------------------------------------------
// ALERTES ACTIVES — Incidents del dia en temps real
// Es pot afegir, modificar o eliminar en temps real (simulat)
// ----------------------------------------------------------
let ALERTES = [
  {
    id: 'alerta_001',
    hotel_id: 'h_lago_aptos',
    tipus: 'moll_ocupat',
    hora_detectada: '10:15',
    fins_hora: '12:45',
    missatge: 'Camió de congelats ocupa el moll fins les 12:45h',
    recomanacio: 'Recomanam arribar a les 11:30h per adelantar-lo',
    fallback: 'Si no és possible: aparca i espera. Gestor notificat automàticament.',
    vehicles_afectats: ['9012-PMN'],
    estat: 'activa',
    prioritat: 'alta'
  }
];

// Historial de visites d'avui per hotel (per a hotel.html)
const HISTORIAL_AVUI = {
  'h_lago_aptos': [
    { hora: '08:30', vehicle: '1234-PMN', accio: 'Recollida planificada (cancel·lada)', estat: 'cancel·lat' },
    { hora: '09:45', vehicle: '5678-PMN', accio: 'Intent accés moll — moll ocupat', estat: 'espera' },
    { hora: '10:20', vehicle: '9012-PMN', accio: 'Alerta activada — vehicle extern detectat', estat: 'alerta' }
  ],
  'h_bordoy': [
    { hora: '09:12', vehicle: '5678-PMN', accio: 'Lliurament 22 carros — OK', estat: 'completat' }
  ],
  'h_eden_alc': [
    { hora: '10:05', vehicle: '1234-PMN', accio: 'Lliurament 18 carros — OK', estat: 'completat' }
  ]
};

// ============================================================
// FUNCIONS UTILITÀRIES
// ============================================================

/**
 * Calcula les emissions de CO2 d'un trajecte
 * @param {number} km - Quilòmetres recorreguts
 * @param {string} tipus - Tipus de vehicle ('N1' o 'N2')
 * @returns {number} kg de CO2 emesos (arrodonit a 2 decimals)
 */
function calcularCO2(km, tipus) {
  const factor = CO2_FACTORS[tipus] || CO2_FACTORS.N1;
  return Math.round(km * factor * 100) / 100;
}

/**
 * Calcula l'hora estimada d'arribada
 * @param {string} horaInici - Hora d'inici en format 'HH:MM'
 * @param {number} kmRestants - Quilòmetres fins a la destinació
 * @param {number} velMitjana - Velocitat mitjana km/h (default 40)
 * @returns {string} ETA en format 'HH:MM'
 */
function calcularETA(horaInici, kmRestants, velMitjana = 40) {
  const parts = horaInici.split(':').map(Number);
  const minutsTotals = parts[0] * 60 + parts[1];
  const minutsViatge = Math.round((kmRestants / velMitjana) * 60);
  const etaMinuts = minutsTotals + minutsViatge;
  const h = Math.floor(etaMinuts / 60) % 24;
  const m = etaMinuts % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * Obté un hotel per ID
 * @param {string} id - Identificador de l'hotel
 * @returns {Object|null}
 */
function getHotelById(id) {
  return HOTELS.find(h => h.id === id) || null;
}

/**
 * Obté tots els hotels d'una zona
 * @param {string} zona - 'nord' | 'palma' | 'palmanova' | 'peguera' | 'est'
 * @returns {Array}
 */
function getHotelsByZona(zona) {
  return HOTELS.filter(h => h.zona === zona);
}

/**
 * Obté un vehicle per matrícula
 * @param {string} matricula
 * @returns {Object|null}
 */
function getVehicleByMatricula(matricula) {
  return VEHICLES.find(v => v.matricula === matricula) || null;
}

/**
 * Calcula km totals i CO2 d'una ruta completa
 * @param {string} rutaKey - Clau de la ruta (ex: 'N1', 'N2_palma')
 * @param {string} tipusVehicle - 'N1' o 'N2'
 * @returns {{ km_totals: number, co2_total: number }}
 */
function calcularTotalsRuta(rutaKey, tipusVehicle) {
  const ids = RUTES[rutaKey] || [];
  const hotelsRuta = ids.map(id => getHotelById(id)).filter(Boolean);
  const km = hotelsRuta.reduce((acc, h) => acc + (h.km_hub || 0), 0);
  return {
    km_totals: Math.round(km * 10) / 10,
    co2_total: calcularCO2(km, tipusVehicle)
  };
}

/**
 * Genera el resum global de tota la flota
 * @returns {{ km_totals, co2_total, carros_totals, vehicles_actius }}
 */
function calcularResumFlota() {
  const kmTotals = VEHICLES.reduce((acc, v) => acc + v.km_fets, 0);
  const co2Total = VEHICLES.reduce((acc, v) => acc + calcularCO2(v.km_fets, v.tipus), 0);
  const carrosTotals = HOTELS.reduce((acc, h) => acc + h.carros, 0);
  const vehiclesActius = VEHICLES.filter(v => v.estat !== 'completat').length;

  return {
    km_totals: Math.round(kmTotals * 10) / 10,
    co2_total: Math.round(co2Total * 10) / 10,
    carros_totals: carrosTotals,
    vehicles_actius: vehiclesActius
  };
}

/**
 * Afegeix una nova alerta i la retorna (simulació)
 * @param {string} hotel_id
 * @param {string} missatge
 * @returns {Object} Nova alerta creada
 */
function simularNovaAlerta(hotel_id, missatge) {
  const ara = new Date();
  const hora = `${String(ara.getHours()).padStart(2,'0')}:${String(ara.getMinutes()).padStart(2,'0')}`;
  const novaAlerta = {
    id: `alerta_${Date.now()}`,
    hotel_id,
    tipus: 'vehicle_extern',
    hora_detectada: hora,
    fins_hora: calcularETA(hora, 0.5, 1), // 30 min de simulació
    missatge,
    recomanacio: 'Gestor notificat. Ajustant ruta automàticament.',
    fallback: 'Aparca i espera confirmació del gestor.',
    vehicles_afectats: [],
    estat: 'activa',
    prioritat: 'mitjana'
  };
  ALERTES.push(novaAlerta);
  return novaAlerta;
}
