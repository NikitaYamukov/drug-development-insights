"use client";

import useTrialsQuery from "@features/trials/api/useTrialsQuery";
import useTrialsStore from "@features/trials/model/store";

type KpiItem = {
  label: string;
  value: string;
};

const formatValue = (value: number, isLoading: boolean): string => {
  if (isLoading) return "Загрузка…";
  return value === 0 ? "—" : value.toLocaleString("ru-RU");
};

const KpiGrid = () => {
  const hasSearched = useTrialsStore((state) => state.hasSearched);
  const { data, isFetching, isError } = useTrialsQuery();

  const trials = data?.studies ?? [];
  const sponsors = new Set(trials.map((trial) => trial.sponsor).filter(Boolean));
  const phases = new Set(trials.map((trial) => trial.phase).filter(Boolean));
  const countries = new Set(trials.map((trial) => trial.country).filter(Boolean));

  const kpis: KpiItem[] = [
    { label: "Исследований", value: formatValue(trials.length, isFetching) },
    { label: "Спонсоров", value: formatValue(sponsors.size, isFetching) },
    { label: "Фаз в выдаче", value: formatValue(phases.size, isFetching) },
    { label: "Стран", value: formatValue(countries.size, isFetching) },
  ];

  const showPlaceholder = !hasSearched && !isFetching;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900">
          Ключевые метрики
        </div>
        {isError ? (
          <span className="text-xs text-red-600">
            Ошибка загрузки KPI, попробуйте позже
          </span>
        ) : (
          <span className="text-xs text-slate-500">
            {showPlaceholder
              ? "Нажмите «Найти», чтобы рассчитать KPI"
              : isFetching
                ? "Обновляем данные…"
                : "По текущей выдаче"}
          </span>
        )}
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3"
          >
            <div className="text-xl font-bold text-slate-900">{kpi.value}</div>
            <div className="text-xs uppercase tracking-wide text-slate-600">
              {kpi.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KpiGrid;
