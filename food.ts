// Servicio para gestión de comidas

import { apiClient } from './api';
import {
  FoodEntry,
  InputType,
  MealType,
  ApiResponse,
  Recommendation,
} from '../types';

interface CreateFoodEntryInput {
  inputType: InputType;
  inputText?: string;
  imageUri?: string;
  mealType: MealType;
}

interface CreateFoodEntryResponse {
  entry: FoodEntry;
  recommendation?: Recommendation;
}

export const foodService = {
  /**
   * Registrar una comida mediante texto
   */
  async createFromText(
    text: string,
    mealType: MealType
  ): Promise<ApiResponse<CreateFoodEntryResponse>> {
    return apiClient.post('/food/entry', {
      inputType: InputType.TEXT,
      inputText: text,
      mealType,
    });
  },

  /**
   * Registrar una comida mediante foto
   */
  async createFromImage(
    imageUri: string,
    mealType: MealType
  ): Promise<ApiResponse<CreateFoodEntryResponse>> {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'food.jpg',
    } as any);
    formData.append('mealType', mealType);
    formData.append('inputType', InputType.IMAGE);

    return apiClient.upload<CreateFoodEntryResponse>(
      '/food/entry/image',
      formData
    );
  },

  /**
   * Registrar una comida mediante código de barras
   */
  async createFromBarcode(
    barcode: string,
    mealType: MealType
  ): Promise<ApiResponse<CreateFoodEntryResponse>> {
    return apiClient.post('/food/entry/barcode', {
      inputType: InputType.BARCODE,
      barcode,
      mealType,
    });
  },

  /**
   * Obtener historial de comidas
   */
  async getHistory(
    startDate?: string,
    endDate?: string,
    limit = 20
  ): Promise<ApiResponse<FoodEntry[]>> {
    return apiClient.get('/food/history', {
      startDate,
      endDate,
      limit,
    });
  },

  /**
   * Eliminar una comida registrada
   */
  async deleteEntry(entryId: string): Promise<ApiResponse<void>> {
    return apiClient.delete(`/food/entry/${entryId}`);
  },

  /**
   * Actualizar una comida (por ejemplo, ajustar porciones)
   */
  async updateEntry(
    entryId: string,
    updates: Partial<FoodEntry>
  ): Promise<ApiResponse<FoodEntry>> {
    return apiClient.put(`/food/entry/${entryId}`, updates);
  },
};

