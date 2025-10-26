import { useFilters } from "../../../hooks/useCustomerData";

const FilterSection = () => {
  const { data: filters, loading, error } = useFilters('12345');
  
  if (loading) return <div>Loading filters...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!filters) return <div>No filter data</div>;

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time Period
          </label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2">
            {filters.dateRangePresets.map((preset) => (
              <option key={preset.value} value={preset.value}>
                {preset.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2">
            <option value="">All Categories</option>
            {filters.categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-shrink-0">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            Reset filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;