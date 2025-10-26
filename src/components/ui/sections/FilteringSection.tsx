import { useFilters } from '../../../hooks/useCustomerData';

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
          <select className="w-full border border-primary rounded-md px-3 py-2 text-gray-900">
            {filters.dateRangePresets.map(preset => (
              <option
                key={preset.value}
                value={preset.value}
                className="text-gray-900"
              >
                {preset.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select className="w-full border border-primary rounded-md px-3 py-2 text-gray-900">
            <option value="" className="text-gray-900">
              All Categories
            </option>
            {filters.categories.map(category => (
              <option
                key={category.name}
                value={category.name}
                className="text-gray-900"
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="shrink-0">
          <button className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-ci-light">
            Reset filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
