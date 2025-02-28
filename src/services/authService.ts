import axios from "axios";

const BASE_URL = "http://localhost:5162/api/Auth";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;  // This field is now required
  phoneNumber: string;
}

interface LoginResponse {
  token: string;
}

export const register = async (userData: RegisterData): Promise<void> => {
  try {
    console.log('Registration request data:', userData); // Add logging
    await api.post('/register', userData);
  } catch (error: unknown) {
    console.error('Registration API error:', error.response?.data); // Add error logging
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const { data } = await api.post<LoginResponse>('/login', { email, password });
    return data;
  } catch (error: unknown) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};
