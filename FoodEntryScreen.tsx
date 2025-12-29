// Pantalla de registro de comida

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function FoodEntryScreen() {
  const [inputType, setInputType] = useState<'text' | 'image' | 'voice' | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Registrar Comida</Text>
        <Text style={styles.subtitle}>
          Elige cómo quieres registrar tu comida
        </Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => setInputType('text')}
        >
          <Text style={styles.optionIcon}>✍️</Text>
          <Text style={styles.optionTitle}>Texto</Text>
          <Text style={styles.optionDescription}>
            Escribe lo que comiste
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => setInputType('image')}
        >
          <Text style={styles.optionIcon}>📷</Text>
          <Text style={styles.optionTitle}>Foto</Text>
          <Text style={styles.optionDescription}>
            Toma una foto de tu comida
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => setInputType('voice')}
        >
          <Text style={styles.optionIcon}>🎤</Text>
          <Text style={styles.optionTitle}>Voz</Text>
          <Text style={styles.optionDescription}>
            Describe tu comida con voz
          </Text>
        </TouchableOpacity>
      </View>

      {inputType && (
        <View style={styles.inputArea}>
          <Text style={styles.placeholder}>
            Input {inputType} será implementado aquí
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
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
  options: {
    gap: 16,
  },
  option: {
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#8E8E93',
  },
  inputArea: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
  },
  placeholder: {
    fontSize: 14,
    color: '#8E8E93',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

