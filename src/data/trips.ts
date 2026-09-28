export interface TripPhoto {
  caption: string;
}

export interface Trip {
  id: string;
  title: string;
  location: string;
  date: string;
  distanceKm: number;
  elevationGainM: number;
  durationHours: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  memory: string;
  photos: TripPhoto[];
  elevationProfile: number[];
  isSample?: boolean;
}

// SAMPLE DATA — replace with your real trips.
// Each entry needs: title, location, date, distance/elevation/duration stats,
// a short "core memory" story, and photo captions (drop real files in
// src/assets/trips/<id>/ and wire them into the photos array below).
export const TRIPS: Trip[] = [
  {
    id: "sample-kedarkantha",
    title: "Sample Entry — Replace Me",
    location: "Kedarkantha, Uttarakhand",
    date: "January 2024",
    distanceKm: 20,
    elevationGainM: 1500,
    durationHours: 18,
    difficulty: "Moderate",
    memory:
      "This is placeholder text. Replace it with your real story — what the trail felt like, who you met, the moment that stuck with you (yes, the trail-side CSO conversation counts).",
    photos: [{ caption: "Summit sunrise" }, { caption: "Camp, night one" }, { caption: "The trail up" }],
    elevationProfile: [0, 200, 350, 600, 900, 1200, 1500, 1300, 900, 400, 0],
    isSample: true,
  },
  {
    id: "sample-second-trip",
    title: "Sample Entry — Replace Me",
    location: "Add your location",
    date: "Add a date",
    distanceKm: 12,
    elevationGainM: 800,
    durationHours: 9,
    difficulty: "Easy",
    memory: "Add your second trip's story here — or delete this entry entirely once you've added your real ones.",
    photos: [{ caption: "Add a caption" }, { caption: "Add a caption" }],
    elevationProfile: [0, 150, 300, 500, 700, 800, 600, 300, 0],
    isSample: true,
  },
];
