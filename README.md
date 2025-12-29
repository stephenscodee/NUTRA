# 🧠 NUTRA - App de Nutrición Inteligente

> **La app que no solo cuenta calorías, sino que piensa por ti qué comer después**

## 📋 Descripción

NUTRA es una aplicación móvil de nutrición inteligente que traduce comida en decisiones saludables. Diseñada para ser rápida, intuitiva y con cero fricción, resuelve el problema real de adherencia que enfrentan las apps de nutrición tradicionales.

### Propuesta de Valor

**Posicionamiento:** "La app que no solo cuenta calorías, sino que piensa por ti qué comer después"

**Diferenciadores críticos:**
- ✅ Input multimodal (texto, foto, voz) ultra rápido
- ✅ IA contextual que explica como humano
- ✅ Recomendaciones accionables en tiempo real
- ✅ Foco en adherencia, no solo precisión

---

## 🎯 Público Objetivo Inicial

**Perfil: "El Deportista Consciente"**
- Edad: 25-40 años
- Va al gimnasio 3-5 veces/semana
- Ya usa apps fitness, pero odia contar macros
- Dispuesto a pagar por simplificación

**Necesidad:** "Quiero ganar músculo/definir, pero no sé si como lo suficiente ni qué"

---

## ⚙️ Core Features (MVP)

### 1. Sistema de Input Multimodal
- ✅ Texto natural: "Comí 2 huevos revueltos con aguacate"
- ✅ Foto con reconocimiento IA
- ✅ Voz (transcripción + procesamiento)
- ✅ Escaneo código de barras

### 2. Motor de Análisis Nutricional
```
Input → IA identifica alimentos → Base de datos nutricional → 
→ Cálculo preciso → Contexto personalizado
```

### 3. Dashboard Inteligente
- Vista diaria simplificada
- 3 métricas clave según objetivo
- Alertas contextuales cuando importan

### 4. Recomendador Proactivo ⭐
```
"Para completar tu día de forma óptima, cena:"
→ Salmón + brócoli + arroz integral (opciones con fotos)
→ "Esto te dará: +35g proteína, omega-3, vitamina D que te falta"
```

---

## 💰 Modelo de Monetización (Freemium)

| Plan | Características | Precio |
|------|----------------|--------|
| **Free** | • 3 registros/día<br>• Cálculo básico (kcal + macros)<br>• Historial 7 días<br>• Ads discretos | 0€ |
| **Pro** | • Registros ilimitados<br>• Recomendador IA completo<br>• Análisis de micros<br>• Historial completo<br>• Sin ads | **7,99€/mes**<br>69€/año |
| **Coach** | • Todo Pro +<br>• Plan semanal personalizado<br>• Ajuste dinámico objetivos | 14,99€/mes |

---

## 🛠️ Stack Tecnológico

### Frontend
- **React Native** (iOS + Android con 1 código)
- **Diseño:** Minimalista, rápido, fotografiable

### Backend
- **Node.js** + **PostgreSQL**
- **IA:** API de Claude (Anthropic) para procesamiento lenguaje natural
- **Reconocimiento imagen:** Claude Vision API

### Bases de Datos Nutricionales
- **USDA FoodData Central** (gratis, completa)
- **BEDCA** (española, alimentos locales)
- **OpenFoodFacts** (productos comerciales)

### Integraciones
- Google Fit / Apple Health
- Cámara para foto de comida

---

## 📁 Estructura del Proyecto

```
nutra/
├── mobile/                 # App React Native
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── screens/        # Pantallas principales
│   │   ├── services/       # Servicios API
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utilidades
│   │   └── types/          # TypeScript types
│   └── assets/             # Imágenes, fuentes
├── backend/                # API Node.js
│   ├── src/
│   │   ├── routes/         # Endpoints API
│   │   ├── services/       # Lógica de negocio
│   │   ├── models/         # Modelos de datos
│   │   ├── ai/             # Servicios IA
│   │   └── nutrition/      # Lógica nutricional
│   └── database/           # Migraciones, seeds
├── docs/                   # Documentación
│   ├── strategy/           # Plan estratégico
│   ├── architecture/       # Arquitectura técnica
│   └── api/                # Documentación API
└── scripts/                # Scripts de utilidad
```

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js >= 18
- React Native CLI
- PostgreSQL >= 14
- Cuenta Anthropic (API Claude)

### Instalación

```bash
# Instalar dependencias móvil
cd mobile
npm install

# Instalar dependencias backend
cd ../backend
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# Iniciar backend
npm run dev

# Iniciar app móvil (otro terminal)
cd mobile
npm start
```

---

## 📊 KPIs de Éxito

### Salud del Producto
- **DAU (Daily Active Users):** Meta >40% de MAU
- **Retention D30:** >50%
- **Tiempo en app:** <3 min/sesión

### Negocio
- **Conversión Free→Pro:** 20-25% en 60 días
- **Churn mensual:** <5%
- **LTV/CAC:** Mínimo 3:1

---

## 🗺️ Roadmap

### Fase 1: MVP Funcional (3-4 meses)
- [x] Estructura del proyecto
- [ ] Input multimodal (texto, foto, voz)
- [ ] Motor de análisis nutricional
- [ ] Dashboard básico
- [ ] Recomendador simple

### Fase 2: Diferenciación Premium (6-12 meses)
- [ ] IA Predictiva
- [ ] Contexto de salud avanzado
- [ ] Gamificación inteligente
- [ ] Social/Comunitario

---

## 📝 Licencia

Proprietary - Todos los derechos reservados

---

## 👥 Equipo

*Proyecto en desarrollo inicial*

---

## 📞 Contacto

Para más información sobre el proyecto, consulta la documentación en `/docs`

