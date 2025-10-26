import axios from 'axios';
import type {
  CustomerProfile,
  SpendingSummary,
  SpendingByCategory,
  MonthlyTrends,
  TransactionsResponse,
  GoalsResponse,
  FiltersResponse,
} from '../types';

const api = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const customerApi = {
  getProfile: (customerId: string): Promise<CustomerProfile> =>
    api.get(`/customers/${customerId}/profile`).then(res => res.data),

  getSpendingSummary: (
    customerId: string,
    period?: string
  ): Promise<SpendingSummary> =>
    api
      .get(`/customers/${customerId}/spending/summary`, {
        params: period ? { period } : {},
      })
      .then(res => res.data),

  getSpendingByCategory: (
    customerId: string,
    params?: {
      period?: string;
      startDate?: string;
      endDate?: string;
    }
  ): Promise<SpendingByCategory> =>
    api
      .get(`/customers/${customerId}/spending/categories`, {
        params: params || {},
      })
      .then(res => res.data),

  getMonthlyTrends: (
    customerId: string,
    months?: number
  ): Promise<MonthlyTrends> =>
    api
      .get(`/customers/${customerId}/spending/trends`, {
        params: months ? { months } : {},
      })
      .then(res => res.data),

  getTransactions: (
    customerId: string,
    params?: {
      limit?: number;
      offset?: number;
      category?: string;
      startDate?: string;
      endDate?: string;
      sortBy?: string;
    }
  ): Promise<TransactionsResponse> =>
    api
      .get(`/customers/${customerId}/transactions`, {
        params: params || {},
      })
      .then(res => res.data),

  getGoals: (customerId: string): Promise<GoalsResponse> =>
    api.get(`/customers/${customerId}/goals`).then(res => res.data),

  getFilters: (customerId: string): Promise<FiltersResponse> =>
    api.get(`/customers/${customerId}/filters`).then(res => res.data),
};

export default api;
