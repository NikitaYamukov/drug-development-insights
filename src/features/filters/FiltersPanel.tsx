"use client";

import useTrialsStore from "@features/trials/model/store";
import useTrialsQuery from "@features/trials/api/useTrialsQuery";

const pageSizeOptions = [10, 20, 50, 100];

const FiltersPanel = () => {
  const filters = useTrialsStore((state) => state.filters);
  const setFilter = useTrialsStore((state) => state.setFilter);
  const applyFilters = useTrialsStore((state) => state.applyFilters);
  const { isFetching } = useTrialsQuery();

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex flex-col text-sm text-slate-700">
          <span className="text-xs text-slate-500">Количество на страницу</span>
          <select
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
            value={filters.pageSize}
            onChange={(event) =>
              setFilter("pageSize", Number(event.target.value))
            }
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          onClick={applyFilters}
          disabled={isFetching}
        >
          {isFetching ? "Загрузка…" : "Найти"}
        </button>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Остальные фильтры (показание, компания, фаза, статус) появятся позже и
        будут синхронизированы с API ClinicalTrials.
      </p>
    </section>
  );
};

export default FiltersPanel;
