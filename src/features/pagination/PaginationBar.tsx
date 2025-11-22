"use client";

import useTrialsStore from "@features/trials/model/store";
import useTrialsQuery from "@features/trials/api/useTrialsQuery";

const PaginationBar = () => {
  const pageNumber = useTrialsStore((state) => state.pageNumber);
  const prevTokens = useTrialsStore((state) => state.prevTokens);
  const hasSearched = useTrialsStore((state) => state.hasSearched);
  const goToNext = useTrialsStore((state) => state.goToNext);
  const goToPrev = useTrialsStore((state) => state.goToPrev);
  const { data, isFetching } = useTrialsQuery();

  const canPrev = prevTokens.length > 0 && !isFetching;
  const canNext = Boolean(data?.nextPageToken) && !isFetching;
  const pageInfo = hasSearched
    ? pageNumber > 0
      ? `Страница ${pageNumber}`
      : "Нет данных"
    : "Нет данных";

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex gap-2">
        <button
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={goToPrev}
          disabled={!canPrev}
        >
          ← Предыдущая
        </button>
        <button
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={() => data?.nextPageToken && goToNext(data.nextPageToken)}
          disabled={!canNext}
        >
          Следующая →
        </button>
      </div>
      <span className="text-sm text-slate-600">{pageInfo}</span>
    </div>
  );
};

export default PaginationBar;
