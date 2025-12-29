// Tipos para usuario y autenticación

import { UserGoal, Subscription } from './nutrition';

export interface User {
  id: string;
  email: string;
  name?: string;
  subscription: Subscription;
  goal: UserGoal;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  user: User;
  preferences: UserPreferences;
  nutritionTargets: NutritionTargets;
}

export interface UserPreferences {
  dietaryRestrictions: string[]; // 'vegetarian', 'vegan', 'gluten-free', etc.
  allergies: string[];
  preferredUnits: 'metric' | 'imperial';
  language: 'es' | 'en';
  notificationsEnabled: boolean;
}

export interface NutritionTargets {
  dailyCalories: number;
  macros: {
    protein: number; // gramos
    carbs: number; // gramos
    fat: number; // gramos
  };
  micros?: {
    // Targets para micronutrientes clave
    fiber: number;
    iron?: number;
    calcium?: number;
    vitaminD?: number;
    // ... otros según necesidad
  };
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name?: string;
  goal: UserGoal;
}

