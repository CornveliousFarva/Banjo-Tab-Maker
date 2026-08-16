

interface TabMeasureProps {
  strings: (number | null)[][];
}

function TabMeasure({ strings }: TabMeasureProps) {
  return (
    <div className="inline-flex border-x-2 border-black py-2">
      <div className="flex flex-col gap-3">
        {strings.map((stringNotes, stringIndex) => (
          <div
            key={stringIndex}
            className="flex min-h-6 min-w-48 items-center border-t border-black"
          >
            {stringNotes.map((fret, noteIndex) => (
              <div
                key={noteIndex}
                className="flex w-10 -translate-y-1/2 justify-center bg-white px-1 text-sm font-medium"
              >
                {fret ?? ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabMeasure;