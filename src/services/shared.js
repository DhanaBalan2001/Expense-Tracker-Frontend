import api from './api';

export const getSharedExpenses = async () => {
  const response = await api.get('/api/shared');
  return response.data;
};

export const createSharedExpense = async (sharedData) => {
  const response = await api.post('/api/shared', sharedData);
  return response.data;
};

export const updateSharedExpense = async (id, sharedData) => {
  const response = await api.put(`/api/shared/${id}`, sharedData);
  return response.data;
};

export const deleteSharedExpense = async (id) => {
  const response = await api.delete(`/api/shared/${id}`);
  return response.data;
};

export const settleExpense = async (id) => {
  const response = await api.post(`/api/shared/${id}/settle`);
  return response.data;
};
