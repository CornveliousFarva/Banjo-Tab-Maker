import type { Measure } from "../types/tab";

interface TabMeasureProps {
  measure: Measure;
  measureIndex: number;
  tuning: string[];
  onCellChange: (
    measureId: string,
    stringIndex: number,
    noteIndex: number,
    value: string
  ) => void;
}

export default function TabMeasure({
  measure,
  measureIndex,
  tuning,
  onCellChange,
}: TabMeasureProps) {
  return (
    <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
      <h2 className="mb-4 font-semibold text-slate-700 print:hidden">
        Measure {measureIndex + 1}
      </h2>

      <div className="space-y-2 font-mono">
        {measure.strings.map((string, stringIndex) => (
          <div
            key={`${measure.id}-${stringIndex}`}
            className="flex items-center gap-1 overflow-x-auto"
          >
            <span className="w-6 font-bold text-slate-700">
              {tuning[stringIndex]}
            </span>

            <span>|</span>

            {string.map((note, noteIndex) => (
              <input
                key={noteIndex}
                value={note}
                onChange={(e) =>
                  onCellChange(
                    measure.id,
                    stringIndex,
                    noteIndex,
                    e.target.value.slice(0, 2)
                  )
                }
                className="h-8 w-8 rounded border border-slate-300 text-center text-sm outline-none focus:border-blue-500 print:border-none"
              />
            ))}

            <span>|</span>
          </div>
        ))}
      </div>
    </div>
  );
}