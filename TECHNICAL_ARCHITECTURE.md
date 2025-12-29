# 🏗️ Arquitectura Técnica - NUTRA

## Stack Tecnológico

### Frontend (Mobile)
- **React Native** - Framework multiplataforma (iOS + Android)
- **TypeScript** - Tipado estático
- **React Navigation** - Navegación entre pantallas
- **React Query** - Gestión de estado del servidor y caché
- **Zustand** - Estado global ligero
- **Expo** (opcional) - Desarrollo más rápido

### Backend
- **Node.js** + **Express** - API REST
- **PostgreSQL** - Base de datos principal
- **Prisma** - ORM para PostgreSQL
- **Redis** - Caché y sesiones
- **JWT** - Autenticación

### IA y Procesamiento
- **Anthropic Claude API** - Procesamiento lenguaje natural y visión
- **OpenAI Whisper** (alternativa) - Transcripción de voz
- **Tesseract.js** - OCR para códigos de barras

### Bases de Datos Nutricionales
- **USDA FoodData Central API** - Base nutricional principal
- **BEDCA API** - Alimentos españoles
- **OpenFoodFacts API** - Productos comerciales

### Integraciones
- **Apple HealthKit** - Datos de salud iOS
- **Google Fit API** - Datos de salud Android
- **Stripe** - Pagos suscripciones

---

## Arquitectura del Sistema

```
┌─────────────────┐
│   React Native  │
│      App        │
└────────┬────────┘
         │ HTTPS/GraphQL
         │
┌────────▼────────┐
│   API Gateway   │
│   (Express)     │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌──▼──────┐
│ Auth  │ │ Business│
│Service│ │ Logic   │
└───────┘ └──┬──────┘
             │
    ┌────────┴────────┐
    │                 │
┌───▼────┐      ┌────▼─────┐
│Claude  │      │Nutrition │
│  API   │      │  Service │
└────────┘      └────┬─────┘
                     │
            ┌────────┴────────┐
            │                 │
      ┌─────▼─────┐    ┌──────▼─────┐
      │ PostgreSQL│    │   Redis    │
      │  Database │    │   Cache    │
      └───────────┘    └────────────┘
```

---

## Estructura de Directorios

### Mobile App (`/mobile`)

```
mobile/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── common/          # Botones, inputs, cards
│   │   ├── nutrition/       # Componentes específicos nutrición
│   │   └── ui/              # UI primitives
│   │
│   ├── screens/             # Pantallas principales
│   │   ├── Auth/            # Login, registro
│   │   ├── Dashboard/       # Vista principal
│   │   ├── FoodEntry/       # Registro de comida
│   │   ├── Recommendations/ # Recomendaciones IA
│   │   ├── Profile/         # Perfil y configuración
│   │   └── History/         # Historial de comidas
│   │
│   ├── services/            # Servicios API
│   │   ├── api.ts           # Cliente API base
│   │   ├── auth.ts          # Autenticación
│   │   ├── food.ts          # Gestión comidas
│   │   └── nutrition.ts     # Datos nutricionales
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useFoodEntry.ts
│   │   ├── useNutrition.ts
│   │   └── useRecommendations.ts
│   │
│   ├── store/               # Estado global (Zustand)
│   │   ├── authStore.ts
│   │   ├── userStore.ts
│   │   └── nutritionStore.ts
│   │
│   ├── utils/               # Utilidades
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── constants.ts
│   │
│   └── types/               # TypeScript types
│       ├── api.ts
│       ├── nutrition.ts
│       └── user.ts
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── App.tsx                  # Componente raíz
├── app.json                 # Configuración Expo
└── package.json
```

### Backend API (`/backend`)

```
backend/
├── src/
│   ├── routes/              # Endpoints API
│   │   ├── auth.routes.ts
│   │   ├── food.routes.ts
│   │   ├── nutrition.routes.ts
│   │   └── recommendations.routes.ts
│   │
│   ├── controllers/         # Lógica de controladores
│   │   ├── auth.controller.ts
│   │   ├── food.controller.ts
│   │   └── nutrition.controller.ts
│   │
│   ├── services/            # Lógica de negocio
│   │   ├── ai/
│   │   │   ├── claude.service.ts
│   │   │   ├── vision.service.ts
│   │   │   └── transcription.service.ts
│   │   │
│   │   ├── nutrition/
│   │   │   ├── calculator.service.ts
│   │   │   ├── database.service.ts
│   │   │   └── analyzer.service.ts
│   │   │
│   │   └── recommendations/
│   │       ├── recommender.service.ts
│   │       └── personalization.service.ts
│   │
│   ├── models/              # Modelos Prisma
│   │   ├── User.ts
│   │   ├── FoodEntry.ts
│   │   └── Nutrition.ts
│   │
│   ├── middleware/          # Middlewares Express
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validation.middleware.ts
│   │
│   ├── utils/               # Utilidades
│   │   ├── logger.ts
│   │   ├── errors.ts
│   │   └── validators.ts
│   │
│   └── types/               # TypeScript types
│       └── index.ts
│
├── prisma/
│   ├── schema.prisma        # Schema base de datos
│   └── migrations/          # Migraciones
│
├── database/
│   ├── seeds/               # Datos iniciales
│   └── scripts/             # Scripts utilidad
│
├── server.ts                # Entry point
├── package.json
└── .env.example
```

