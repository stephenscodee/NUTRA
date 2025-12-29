# 📋 Plan Estratégico: NUTRA

## 1. PROPUESTA DE VALOR DIFERENCIAL

### Ventaja Competitiva: Inteligencia Contextual

**Posicionamiento:**
> "La app que no solo cuenta calorías, sino que piensa por ti qué comer después"

### Diferenciadores Críticos

| Aspecto | Competencia (MyFitnessPal, Cal AI) | Nuestra Oportunidad |
|---------|-----------------------------------|---------------------|
| Input | Manual, bases de datos estáticas | IA conversacional + foto |
| Output | Números fríos | Recomendaciones accionables |
| Propósito | Registro histórico | Decisión en tiempo real |
| Engagement | Declina tras 2 semanas | Sistema de "próxima comida óptima" |

---

## 2. ARQUITECTURA DEL PRODUCTO

### FASE 1: MVP Funcional (3-4 meses)

#### Core Features:

**A) Sistema de Input Multimodal**
- ✅ Texto natural: "Comí 2 huevos revueltos con aguacate"
- ✅ Foto con reconocimiento IA
- ✅ Voz (transcripción + procesamiento)
- ✅ Escaneo código de barras (productos empaquetados)

**B) Motor de Análisis Nutricional**
```
Input → IA identifica alimentos → Base de datos USDA/española → 
→ Cálculo preciso → Contexto personalizado
```

**C) Dashboard Inteligente**
- Vista diaria simplificada
- 3 métricas clave según objetivo del usuario
- Alertas solo cuando importan ("Bajo en proteína, te quedan 600 kcal")

**D) Recomendador Proactivo** ⭐ *El diferenciador clave*
```
"Para completar tu día de forma óptima, cena:"
→ Salmón + brócoli + arroz integral (opciones con fotos)
→ "Esto te dará: +35g proteína, omega-3, vitamina D que te falta"
```

### FASE 2: Diferenciación Premium (6-12 meses)

**E) IA Predictiva**
- Aprende patrones del usuario
- "Sueles tener bajo hierro los lunes" → Sugiere lentejas
- Predicción de hambre/energía según historial

**F) Contexto de Salud**
- Integración con objetivos (definición, volumen, mantenimiento)
- Detección de déficits recurrentes
- Recomendaciones de suplementación básica

**G) Gamificación Inteligente**
- No streaks vacíos, sino metas nutricionales:
  - "5 días cumpliendo proteína"
  - "Semana completa sin déficit de fibra"

**H) Social/Comunitario (opcional)**
- Compartir comidas ejemplo
- Recetas de la comunidad
- Desafíos grupales

---

## 3. SEGMENTACIÓN DE MERCADO

### Público Objetivo Primario (Año 1)

**Perfil: "El Deportista Consciente"**
- Edad: 25-40 años
- Va al gimnasio 3-5 veces/semana
- Ya usa apps fitness, pero odia contar macros
- Dispuesto a pagar por simplificación
- Valor del cliente: Alto (retención >6 meses)

**Necesidad específica:**
> "Quiero ganar músculo/definir, pero no sé si como lo suficiente ni qué"

### Público Secundario (Expansión)
1. **Déficits específicos**: Mujeres con anemia, vegetarianos/veganos
2. **Pérdida de peso**: Pero con enfoque en salud, no solo déficit calórico
3. **Salud preventiva**: +45 años, prevención diabetes/colesterol

---

## 4. MODELO DE MONETIZACIÓN

### Estructura Freemium Optimizada

| Plan | Características | Precio | % Usuarios Esperado |
|------|----------------|--------|---------------------|
| **Free** | • 3 registros/día<br>• Cálculo básico (kcal + macros)<br>• Sin historial >7 días<br>• Ads discretos | 0€ | 70% |
| **Pro** | • Registros ilimitados<br>• Recomendador IA completo<br>• Análisis de micros<br>• Historial completo<br>• Exportar datos<br>• Sin ads | **7,99€/mes**<br>69€/año | 25% |
| **Coach** | • Todo Pro +<br>• Plan semanal personalizado<br>• Ajuste dinámico objetivos<br>• Consulta mensual con nutricionista (opcional) | 14,99€/mes | 5% |

