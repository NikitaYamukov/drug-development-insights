const TrialsChart = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900">Дашборд</div>
        <div className="flex gap-2 text-xs text-slate-600">
          <span className="rounded-md border border-slate-200 px-2 py-1">
            Фазы
          </span>
          <span className="rounded-md border border-slate-200 px-2 py-1">
            Тип интервенции
          </span>
          <span className="rounded-md border border-slate-200 px-2 py-1">
            Статус
          </span>
        </div>
      </div>
      <div className="flex min-h-[200px] items-center justify-center text-sm text-slate-500">
        TODO: график по фазам (Chart.js)
      </div>
    </div>
  );
};

export default TrialsChart;
