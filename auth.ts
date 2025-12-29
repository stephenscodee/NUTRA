// Servicio de autenticación

import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiClient } from './api';
import {
  LoginCredentials,
  RegisterData,
  AuthTokens,
  User,
  ApiResponse,
} from '../types';

export const authService = {
  /**
   * Iniciar sesión
   */
  async login(
    credentials: LoginCredentials
  ): Promise<ApiResponse<{ user: User; tokens: AuthTokens }>> {
    const response = await apiClient.post('/auth/login', credentials);

    if (response.success && response.data) {
      // Guardar tokens
      await AsyncStorage.setItem('accessToken', response.data.tokens.accessToken);
      await AsyncStorage.setItem(
        'refreshToken',
        response.data.tokens.refreshToken
      );
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response;
  },

  /**
   * Registrarse
   */
  async register(
    data: RegisterData
  ): Promise<ApiResponse<{ user: User; tokens: AuthTokens }>> {
    const response = await apiClient.post('/auth/register', data);

    if (response.success && response.data) {
      // Guardar tokens
      await AsyncStorage.setItem('accessToken', response.data.tokens.accessToken);
      await AsyncStorage.setItem(
        'refreshToken',
        response.data.tokens.refreshToken
      );
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response;
  },

  /**
   * Cerrar sesión
   */
  async logout(): Promise<void> {
    await apiClient.post('/auth/logout');
    await AsyncStorage.multiRemove([
      'accessToken',
      'refreshToken',
      'user',
    ]);
  },

  /**
   * Obtener usuario actual desde storage
   */
  async getCurrentUser(): Promise<User | null> {
    try {
      const userJson = await AsyncStorage.getItem('user');
      return userJson ? JSON.parse(userJson) : null;
    } catch {
      return null;
    }
  },

  /**
   * Verificar si está autenticado
   */
  async isAuthenticated(): Promise<boolean> {
    const token = await AsyncStorage.getItem('accessToken');
    return !!token;
  },

  /**
   * Refresh token
   */
  async refreshToken(): Promise<ApiResponse<AuthTokens>> {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (!refreshToken) {
      return {
        success: false,
        error: {
          code: 'NO_REFRESH_TOKEN',
          message: 'No hay refresh token disponible',
        },
      };
    }

    const response = await apiClient.post('/auth/refresh', { refreshToken });

    if (response.success && response.data) {
      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      if (response.data.refreshToken) {
        await AsyncStorage.setItem(
          'refreshToken',
          response.data.refreshToken
        );
      }
    }

    return response;
  },
};

