import { useSpendingByCategory } from '../../../hooks/useCustomerData';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Card from '../Card';

const SpendingChart = () => {
  const { data: spendingData, loading, error } = useSpendingByCategory('12345');

  if (loading) return <div>Loading chart...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!spendingData) return <div>No data</div>;

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4 text-primary">
        Spending Overview
      </h3>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={spendingData.categories as any}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percentage }) => `${name} ${percentage}%`}
              >
                {spendingData.categories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1">
          <div className="space-y-2">
            {spendingData.categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm text-gray-900 font-medium">
                    {category.name}
                  </span>
                </div>
                <div className="text-sm text-primary font-semibold">
                  {category.amount} ({category.percentage}%)
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SpendingChart;
