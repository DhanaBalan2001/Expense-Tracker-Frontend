import api from './api';

export const getProfile = async () => {
  const response = await api.get('/api/profile');
  return response.data;
};

export const updateProfile = async (profileData) => {
  const response = await api.put('/api/profile', profileData);
  return response.data;
};

export const changePassword = async (passwordData) => {
  const response = await api.post('/api/profile/change-password', passwordData);
  return response.data;
};

export const deleteAccount = async (password) => {
  const response = await api.delete('/api/profile', { data: { password } });
  return response.data;
};
