import api from './api';

export const getSettings = async () => {
  const response = await api.get('/api/settings');
  return response.data;
};

export const updateSettings = async (settingsData) => {
  const response = await api.put('/api/settings', settingsData);
  return response.data;
};

export const updateSetting = async (setting, value) => {
  const response = await api.patch('/api/settings', { setting, value });
  return response.data;
};
