import { useSpendingSummary } from "../../../hooks/useCustomerData";
import Card from "../Card";

const MetricsCards = () => {
  const { data: summary, loading, error } = useSpendingSummary('12345');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!summary) return <div>No data</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <Card>
        <div className="text-center">
          <p className="text-sm text-gray-500">TOTAL SPEND</p>
          <p className="text-2xl font-bold text-blue-600">{summary.totalSpent}</p>
          <p className="text-sm text-green-600">+{summary.comparedToPrevious.spentChange}%</p>
        </div>
      </Card>
      
      <Card>
        <div className="text-center">
          <p className="text-sm text-gray-500">AVERAGE TRANSACTION</p>
          <p className="text-2xl font-bold text-blue-600">{summary.averageTransaction}</p>
          <p className="text-sm text-gray-500">{summary.transactionCount} transactions</p>
        </div>
      </Card>
      
      <Card>
        <div className="text-center">
          <p className="text-sm text-gray-500">TOP CATEGORY</p>
          <p className="text-2xl font-bold text-blue-600">{summary.topCategory}</p>
          <p className="text-sm text-gray-500">Most spent</p>
        </div>
      </Card>
    </div>
  );
};

export default MetricsCards;