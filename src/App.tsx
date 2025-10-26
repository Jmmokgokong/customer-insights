import DashboardLayout from './components/ui/layout/dashboard-layout';
import MetricCards from './components/ui/sections/metric-cards';
import UserProfileCard from './components/ui/sections/user-profile-card';
import FilteringSection from './components/ui/sections/filtering-section';
import SpendingChart from './components/ui/sections/spending-chart';
import TransactionTable from './components/ui/sections/transaction-table';
import TrendChart from './components/ui/sections/trend-chart';
import BudgetGoals from './components/ui/sections/budget-goals';

function App() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <UserProfileCard />
        <MetricCards />
        <FilteringSection />
        <div className="flex flex-col gap-6">
          <SpendingChart />
          <div className="flex flex-col gap-6">
            <TrendChart />
          </div>
          <div className="flex flex-col gap-6">
            <TransactionTable />
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
