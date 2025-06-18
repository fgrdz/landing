import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const BookmarksApi = {
  // BOOKMARKS
  async getBookmarks() {
    try {
      const response = await api.get('/bookmarks');
      return response.data;
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
      throw error;
    }
  },

  async createBookmark(bookmarkData: {
    title: string;
    url: string;
    description?: string;
  }) {
    try {
      const response = await api.post('/bookmarks', bookmarkData);
      return response.data;
    } catch (error) {
      console.error('Error creating bookmark:', error);
      throw error;
    }
  },

  async deleteBookmark(id: number) {
    try {
      await api.delete(`/bookmarks/${id}`);
    } catch (error) {
      console.error('Error deleting bookmark:', error);
      throw error;
    }
  },

  // AUTH
  async login(credentials: { email: string; password: string }) {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  
  async register(userData: {
    email: string;
    password: string;
    name?: string;
  }) {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
  async initiateGoogleLogin() {
    try {
      window.location.href = `${API_BASE_URL}/auth/google`;
    } catch (error) {
      console.error('Google login initiation error:', error);
      throw error;
    }
  },

  async handleGoogleCallback(token: string) {
    try {
      localStorage.setItem('access_token', token);
      return { success: true };
    } catch (error) {
      console.error('Google callback handling error:', error);
      throw error;
    }
  },

  async logout() {
    try {
      localStorage.removeItem('access_token');
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  async getCurrentUser() {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      console.error('Error fetching current user:', error);
      throw error;
    }
  }
};


export default BookmarksApi;