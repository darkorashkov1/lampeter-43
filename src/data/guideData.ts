export interface GuideItem {
  id: number;
  translationKey: string;
  category: 'landmarks' | 'parks' | 'dining';
  distanceKey: string;
  image: string;
  address?: string;
}

export const guideCategories = [
  { id: 'all', labelKey: 'all_highlights' },
  { id: 'landmarks', labelKey: 'iconic_landmarks' },
  { id: 'parks', labelKey: 'parks_nature' },
  { id: 'dining', labelKey: 'dining_cafes' },
];

export const guideItems: GuideItem[] = [
  // --- LANDMARKS ---
  {
    id: 1,
    translationKey: 'london_eye',
    category: 'landmarks',
    distanceKey: 'easy_transit',
    image: "images/guide/the_london_eye.jfif",
    address: "The London Eye, Riverside Building, County Hall, London SE1 7PB"
  },
  {
    id: 2,
    translationKey: 'big_ben',
    category: 'landmarks',
    distanceKey: 'metro_20',
    image: "images/guide/big_ben_house_of_parlament.jfif",
    address: "Big Ben, Westminster, London SW1A 0AA"
  },
  {
    id: 3,
    translationKey: 'buckingham_palace',
    category: 'landmarks',
    distanceKey: 'metro_25',
    image: "images/guide/buckingham_palace.jpg",
    address: "Buckingham Palace, Westminster, London SW1A 1AA"
  },
  {
    id: 4,
    translationKey: 'tower_bridge',
    category: 'landmarks',
    distanceKey: 'metro_30',
    image: "images/guide/tower_bridge.jpg",
    address: "Tower Bridge, Tower Bridge Rd, London SE1 2UP"
  },
  {
    id: 5,
    translationKey: 'british_museum',
    category: 'landmarks',
    distanceKey: 'metro_25',
    image: "images/guide/the_british_museum.jfif",
    address: "The British Museum, Great Russell St, London WC1B 3DG"
  },
  {
    id: 6,
    translationKey: 'trafalgar_square',
    category: 'landmarks',
    distanceKey: 'metro_20',
    image: "images/guide/trafalgar_square_and_national_gallery.jfif",
    address: "Trafalgar Square, London WC2N 5DN"
  },
  {
    id: 7,
    translationKey: 'natural_history_museum',
    category: 'landmarks',
    distanceKey: 'metro_20',
    image: "images/guide/the_natural_history_museum.jfif",
    address: "Natural History Museum, Cromwell Rd, South Kensington, London SW7 5BD"
  },
  {
    id: 8,
    translationKey: 'hyde_park',
    category: 'landmarks',
    distanceKey: 'metro_15',
    image: "images/guide/hyde_park_and_kensington_palace.jpg",
    address: "Hyde Park, London, UK"
  },
  {
    id: 9,
    translationKey: 'westminster_abbey',
    category: 'landmarks',
    distanceKey: 'metro_20',
    image: "images/guide/westminster_abbey.jpg",
    address: "Westminster Abbey, 20 Dean's Yard, Westminster, London SW1P 3PA"
  },
  {
    id: 10,
    translationKey: 'st_pauls',
    category: 'landmarks',
    distanceKey: 'metro_25',
    image: "images/guide/st_pPaul_cathedral.jfif",
    address: "St. Paul's Cathedral, St. Paul's Churchyard, London EC4M 8AD"
  },

  // --- PARKS ---
  {
    id: 11,
    translationKey: 'barons_court',
    category: 'parks',
    distanceKey: 'walk_15',
    image: "images/guide/barons_court.jpg",
    address: "Barons Court, London, UK"
  },
  {
    id: 12,
    translationKey: 'local_historic_parks',
    category: 'parks',
    distanceKey: 'walking_distance',
    image: "images/guide/local_historic_parks.jfif",
    address: "Hammersmith, London, UK"
  },
  {
    id: 13,
    translationKey: 'holland_park',
    category: 'parks',
    distanceKey: 'walk_15',
    image: "images/guide/holland_park.jfif",
    address: "Holland Park, Ilchester Pl, London W8 6LU"
  },
  {
    id: 14,
    translationKey: 'regents_park',
    category: 'parks',
    distanceKey: 'metro_25',
    image: "images/guide/regents_park.webp",
    address: "The Regent's Park, London, UK"
  },
  {
    id: 15,
    translationKey: 'st_james_park',
    category: 'parks',
    distanceKey: 'metro_20',
    image: "images/guide/st_james_park.jfif",
    address: "St. James's Park, London, UK"
  },
  {
    id: 16,
    translationKey: 'green_park',
    category: 'parks',
    distanceKey: 'metro_22',
    image: "images/guide/green_park.avif",
    address: "Green Park, London SW1A 1BW"
  },
  {
    id: 17,
    translationKey: 'battersea_park',
    category: 'parks',
    distanceKey: 'transit_15',
    image: "images/guide/battersea_park.jfif",
    address: "Battersea Park, London SW11 4NJ"
  },
  {
    id: 18,
    translationKey: 'hammersmith_walk',
    category: 'parks',
    distanceKey: 'walk_10',
    image: "images/guide/hammersmith_riverside_walk.jfif",
    address: "Hammersmith Riverside Walk, London, UK"
  },
  {
    id: 19,
    translationKey: 'ravenscourt_park',
    category: 'parks',
    distanceKey: 'walk_12',
    image: "images/guide/ravenscourt_park.jfif",
    address: "Ravenscourt Park, Hammersmith, London W6 0UJ"
  },
  {
    id: 20,
    translationKey: 'kensington_gardens',
    category: 'parks',
    distanceKey: 'walk_18',
    image: "images/guide/kensington_gardens_italian_gardens.avif",
    address: "Kensington Gardens, London, UK"
  },

  // --- DINING & CAFES ---
  {
    id: 21,
    translationKey: 'central_london_shopping',
    category: 'dining',
    distanceKey: 'metro_15_20',
    image: "images/guide/london_shopping.jpeg",
    address: "Oxford Street, London, UK"
  },
  {
    id: 22,
    translationKey: 'historic_pubs',
    category: 'dining',
    distanceKey: 'walk_10_15',
    image: "images/guide/historic_riverside_pubs.jfif",
    address: "Hammersmith Riverside, London, UK"
  },
  {
    id: 23,
    translationKey: 'soho_district',
    category: 'dining',
    distanceKey: 'metro_20',
    image: "images/guide/soho_restaurant_district.avif",
    address: "Soho, London, UK"
  },
  {
    id: 24,
    translationKey: 'borough_market',
    category: 'dining',
    distanceKey: 'metro_30',
    image: "images/guide/borough_market_food_stalls.jfif",
    address: "Borough Market, 8 Southwark St, London SE1 1TL"
  },
  {
    id: 25,
    translationKey: 'covent_garden',
    category: 'dining',
    distanceKey: 'metro_22',
    image: "images/guide/covent_garden_cafes.jpg",
    address: "Covent Garden, London, UK"
  },
  {
    id: 26,
    translationKey: 'artisanal_bakeries',
    category: 'dining',
    distanceKey: 'walking_distance',
    image: "images/guide/local_artisanal_bakeries.jpg",
    address: "Hammersmith & Barons Court, London, UK"
  },
  {
    id: 27,
    translationKey: 'kensington_high_street',
    category: 'dining',
    distanceKey: 'metro_12',
    image: "images/guide/kensington_high_street_eateries.jpg",
    address: "Kensington High Street, London, UK"
  },
  {
    id: 28,
    translationKey: 'notting_hill_brunch',
    category: 'dining',
    distanceKey: 'transit_15',
    image: "images/guide/notting_hill_brunch_spots.jpg",
    address: "Notting Hill, London, UK"
  },
  {
    id: 29,
    translationKey: 'afternoon_tea',
    category: 'dining',
    distanceKey: 'metro_20',
    image: "images/guide/traditional_afternoon_tea_rooms.jfif",
    address: "Kensington, London, UK"
  },
  {
    id: 30,
    translationKey: 'chinatown',
    category: 'dining',
    distanceKey: 'metro_20',
    image: "images/guide/chinatown_dining_hub.jfif",
    address: "Chinatown, London W1D 6JQ"
  }
];