
export const SkeletonCard = () => (
  <div className="bg-white rounded-lg p-4 md:p-6 shadow-md animate-pulse">
    <div className="space-y-4">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-8 bg-gray-200 rounded w-1/3"></div>
    </div>
  </div>
);

export const SkeletonTable = () => (
  <div className="bg-white rounded-lg p-4 shadow-md animate-pulse">
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex space-x-4">
            <div className="h-3 bg-gray-200 rounded w-1/6"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/6"></div>
            <div className="h-3 bg-gray-200 rounded w-1/8"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const SkeletonChart = () => (
  <div className="bg-white rounded-lg p-4 shadow-md animate-pulse">
    <div className="space-y-4">
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      <div className="h-64 bg-gray-200 rounded"></div>
    </div>
  </div>
);

export const SkeletonProfile = () => (
  <div className="bg-white rounded-lg p-4 md:p-6 shadow-md animate-pulse">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto sm:mx-0"></div>
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 rounded w-32"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
          <div className="h-3 bg-gray-200 rounded w-40"></div>
        </div>
      </div>
      <div className="text-center md:text-right space-y-2">
        <div className="h-4 bg-gray-200 rounded w-32 mx-auto md:mx-0"></div>
        <div className="h-8 bg-gray-200 rounded w-24 mx-auto md:mx-0"></div>
      </div>
    </div>
  </div>
);
