import api from './api';

export const getGoals = async () => {
  const response = await api.get('/api/goals');
  return response.data;
};

export const setFinancialGoal = async (goalData) => {
  const response = await api.post('/api/goals', goalData);
  return response.data;
};

export const updateGoal = async (id, goalData) => {
  const response = await api.put(`/api/goals/${id}`, goalData);
  return response.data;
};

export const deleteGoal = async (id) => {
  const response = await api.delete(`/api/goals/${id}`);
  return response.data;
};

export const trackSavingsGoal = async (goalData) => {
  const response = await api.post('/api/expenses/track-savings-goal', goalData);
  return response.data;
};