### Proyección Realista (Año 1)
- 10.000 usuarios activos → 2.500 Pro → **18.750€/mes** (MRR)
- Tasa conversión esperada: 15-25% (estándar health apps)

---

## 5. ESTRATEGIA DE LANZAMIENTO

### Pre-Lanzamiento (2-3 meses antes)

1. **Beta cerrada con gimnasios locales**
   - 100-200 usuarios iniciales
   - Feedback directo
   - Casos de éxito documentados

2. **Contenido educativo (no vendas, enseña):**
   - Blog/Instagram: "Mitos de nutrición fitness"
   - "Por qué contar calorías no funciona (y qué sí)"
   - Videos: "Registra tu comida en 10 segundos"

### Lanzamiento

**Canal Principal: Instagram/TikTok**
- Contenido visual: antes/después del registro
- "Esta app me dijo que cenara X y al día siguiente..."
- Testimonios de beta users

**Partnerships Estratégicos:**
- Entrenadores personales (comisión por referidos)
- Nutricionistas (versión "Coach" como herramienta)
- Marcas de suplementación (contenido, no ads molestos)

---

## 6. RESPUESTA A LA PREGUNTA CRÍTICA

> **"Tu app responde mejor a: '¿Qué he comido?' o '¿Qué debería comer ahora?'"**

### Recomendación Estratégica:

**Construir para responder AMBAS, pero monetizar la segunda.**

**Estrategia:**
- **Tracking ("¿Qué he comido?")** → FREE (gancho, adherencia)
- **Recomendaciones ("¿Qué como ahora?")** → PRO (valor real, recurrencia)

**Por qué funciona:**
1. El usuario entra por registrar (gratis)
2. Ve recomendaciones bloqueadas con resultados reales
3. Paga porque le **ahorras decisiones** (el verdadero dolor)

---

## 7. MÉTRICAS DE ÉXITO (KPIs)

### Salud del Producto
- **DAU (Daily Active Users):** Meta >40% de MAU
- **Retention D30:** >50% (crítico para freemium)
- **Tiempo en app:** <3 min/sesión (debe ser rápido)

### Negocio
- **Conversión Free→Pro:** 20-25% en 60 días
- **Churn mensual:** <5%
- **LTV/CAC:** Mínimo 3:1

### Impacto Real (diferenciador)
- % usuarios que siguen recomendaciones
- Mejora en adherencia vs. competencia
- Casos documentados de cambio de hábitos

---

## 8. RIESGOS Y MITIGACIÓN

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Baja adopción inicial | Media | Alto | Beta con gimnasios garantiza primeros 500 usuarios |
| Precisión IA insuficiente | Media | Crítico | Doble verificación humana primeros 6 meses + mejora continua |
| Competencia copia features | Alta | Medio | Velocidad de iteración + marca personal |
| Coste adquisición alto | Media | Alto | Crecimiento orgánico via contenido + partnerships |
| Problemas legales (consejos salud) | Baja | Crítico | Disclaimers claros + consulta legal + seguro |

---

## 9. PLAN DE ACCIÓN INMEDIATO (Próximos 90 días)

### Mes 1: Validación
- [ ] Entrevistas con 30 usuarios potenciales (gimnasios)
- [ ] Prototipo clickable (Figma)
- [ ] Validar disposición a pagar (encuesta)

### Mes 2: MVP Técnico
- [ ] Contratar desarrollador o equipo
- [ ] Integrar API nutricional básica
- [ ] Procesamiento texto con IA funcional

### Mes 3: Beta Privada
- [ ] 50 beta testers (amigos + gimnasio)
- [ ] Iterar según feedback
- [ ] Crear contenido pre-lanzamiento

---

## 10. VERDADES FUNDAMENTALES

### ✅ Hacer Bien:
1. Input ultrarrápido (foto/voz)
2. Recomendador inteligente (el diferenciador)
3. Adherencia por simplicidad, no por datos

### ❌ Evitar:
1. Sobrecarga de features inicial
2. Competir solo en precisión (ya hay apps buenas)
3. Monetizar demasiado pronto (dejar enganchar)

### 🎯 La Fórmula Ganadora:
**"Registro en 10 segundos → Recomendación inteligente en 3 → Usuario vuelve mañana"**

---

*Última actualización: 2024*

