import { useState, useEffect } from 'react';
import { customerApi } from '../services/api';

function useApiCall<T>(apiCall: () => Promise<T>, dependencies: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const result = await apiCall();
        setData(result);
      } catch (err) {
        setError(
          err && typeof err === 'object' && 'message' in err
            ? (err.message as string)
            : 'Failed to fetch data'
        );
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, dependencies);

  return { data, loading, error };
}

export function useCustomerProfile(customerId: string) {
  return useApiCall(() => customerApi.getProfile(customerId), [customerId]);
}

export function useSpendingSummary(customerId: string, period?: string) {
  return useApiCall(
    () => customerApi.getSpendingSummary(customerId, period),
    [customerId, period]
  );
}

export function useSpendingByCategory(
  customerId: string,
  params?: { period?: string; startDate?: string; endDate?: string }
) {
  return useApiCall(
    () => customerApi.getSpendingByCategory(customerId, params),
    [customerId, params?.period, params?.startDate, params?.endDate]
  );
}

export function useMonthlyTrends(customerId: string, months?: number) {
  return useApiCall(
    () => customerApi.getMonthlyTrends(customerId, months),
    [customerId, months]
  );
}

export function useTransactions(
  customerId: string,
  params?: {
    limit?: number;
    offset?: number;
    category?: string;
    startDate?: string;
    endDate?: string;
    sortBy?: string;
  }
) {
  return useApiCall(
    () => customerApi.getTransactions(customerId, params),
    [
      customerId,
      params?.limit,
      params?.offset,
      params?.category,
      params?.startDate,
      params?.endDate,
      params?.sortBy,
    ]
  );
}

export function useGoals(customerId: string) {
  return useApiCall(() => customerApi.getGoals(customerId), [customerId]);
}

export function useFilters(customerId: string) {
  return useApiCall(() => customerApi.getFilters(customerId), [customerId]);
}
