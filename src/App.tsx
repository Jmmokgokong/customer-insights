import DashboardLayout from './components/ui/layout/dashboardLayout';
import MetricCardSection from './components/ui/sections/MetricCardSection';
import UserProfileCard from './components/ui/sections/userProfileCard';
import FilterSection from './components/ui/sections/FilteringSection';
function App() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <UserProfileCard />
        <MetricCardSection />
        <FilterSection />
      </div>
    </DashboardLayout>
  )
}

export default App
