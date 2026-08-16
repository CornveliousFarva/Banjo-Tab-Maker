import { useState } from "react";
import type { Measure } from "../types/tab";
import TabMeasure from "./TabMeasure";

const defaultTuning = ["g", "D", "G", "B", "D"];

const createMeasure = (): Measure => ({
  id: crypto.randomUUID(),
  strings: defaultTuning.map(() => Array(16).fill("")),
});

export default function TabEditor() {
  const [title, setTitle] = useState("Untitled Banjo Tab");
  const [tuning] = useState(defaultTuning);
  const [measures, setMeasures] = useState<Measure[]>([createMeasure()]);

  const updateCell = (
    measureId: string,
    stringIndex: number,
    noteIndex: number,
    value: string
  ) => {
    setMeasures((currentMeasures) =>
      currentMeasures.map((measure) => {
        if (measure.id !== measureId) return measure;

        const updatedStrings = measure.strings.map((string, sIndex) => {
          if (sIndex !== stringIndex) return string;

          return string.map((note, nIndex) =>
            nIndex === noteIndex ? value : note
          );
        });

        return {
          ...measure,
          strings: updatedStrings,
        };
      })
    );
  };

  const addMeasure = () => {
    setMeasures((currentMeasures) => [...currentMeasures, createMeasure()]);
  };

  const clearTab = () => {
    setMeasures([createMeasure()]);
  };

  const copyTab = async () => {
    const tabText = measures
      .map((measure, measureIndex) => {
        const lines = measure.strings.map((string, stringIndex) => {
          const stringName = tuning[stringIndex];
          const notes = string.map((note) => note || "-").join("-");
          return `${stringName}|-${notes}-|`;
        });

        return `Measure ${measureIndex + 1}\n${lines.join("\n")}`;
      })
      .join("\n\n");

    await navigator.clipboard.writeText(`${title}\n\n${tabText}`);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-3xl font-bold outline-none focus:border-blue-500"
        />

        <p className="mt-3 text-slate-600">
          Tuning: {tuning.join(" ")}
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-3 print:hidden">
        <button
          type="button"
          onClick={addMeasure}
          className="rounded-lg bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-600"
        >
          Add Measure
        </button>

        <button
          type="button"
          onClick={copyTab}
          className="rounded-lg border border-blue-700 px-4 py-2 font-medium text-blue-700 hover:bg-blue-50"
        >
          Copy Tab
        </button>

        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-lg border border-slate-700 px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
        >
          Print
        </button>

        <button
          type="button"
          onClick={clearTab}
          className="rounded-lg border border-red-500 px-4 py-2 font-medium text-red-600 hover:bg-red-50"
        >
          Clear
        </button>
      </div>

      <div className="space-y-8">
        {measures.map((measure, measureIndex) => (
          <TabMeasure
            key={measure.id}
            measure={measure}
            measureIndex={measureIndex}
            tuning={tuning}
            onCellChange={updateCell}
          />
        ))}
      </div>
    </section>
  );
}