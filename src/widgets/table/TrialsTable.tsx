"use client";

import useTrialsStore from "@features/trials/model/store";
import useTrialsQuery from "@features/trials/api/useTrialsQuery";
import { ReactNode } from "react";

const TrialsTable = () => {
  const hasSearched = useTrialsStore((state) => state.hasSearched);
  const { data, isFetching, error, isError } = useTrialsQuery();
  const errorMessage =
    error instanceof Error
      ? error.message
      : "Не удалось загрузить данные ClinicalTrials";

  const studies = data?.studies ?? [];

  let content: ReactNode = (
    <span>Нажмите «Найти», чтобы получить результаты из ClinicalTrials.</span>
  );

  if (isFetching) {
    content = <span>Загрузка данных…</span>;
  } else if (isError) {
    content = <span className="text-red-600">{`Ошибка: ${errorMessage}`}</span>;
  } else if (hasSearched && studies.length === 0) {
    content = <span>Нет данных по текущим фильтрам.</span>;
  } else if (hasSearched && studies.length > 0) {
    content = (
      <div className="text-sm text-slate-600">
        Загружено {studies.length} записей. Таблица MUI DataGrid будет
        подключена на следующем шаге.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 text-sm font-semibold text-slate-900">
        Результаты
      </div>
      <div className="flex min-h-[240px] items-center justify-center text-sm text-slate-500">
        {content}
      </div>
    </div>
  );
};

export default TrialsTable;
