interface ToolbarProps {
  onAddMeasure: () => void;
  onCopyTab: () => void;
  onPrint: () => void;
  onClear: () => void;
}

export default function Toolbar({
  onAddMeasure,
  onCopyTab,
  onPrint,
  onClear,
}: ToolbarProps) {
  return (
    <div className="mb-6 flex flex-wrap gap-3 print:hidden">
      <button
        type="button"
        onClick={onAddMeasure}
        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
      >
        Add Measure
      </button>

      <button
        type="button"
        onClick={onCopyTab}
        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
      >
        Copy Tab
      </button>

      <button
        type="button"
        onClick={onPrint}
        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
      >
        Print
      </button>

      <button
        type="button"
        onClick={onClear}
        className="rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
      >
        Clear
      </button>
    </div>
  );
}