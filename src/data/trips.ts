export interface TripPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface Trip {
  id: string;
  title: string;
  location: string;
  description: string;
  photos: TripPhoto[];
  altitudeM: number;
  ascentTime: string;
  route: string;
  sources: { label: string; url: string }[];
}

export const TRIPS: Trip[] = [
  {
    id: "triund",
    title: "Triund",
    location: "Dhauladhar Range, Himachal Pradesh",
    description:
      "A mountain trail above McLeod Ganj, with views of the Dhauladhar range and the Kangra Valley. One of the treks in my growing collection.",
    altitudeM: 2830,
    ascentTime: "~4 hours",
    route: "Dharamkot to Triund",
    sources: [
      { label: "Indiahikes route guide", url: "https://indiahikes.com/documented-trek/triund-trek" },
      { label: "Triund altitude reference", url: "https://aguidetohimachal.com/triund-trek-from-dharamshala-guide/" },
    ],
    photos: [],
  },
  {
    id: "prashar-lake",
    title: "Prashar Lake",
    location: "Mandi, Himachal Pradesh",
    description:
      "A lake tucked into the hills near Mandi, beside the Prashar Rishi temple. Another stop in my Himalayan travels.",
    altitudeM: 2710,
    ascentTime: "~4 to 5 hours",
    route: "Kantlu to Prashar Lake",
    sources: [
      { label: "Indiahikes route guide", url: "https://indiahikes.com/documented-trek/prashar-lake-trek" },
    ],
    photos: [],
  },
  {
    id: "hemkund-sahib",
    title: "Hemkund Sahib",
    location: "Chamoli, Uttarakhand",
    description:
      "A Himalayan pilgrimage to the high-altitude lake and gurudwara of Hemkund Sahib. A meeting of two things I value outside work: mountains and spirituality.",
    altitudeM: 4630,
    ascentTime: "~4 to 6 hours",
    route: "Ghangaria to Hemkund Sahib",
    sources: [
      { label: "Gokeys route guide", url: "https://gokeys.in/blog/hemkund-sahib" },
    ],
    photos: [
      {
        src: "/photos/treks/hemkund-valley.jpg",
        alt: "Eshneet in a striped T-shirt looking out across a sunny mountain valley",
        caption: "A pause for the view on my Hemkund Sahib trip.",
      },
      {
        src: "/photos/treks/hemkund-trail.jpg",
        alt: "Eshneet walking along a mountain path with fellow travellers",
        caption: "On the path, with mountains all around.",
      },
    ],
  },
  {
    id: "kareri-lake",
    title: "Kareri Lake",
    location: "Kangra, Himachal Pradesh",
    description:
      "A trek into the Dhauladhar mountains to Kareri Lake. A glimpse from my camera roll: a purple raincoat, a rocky landscape, and forest-covered slopes.",
    altitudeM: 2930,
    ascentTime: "~6 hours",
    route: "Kareri village to Kareri Lake via Reoti",
    sources: [
      { label: "Indiahikes route guide", url: "https://indiahikes.com/documented-trek/kareri-lake-trek" },
    ],
    photos: [
      {
        src: "/photos/treks/kareri-lake.jpg",
        alt: "Eshneet in a purple raincoat standing among boulders on the Kareri Lake trek",
        caption: "A little colour in the Kareri landscape.",
      },
    ],
  },
];
