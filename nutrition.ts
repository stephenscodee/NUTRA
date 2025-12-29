// Tipos para datos nutricionales

export enum MealType {
  BREAKFAST = 'BREAKFAST',
  LUNCH = 'LUNCH',
  DINNER = 'DINNER',
  SNACK = 'SNACK',
}

export enum InputType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VOICE = 'VOICE',
  BARCODE = 'BARCODE',
}

export enum UserGoal {
  WEIGHT_LOSS = 'WEIGHT_LOSS',
  MUSCLE_GAIN = 'MUSCLE_GAIN',
  MAINTENANCE = 'MAINTENANCE',
  HEALTH_GENERAL = 'HEALTH_GENERAL',
}

export enum Subscription {
  FREE = 'FREE',
  PRO = 'PRO',
  COACH = 'COACH',
}

export interface Macros {
  protein: number; // gramos
  carbs: number; // gramos
  fat: number; // gramos
}

export interface Micros {
  // Vitaminas (mg o mcg)
  vitaminA?: number;
  vitaminB12?: number;
  vitaminC?: number;
  vitaminD?: number;
  vitaminE?: number;
  folate?: number;
  // Minerales (mg)
  iron?: number;
  calcium?: number;
  magnesium?: number;
  zinc?: number;
  potassium?: number;
  fiber?: number;
}

export interface FoodItem {
  id: string;
  name: string;
  quantity: number;
  unit: string; // 'g', 'ml', 'units', etc.
  calories: number;
  macros: Macros;
  micros?: Micros;
}

export interface FoodEntry {
  id: string;
  userId: string;
  inputType: InputType;
  inputText?: string;
  imageUrl?: string;
  foods: FoodItem[];
  totalCalories: number;
  macros: Macros;
  micros?: Micros;
  mealType: MealType;
  entryDate: string; // ISO date string
  createdAt: string;
}

export interface NutritionLog {
  id: string;
  userId: string;
  date: string; // ISO date string
  totalCalories: number;
  macros: Macros;
  micros?: Micros;
  deficits?: NutrientDeficit[];
  achievements?: string[];
}

export interface NutrientDeficit {
  nutrient: string;
  current: number;
  target: number;
  unit: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
}

export interface Recommendation {
  id: string;
  type: 'meal' | 'snack' | 'supplement' | 'adjustment';
  title: string;
  description: string;
  foods: FoodItem[];
  expectedNutrition: {
    calories: number;
    macros: Macros;
    micros?: Partial<Micros>;
  };
  reasoning: string; // Explicación en lenguaje natural
  priority: 'high' | 'medium' | 'low';
}

export interface DailyNutrition {
  date: string;
  calories: {
    consumed: number;
    target: number;
    remaining: number;
  };
  macros: {
    protein: { consumed: number; target: number; percentage: number };
    carbs: { consumed: number; target: number; percentage: number };
    fat: { consumed: number; target: number; percentage: number };
  };
  micros?: Partial<Micros>;
  deficits?: NutrientDeficit[];
}

