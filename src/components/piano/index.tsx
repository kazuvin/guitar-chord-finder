import { SCIENTIFIC_PITCH_NOTATION } from "@/lib/music-theory/const";
import getRootPitch from "@/lib/music-theory/get-root-pitch";
import isSamePitchClass from "@/lib/music-theory/is-same-pitch-class";
import clsx from "clsx";

type PianoProps = {
  selectedPitches?: number[];
};

export default function Piano({ selectedPitches }: PianoProps) {
  const rootPitch = getRootPitch(selectedPitches ?? []);

  return (
    <div className="relative flex pb-2">
      {Object.entries(SCIENTIFIC_PITCH_NOTATION).map(([key, note]) => (
        <div
          key={key}
          style={{ left: Number(key) * 1.75 + 0.5 + "rem" }}
          className={clsx(
            "flex flex-shrink-0 items-end justify-center border p-4 text-sm",
            note.includes("#")
              ? `absolute top-0 h-24 w-10 bg-stone-950 text-white text-opacity-80`
              : "h-40 w-12 text-white text-opacity-80",
            selectedPitches?.some((pitch) =>
              isSamePitchClass(pitch, Number(key)),
            )
              ? "!bg-red-400"
              : "",
            key === rootPitch.toString() ? "!bg-red-800" : "",
          )}
        >
          {note}
        </div>
      ))}
    </div>
  );
}