---

## Flujos de Datos Principales

### 1. Registro de Comida (Texto)

```
Usuario escribe → App (React Native)
    ↓
POST /api/food/entry
    ↓
Backend recibe texto
    ↓
Claude API identifica alimentos
    ↓
Nutrition Service busca en DBs
    ↓
Calcula macros/micros
    ↓
Guarda en PostgreSQL
    ↓
Retorna análisis completo
    ↓
App muestra resultado + recomendación
```

### 2. Registro de Comida (Foto)

```
Usuario toma foto → App
    ↓
POST /api/food/entry/image
    ↓
Backend recibe imagen
    ↓
Claude Vision API analiza
    ↓
Identifica alimentos + porciones
    ↓
Nutrition Service calcula
    ↓
Guarda + retorna
```

### 3. Recomendación Proactiva

```
Usuario abre app → App
    ↓
GET /api/recommendations/daily
    ↓
Backend consulta:
  - Comidas del día
  - Objetivos usuario
  - Historial patrones
    ↓
Recommendation Service:
  - Calcula déficits
  - Genera opciones
  - Personaliza mensaje
    ↓
Claude API genera texto natural
    ↓
Retorna recomendación
    ↓
App muestra: "Para completar tu día..."
```

---

## Base de Datos (Schema Prisma)

### Entidades Principales

```prisma
model User {
  id              String   @id @default(uuid())
  email           String   @unique
  name            String?
  subscription    Subscription @default(FREE)
  goal            UserGoal
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  foodEntries     FoodEntry[]
  nutritionLogs   NutritionLog[]
}

model FoodEntry {
  id              String   @id @default(uuid())
  userId          String
  user            User     @relation(fields: [userId], references: [id])
  
  inputType       InputType  // TEXT, IMAGE, VOICE, BARCODE
  inputText       String?    // Texto original si aplica
  imageUrl        String?    // URL imagen si aplica
  
  foods           Json       // Array de alimentos identificados
  totalCalories   Float
  macros          Json       // {protein, carbs, fat}
  micros          Json?      // {vitamins, minerals}
  
  mealType        MealType   // BREAKFAST, LUNCH, DINNER, SNACK
  entryDate       DateTime   @default(now())
  createdAt       DateTime   @default(now())
}

model NutritionLog {
  id              String   @id @default(uuid())
  userId          String
  user            User     @relation(fields: [userId], references: [id])
  
  date            DateTime @db.Date
  totalCalories   Float
  macros          Json
  micros          Json
  deficits        Json?    // Déficits detectados
  achievements    Json?    // Logros del día
  
  createdAt       DateTime @default(now())
}

enum Subscription {
  FREE
  PRO
  COACH
}

enum UserGoal {
  WEIGHT_LOSS
  MUSCLE_GAIN
  MAINTENANCE
  HEALTH_GENERAL
}

enum InputType {
  TEXT
  IMAGE
  VOICE
  BARCODE
}

enum MealType {
  BREAKFAST
  LUNCH
  DINNER
  SNACK
}
```

---

## APIs Externas Integradas

### 1. Anthropic Claude API
- **Uso:** Procesamiento lenguaje natural, análisis de imágenes
- **Endpoints utilizados:**
  - `/v1/messages` - Chat para identificar alimentos
  - Vision API - Análisis de fotos de comida

### 2. USDA FoodData Central
- **Uso:** Base nutricional principal
- **Endpoint:** `https://api.nal.usda.gov/fdc/v1/`

### 3. BEDCA (Base de Datos Española)
- **Uso:** Alimentos locales españoles
- **Endpoint:** API REST propia

### 4. OpenFoodFacts
- **Uso:** Productos comerciales por código de barras
- **Endpoint:** `https://world.openfoodfacts.org/api/v0/`

---

## Seguridad

### Autenticación
- JWT tokens con refresh tokens
- Tokens expiran en 15 minutos
- Refresh tokens expiran en 7 días
- Almacenamiento seguro en mobile (Keychain/Keystore)

### Validación
- Validación de entrada con Zod
- Sanitización de datos
- Rate limiting por usuario

### Privacidad
- Datos nutricionales encriptados en reposo
- GDPR compliance
- Consentimiento explícito uso de datos

---

## Performance

### Optimizaciones Frontend
- Caché de datos nutricionales comunes
- Lazy loading de imágenes
- Debouncing en búsquedas
- React Query para caché automática

### Optimizaciones Backend
- Redis para caché de respuestas API externas
- Índices en PostgreSQL para queries frecuentes
- Compresión de respuestas
- CDN para assets estáticos

---

## Escalabilidad

### Horizontal
- Load balancer para múltiples instancias backend
- Base de datos con réplicas de lectura
- Redis cluster para caché distribuida

### Vertical
- Optimización de queries
- Connection pooling
- Background jobs para procesamiento pesado

---

## Monitoring y Logging

### Herramientas
- **Sentry** - Error tracking
- **DataDog / New Relic** - APM
- **CloudWatch / Logtail** - Logs
- **Mixpanel / Amplitude** - Analytics

### Métricas Clave
- Tiempo de respuesta API
- Tasa de error
- Uso de recursos
- Engagement usuarios

---

*Última actualización: 2024*

