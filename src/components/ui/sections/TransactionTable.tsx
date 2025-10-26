import { useTransactions } from "../../../hooks/useCustomerData";
import Card from "../Card";

const TransactionsTable = () => {
  const { data: transactionsData, loading, error } = useTransactions('12345');
  
  if (loading) return <div>Loading transactions...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!transactionsData) return <div>No data</div>;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Date</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Merchant</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Category</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Payment</th>
              <th className="text-right py-3 px-2 text-sm font-medium text-gray-500">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-sm text-gray-900">
                  {formatDate(transaction.date)}
                </td>
                <td className="py-3 px-2 text-sm text-gray-900">
                  {transaction.merchant}
                </td>
                <td className="py-3 px-2">
                  <span 
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: transaction.categoryColor }}
                  >
                    {transaction.category}
                  </span>
                </td>
                <td className="py-3 px-2 text-sm text-gray-500">
                  {transaction.paymentMethod}
                </td>
                <td className="py-3 px-2 text-sm text-gray-900 text-right">
                  -R{transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TransactionsTable;