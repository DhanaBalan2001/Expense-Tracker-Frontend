import api from './api';

export const getBudgets = async () => {
  const response = await api.get('/budgets');
  return response.data;
};

export const createBudget = async (budgetData) => {
  const response = await api.post('api/budgets', budgetData);
  return response.data;
};

export const updateBudget = async (id, budgetData) => {
  const response = await api.put(`api/budgets/${id}`, budgetData);
  return response.data;
};

export const deleteBudget = async (id) => {
  const response = await api.delete(`api/budgets/${id}`);
  return response.data;
};

export const getBudgetOverview = async () => {
  const response = await api.get('/api/expenses/budget-overview');
  return response.data;
};
