export interface Album {
  id: string;
  title: string;
  thumbnail: string;
  images: string[];
}

export const albums: Album[] = [
  {
    id: 'corporate-events',
    title: 'Public Works',
    thumbnail: 'https://i.imgur.com/64J29ie.jpeg',
    images: [
      'https://i.imgur.com/64J29ie.jpeg',
      'https://i.imgur.com/waa4v6S.jpeg',
      'https://i.imgur.com/6tt5LEN.jpeg',
      'https://i.imgur.com/aZQdgYb.jpeg',
      'https://i.imgur.com/HB6Az45.jpeg',
      'https://i.imgur.com/VGmTrlC.jpeg',
      'https://i.imgur.com/qelo7wk.jpeg',
      'https://i.imgur.com/lwjELrq.jpeg',
      
    ],
  },
  {
    id: 'press-conferences',
    title: 'Press Conferences',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      'https://images.pexels.com/photos/3183148/pexels-photo-3183148.jpeg',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    ],
  },
  {
    id: 'brand-launches',
    title: 'Brand Launches',
    thumbnail: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
      'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg',
      'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg',
    ],
  },
  {
    id: 'media-partnerships',
    title: 'Media Partnerships',
    thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      'https://images.pexels.com/photos/3183201/pexels-photo-3183201.jpeg',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    ],
  },
  {
    id: 'strategic-campaigns',
    title: 'Strategic Campaigns',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg',
      'https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg',
    ],
  },
  {
    id: 'industry-events',
    title: 'Industry Events',
    thumbnail: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg',
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    ],
  },
];
