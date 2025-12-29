// Pantalla principal - Dashboard

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>NUTRA</Text>
        <Text style={styles.subtitle}>Tu nutrición inteligente</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumen del Día</Text>
        <Text style={styles.placeholder}>
          Aquí se mostrará el resumen nutricional diario
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recomendaciones</Text>
        <Text style={styles.placeholder}>
          Recomendaciones inteligentes aparecerán aquí
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 4,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000000',
  },
  placeholder: {
    fontSize: 14,
    color: '#8E8E93',
    fontStyle: 'italic',
  },
});

