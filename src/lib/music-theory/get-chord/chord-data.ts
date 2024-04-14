export type Chord = {
  intervals: number[][];
  fullName: string;
  abbreviations: string[];
  scale: string;
  justIntonatedRatio?: string;
};

export const chords: Chord[] = [
  {
    intervals: [[0, 4, 7]],
    fullName: "major",
    abbreviations: ["", "M"],
    scale: "Ionian",
    justIntonatedRatio: "4:5:6",
  },
  {
    intervals: [
      [0, 4, 11],
      [0, 4, 7, 11],
    ],
    fullName: "major seventh",
    abbreviations: ["M7", "Δ7", "ma7", "maj7", "Δ"],
    scale: "",
    justIntonatedRatio: "8:10(:12):15",
  },
  {
    intervals: [
      [0, 4, 11, 2],
      [0, 4, 7, 11, 2],
    ],
    fullName: "major ninth",
    abbreviations: ["M9"],
    scale: "",
    justIntonatedRatio: "8:10(:12):15:18",
  },
  {
    intervals: [
      [0, 4, 11, 5],
      [0, 4, 7, 11, 5],
      [0, 4, 11, 2, 5],
      [0, 4, 7, 11, 2, 5],
    ],
    fullName: "major eleventh",
    abbreviations: ["M11"],
    scale: "",
    justIntonatedRatio: "8:10(:12):15(:18):21",
  },
  {
    intervals: [
      [0, 4, 11, 9],
      [0, 4, 7, 11, 9],
      [0, 4, 11, 2, 9],
      [0, 4, 7, 11, 2, 9],
      [0, 4, 11, 5, 9],
      [0, 4, 7, 11, 5, 9],
      [0, 4, 11, 2, 5, 9],
      [0, 4, 7, 11, 2, 5, 9],
    ],
    fullName: "major thirteenth",
    abbreviations: ["M13"],
    scale: "",
    justIntonatedRatio: "8:10(:12):15(:18:21):27",
  },
  {
    intervals: [
      [0, 4, 9],
      [0, 4, 7, 9],
    ],
    fullName: "sixth",
    abbreviations: ["6", "add6", "add13"],
    scale: "",
    justIntonatedRatio: "12:15(:18):20",
  },
  {
    intervals: [
      [0, 4, 9, 2],
      [0, 4, 7, 9, 2],
    ],
    fullName: "sixth/ninth",
    abbreviations: ["6/9", "69"],
    scale: "",
    justIntonatedRatio: "12:15(:18):20:27",
  },
  {
    intervals: [
      [0, 4, 6],
      [0, 4, 7, 6],
      [0, 4, 6, 11],
      [0, 4, 7, 6, 11],
      [0, 4, 6, 2, 11],
      [0, 4, 7, 6, 2, 11],
    ],
    fullName: "lydian",
    abbreviations: ["M♯4", "Δ♯4", "Δ♯11"],
    scale: "Lydian",
    justIntonatedRatio: "16:20(:24:30):45",
  },
  {
    intervals: [
      [0, 4, 11, 8],
      [0, 4, 7, 11, 8],
      [0, 4, 11, 5, 8],
      [0, 4, 7, 11, 5, 8],
    ],
    fullName: "major seventh ♭6, or ♭13",
    abbreviations: ["M7♭6", "maj7♭6"],
    scale: "Harmonic major",
    justIntonatedRatio: "20:25(:30:45):63",
  },
  {
    intervals: [
      [0, 4, 10],
      [0, 4, 7, 10],
    ],
    fullName: "dominant seventh",
    abbreviations: ["7", "dom"],
    scale: "Mixolydian",
    justIntonatedRatio: "4:5(:6):7",
  },
  {
    intervals: [
      [0, 4, 10, 2],
      [0, 4, 7, 10, 2],
    ],
    fullName: "dominant ninth",
    abbreviations: ["9"],
    scale: "",
    justIntonatedRatio: "4:5(:6):7:9",
  },
  {
    intervals: [
      [0, 4, 10, 5],
      [0, 4, 7, 10, 5],
      [0, 4, 10, 2, 5],
      [0, 4, 7, 10, 2, 5],
    ],
    fullName: "dominant eleventh",
    abbreviations: ["11"],
    scale: "",
    justIntonatedRatio: "8:10(:12):14(:18):21",
  },
  {
    intervals: [
      [0, 4, 10, 9],
      [0, 4, 7, 10, 9],
      [0, 4, 10, 2, 9],
      [0, 4, 7, 10, 2, 9],
      [0, 4, 10, 5, 9],
      [0, 4, 7, 10, 5, 9],
      [0, 4, 10, 2, 5, 9],
      [0, 4, 7, 10, 2, 5, 9],
    ],
    fullName: "dominant thirteenth",
    abbreviations: ["13"],
    scale: "",
    justIntonatedRatio: "8:10(:12):14(:18:21):27",
  },
  {
    intervals: [
      [0, 4, 10, 6],
      [0, 4, 7, 10, 6],
      [0, 4, 10, 6, 2, 9],
      [0, 4, 7, 10, 6, 2, 9],
    ],
    fullName: "lydian dominant seventh",
    abbreviations: ["7♯11", "7♯4"],
    scale: "Lydian dominant",
    justIntonatedRatio: "20:25(:30):35:45",
  },
  {
    intervals: [
      [0, 4, 10, 1],
      [0, 4, 7, 10, 1],
      [0, 4, 10, 1, 3],
      [0, 4, 7, 10, 1, 3],
      [0, 4, 10, 1, 6],
      [0, 4, 7, 10, 1, 6],
      [0, 4, 10, 1, 9],
      [0, 4, 7, 10, 1, 9],
    ],
    fullName: "dominant ♭9",
    abbreviations: ["7♭9"],
    scale: "Diminished scale, octatonic scale",
  },
  {
    intervals: [
      [0, 4, 10, 3],
      [0, 4, 7, 10, 3],
    ],
    fullName: "dominant ♯9",
    abbreviations: ["7♯9"],
    scale: "Mixolydian with ♭3",
  },
  {
    intervals: [
      [0, 4, 10, 1],
      [0, 4, 10, 1, 6],
      [0, 4, 10, 1, 8],
      [0, 4, 10, 1, 3],
      [0, 4, 10, 1, 5],
      [0, 4, 10, 1, 3, 5],
      [0, 4, 10, 1, 5, 8],
    ],
    fullName: "altered",
    abbreviations: ["alt7"],
    scale: "Locrian ♭4 (super-locrian)",
  },
  {
    intervals: [
      [0, 5],
      [0, 5, 7],
    ],
    fullName: "suspended 4th",
    abbreviations: ["sus4"],
    scale: "Usually mixolydian",
    justIntonatedRatio: "6:8(:9)",
  },
  {
    intervals: [
      [0, 2],
      [0, 2, 7],
    ],
    fullName: "suspended 2nd",
    abbreviations: ["sus2"],
    scale: "",
    justIntonatedRatio: "8:9(:12)",
  },
  {
    intervals: [
      [0, 5, 10],
      [0, 5, 7, 10],
    ],
    fullName: "suspended 4th seventh",
    abbreviations: ["7sus4"],
    scale: "",
    justIntonatedRatio: "12:16(:18):21",
  },
  {
    intervals: [
      [0, 11],
      [0, 7, 11],
      [0, 2, 11],
      [0, 7, 2, 11],
    ],
    fullName: "eleventh",
    abbreviations: ["11", "sus", "Bb/C for C11"],
    scale: "",
    justIntonatedRatio: "8(:12):14(:18):21",
  },
  {
    intervals: [
      [0, 5, 10, 11],
      [0, 5, 7, 10, 11],
      [0, 5, 10, 2, 11],
      [0, 5, 7, 10, 2, 11],
    ],
    fullName: "eleventh (Special voicing.)",
    abbreviations: ["11"],
    scale: "",
    justIntonatedRatio: "12:16(:18):21(:27):32",
  },
  {
    intervals: [
      [0, 5, 1],
      [0, 5, 7, 1],
    ],
    fullName: "suspended 4th ♭9",
    abbreviations: ["♭9sus", "phryg"],
    scale: "Phrygian, phrygian ♯6",
    justIntonatedRatio: "30:40(:45):64",
  },
  {
    intervals: [[0, 3, 7]],
    fullName: "minor",
    abbreviations: ["m", "min", "-"],
    scale: "Dorian, aeolian",
    justIntonatedRatio: "10:12:15",
  },
  {
    intervals: [
      [0, 3, 10],
      [0, 3, 7, 10],
    ],
    fullName: "minor seventh",
    abbreviations: ["m7", "min7", "mi7", "-7"],
    scale: "",
    justIntonatedRatio: "10:12(:15):18",
  },
  {
    intervals: [
      [0, 3, 11],
      [0, 3, 7, 11],
      [0, 3, 11, 2, 9],
      [0, 3, 7, 11, 2, 9],
    ],
    fullName: "minor/major seventh",
    abbreviations: ["mM7", "m/maj7", "m/mi7", "m/M7", "-Δ7", "mΔ"],
    scale: "Minor melodic (ascending)",
    justIntonatedRatio: "40:48(:60):75",
  },
  {
    intervals: [
      [0, 3, 11],
      [0, 3, 7, 11],
      [0, 3, 11, 2, 8],
      [0, 3, 7, 11, 2, 8],
    ],
    fullName: "minor/major seventh with flat thirteen",
    abbreviations: ["mM7♭13"],
    scale: "Harmonic minor",
    justIntonatedRatio: "",
  },
  {
    intervals: [
      [0, 3, 9],
      [0, 3, 7, 9],
    ],
    fullName: "minor sixth",
    abbreviations: ["m6"],
    scale: "Dorian",
    justIntonatedRatio: "6:7(:9):10",
  },
  {
    intervals: [
      [0, 3, 10, 2],
      [0, 3, 7, 10, 2],
    ],
    fullName: "minor ninth",
    abbreviations: ["m9"],
    scale: "Dorian, aeolian",
    justIntonatedRatio: "20:24(:30):36:45",
  },
  {
    intervals: [
      [0, 3, 10, 5],
      [0, 3, 7, 10, 5],
      [0, 3, 10, 2, 5],
      [0, 3, 7, 10, 2, 5],
    ],
    fullName: "minor eleventh",
    abbreviations: ["m11"],
    scale: "",
    justIntonatedRatio: "20:24(:30):36(:45):54",
  },
  {
    intervals: [
      [0, 3, 10, 9],
      [0, 3, 7, 10, 9],
      [0, 3, 10, 2, 9],
      [0, 3, 7, 10, 2, 9],
      [0, 3, 10, 5, 9],
      [0, 3, 7, 10, 5, 9],
      [0, 3, 10, 2, 5, 9],
      [0, 3, 7, 10, 2, 5, 9],
    ],
    fullName: "minor thirteenth",
    abbreviations: ["m13"],
    scale: "Dorian",
    justIntonatedRatio: "24:28(:36):42(:54:63):81",
  },
  {
    intervals: [[0, 3, 6]],
    fullName: "diminished",
    abbreviations: ["dim", "°"],
    scale: "Diminished, octatonic, locrian",
    justIntonatedRatio: "5:6:7",
  },
  {
    intervals: [[0, 3, 6, 9]],
    fullName: "diminished seventh",
    abbreviations: ["dim7", "°", "°7"],
    scale: "Diminished, octatonic",
    justIntonatedRatio: "25:30:35:42",
  },
  {
    intervals: [
      [0, 3, 6, 10],
      [0, 3, 6, 10, 1],
      [0, 3, 6, 10, 2],
      [0, 3, 6, 10, 5],
      [0, 3, 6, 10, 9],
    ],
    fullName: "half-diminished",
    abbreviations: ["m7♭5", "ø"],
    scale: "Locrian, locrian ♯2",
    justIntonatedRatio: "5:6:7:9",
  },
  {
    intervals: [[0, 7]],
    fullName: "fifth",
    abbreviations: ["5", "(no 3rd)"],
    scale: "No particular scale",
    justIntonatedRatio: "2:3",
  },
  {
    intervals: [[0, 4, 8]],
    fullName: "augmented",
    abbreviations: ["aug", "+"],
    scale: "Whole tone scale",
    justIntonatedRatio: "16:20:25",
  },
  {
    intervals: [[0, 4, 8, 10]],
    fullName: "augmented seventh",
    abbreviations: ["+7", "aug7", "7♯5"],
    scale: "",
    justIntonatedRatio: "16:20:25:28",
  },
  {
    intervals: [[0, 4, 8, 11]],
    fullName: "augmented major seventh",
    abbreviations: ["augM7", "+M7", "M7♯5", "M7(♯5)", "M7/♯5", "M7+5", "maj+7"],
    scale: "Lydian ♯5",
    justIntonatedRatio: "16:20:25:30",
  },
];