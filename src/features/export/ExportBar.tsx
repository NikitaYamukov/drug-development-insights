"use client";

const ExportBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <span className="text-sm text-slate-600">
        TODO: показ количества записей и кнопки экспорта CSV/XLSX
      </span>
      <div className="flex gap-2">
        <button className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700">
          Экспорт CSV
        </button>
        <button className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700">
          Экспорт XLSX
        </button>
      </div>
    </div>
  );
};

export default ExportBar;
