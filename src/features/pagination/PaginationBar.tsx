const PaginationBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex gap-2">
        <button className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700">
          ← Предыдущая
        </button>
        <button className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700">
          Следующая →
        </button>
      </div>
      <span className="text-sm text-slate-600">Страница —</span>
    </div>
  );
};

export default PaginationBar;
