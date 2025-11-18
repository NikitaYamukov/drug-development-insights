import FiltersPanel from "@features/filters";
import ExportBar from "@features/export";
import PaginationBar from "@features/pagination";
import TrialsChart from "@widgets/chart";
import TrialsTable from "@widgets/table";
import KpiGrid from "@widgets/kpis";
import { Container } from "@shared";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur">
        <Container className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">
            Drug Development Insights Dashboard
          </h1>
        </Container>
      </header>

      <main>
        <Container className="space-y-6 py-6">
          <FiltersPanel />
          <KpiGrid />
          <TrialsChart />
          <TrialsTable />
          <PaginationBar />
          <ExportBar />
        </Container>
      </main>
    </div>
  );
};

export default DashboardPage;
