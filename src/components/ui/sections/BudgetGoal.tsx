import { useGoals } from '../../../hooks/useCustomerData';
import Card from '../Card';

const BudgetGoals = () => {
  const { data: goalsData, loading, error } = useGoals('12345');

  if (loading) return <div>Loading goals...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!goalsData) return <div>No data</div>;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on_track':
        return 'bg-success';
      case 'warning':
        return 'bg-warning';
      case 'exceeded':
        return 'bg-danger';
      default:
        return 'bg-primary';
    }
  };

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4 text-primary">
        Monthly Budget Goals
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Track your spending against budget targets
      </p>

      <div className="space-y-4">
        {goalsData.goals.map(goal => (
          <div key={goal.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-gray-900">{goal.category}</h4>
              <div className="text-right">
                <p className="text-sm font-medium text-primary">
                  {goal.percentageUsed.toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500">
                  {goal.daysRemaining} days left
                </p>
              </div>
            </div>

            <div className="text-sm text-primary mb-2 font-medium">
              R{goal.currentSpent.toFixed(2)} of R
              {goal.monthlyBudget.toFixed(2)}
            </div>

            <div className="w-full bg-ci-light rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getStatusColor(goal.status)}`}
                style={{ width: `${Math.min(goal.percentageUsed, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BudgetGoals;
