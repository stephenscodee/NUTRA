// Pantalla de recomendaciones

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export function RecommendationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recomendaciones</Text>
        <Text style={styles.subtitle}>
          Qué deberías comer para completar tu día
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholder}>
          Las recomendaciones inteligentes aparecerán aquí
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
  },
  content: {
    padding: 20,
  },
  placeholder: {
    fontSize: 14,
    color: '#8E8E93',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

