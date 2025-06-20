import apiClient from './axiosConfig';

export const loginUser = async (credentials) => {
  // credentials là object chứa { email, password }
  const { data } = await apiClient.post('/user/login', credentials);
  return data;
};

export const getUserProfile = async () => {
    const { data } = await apiClient.get('/user/profile');
    return data;
}