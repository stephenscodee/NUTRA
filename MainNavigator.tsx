// Navegador principal de la app

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens (crear estos componentes)
import { DashboardScreen } from '../screens/Dashboard/DashboardScreen';
import { FoodEntryScreen } from '../screens/FoodEntry/FoodEntryScreen';
import { RecommendationsScreen } from '../screens/Recommendations/RecommendationsScreen';
import { HistoryScreen } from '../screens/History/HistoryScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Inicio',
        }}
      />
      <Tab.Screen
        name="FoodEntry"
        component={FoodEntryScreen}
        options={{
          tabBarLabel: 'Registrar',
        }}
      />
      <Tab.Screen
        name="Recommendations"
        component={RecommendationsScreen}
        options={{
          tabBarLabel: 'Recomendaciones',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Historial',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
}

export function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  );
}

