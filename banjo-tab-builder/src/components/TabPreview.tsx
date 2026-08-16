import type { Measure } from "../types/tab";

interface TabPreviewProps {
  measures: Measure[];
  tuning: string[];
}

export default function TabPreview({ measures, tuning }: TabPreviewProps) {
  return (
    <section className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-800 print:hidden">
        Tab Preview
      </h2>

      <div className="overflow-x-auto">
        <pre className="font-mono text-sm leading-8 text-slate-800">
          {tuning.map((stringName, stringIndex) => {
            const tabLine = measures
              .map((measure) => {
                const notes = measure.strings[stringIndex]
                  .map((note) => (note === "" ? "--" : note.padStart(2, "-")))
                  .join("-");

                return `|-${notes}-|`;
              })
              .join("");

            return `${stringName}|${tabLine}\n`;
          })}
        </pre>
      </div>
    </section>
  );
}