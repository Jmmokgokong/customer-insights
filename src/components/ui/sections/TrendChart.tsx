import { useMonthlyTrends } from '../../../hooks/useCustomerData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import Card from '../Card';

const SpendingTrendChart = () => {
  const {
    data: spendingTrendsData,
    loading,
    error,
  } = useMonthlyTrends('12345');

  if (loading) return <div>Loading chart...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!spendingTrendsData) return <div>No data</div>;

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4 text-primary">
        Monthly Spending Trend
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Track your spending over the last 6 months
      </p>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={spendingTrendsData.trends}>
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              tickFormatter={value => value.split('-')[1]}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickFormatter={value => `R${value}`}
            />
            <Tooltip
              formatter={value => [`R${value}`, 'Total Spent']}
              labelFormatter={label => `Month: ${label}`}
            />
            <Bar dataKey="totalSpent" fill="#007bff" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default SpendingTrendChart;
