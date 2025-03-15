import api from './api';

export const getSettings = async () => {
  const response = await api.get('/settings');
  return response.data;
};

export const updateSettings = async (settingsData) => {
  const response = await api.put('/settings', settingsData);
  return response.data;
};

export const updateSetting = async (setting, value) => {
  const response = await api.patch('/settings', { setting, value });
  return response.data;
};
