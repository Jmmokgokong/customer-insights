import { useCustomerProfile } from "../../../hooks/useCustomerData";

const UserProfileCard = () => {
  const { data: user, loading, error } = useCustomerProfile('12345');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data</div>;

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-md w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto sm:mx-0">
            <img src={`https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900`} alt="User Profile" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex flex-col gap-2"></div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-sm md:text-base text-gray-600">{user.email}</p>
            <p className="text-xs md:text-sm text-gray-500">
              Member since {user.joinDate} • {user.accountType} Account
            </p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-500">Total Lifetime Spending</p>
          <p className="text-2xl md:text-3xl font-bold text-blue-600">
            {user.currency} {user.totalSpent.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;