import DashboardLayout from './components/ui/layout/dashboardLayout';
import MetricCardSection from './components/ui/sections/MetricCardSection';
import UserProfileCard from './components/ui/sections/userProfileCard';
import FilterSection from './components/ui/sections/FilteringSection';
import SpendingChart from './components/ui/sections/SpendingChart';
import TransactionsTable from './components/ui/sections/TransactionTable';
import SpendingTrendChart from './components/ui/sections/TrendChart';
import BudgetGoals from './components/ui/sections/BudgetGoal';
function App() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <UserProfileCard />
        <MetricCardSection />
        <FilterSection />
        <div className="flex flex-col gap-6">
          <SpendingChart />
          <div className="flex flex-col gap-6">
            <SpendingTrendChart />
          </div>
          <div className="flex flex-col gap-6">
            <TransactionsTable />
          </div>
          <div className="flex flex-col gap-6">
            <BudgetGoals />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
