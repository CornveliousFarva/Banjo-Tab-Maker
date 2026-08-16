

export interface BanjoTuning {
  name: string;
  strings: string[];
}

export const tunings: BanjoTuning[] = [
  {
    name: "Open G",
    strings: ["g", "D", "G", "B", "D"],
  },
  {
    name: "Double C",
    strings: ["g", "C", "G", "C", "D"],
  },
  {
    name: "Sawmill",
    strings: ["g", "D", "G", "C", "D"],
  },
  {
    name: "Open D",
    strings: ["f#", "D", "F#", "A", "D"],
  },
];

export const defaultTuning = tunings[0];