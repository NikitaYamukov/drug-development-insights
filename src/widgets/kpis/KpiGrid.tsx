const KpiGrid = () => {
  const kpis = [
    { label: "Исследований", value: "—" },
    { label: "Спонсоров", value: "—" },
    { label: "Фаз в выдаче", value: "—" },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="text-xl font-bold text-slate-900">{kpi.value}</div>
          <div className="text-sm text-slate-600">{kpi.label}</div>
        </div>
      ))}
    </div>
  );
};

export default KpiGrid;
