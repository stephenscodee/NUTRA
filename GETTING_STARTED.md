# 🚀 Guía de Inicio Rápido - NUTRA

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 18.x
- **npm** o **yarn**
- **PostgreSQL** >= 14
- **Redis** (opcional, para caché)
- **Cuenta Anthropic** (para API de Claude)
- **Expo CLI** (para desarrollo móvil)

## Instalación

### 1. Backend

```bash
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# Configurar base de datos
npx prisma generate
npx prisma migrate dev --name init

# Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### 2. Mobile App

```bash
cd mobile

# Instalar dependencias
npm install

# Iniciar Expo
npm start

# O directamente para iOS/Android
npm run ios
npm run android
```

## Variables de Entorno Necesarias

### Backend (.env)

```env
# Base de datos
DATABASE_URL=postgresql://user:password@localhost:5432/nutra_db

# JWT
JWT_SECRET=tu-secret-jwt-super-seguro
JWT_REFRESH_SECRET=tu-refresh-secret

# Claude API
ANTHROPIC_API_KEY=tu-anthropic-api-key

# APIs externas
USDA_API_KEY=tu-usda-api-key

# CORS (URL de tu app móvil)
CORS_ORIGIN=http://localhost:19006
```

## Estructura del Proyecto

```
nutra/
├── mobile/          # App React Native
├── backend/         # API Node.js
└── docs/           # Documentación
```

## Desarrollo

### Backend

```bash
cd backend
npm run dev          # Desarrollo con hot reload
npm run build        # Compilar TypeScript
npm start            # Ejecutar versión compilada
```

### Mobile

```bash
cd mobile
npm start            # Iniciar Expo Dev Server
npm run ios          # Ejecutar en iOS Simulator
npm run android      # Ejecutar en Android Emulator
```

## Próximos Pasos

1. **Completar implementación de servicios:**
   - `food.service.ts` - Lógica de negocio para comidas
   - `nutrition/calculator.service.ts` - Cálculo nutricional
   - `auth.controller.ts` - Autenticación completa

2. **Integrar APIs externas:**
   - USDA FoodData Central
   - BEDCA (española)
   - OpenFoodFacts

3. **Implementar funciones de IA:**
   - Mejorar prompts de Claude
   - Sistema de recomendaciones

4. **Desarrollar UI móvil:**
   - Componentes de input (texto, foto, voz)
   - Dashboard con visualizaciones
   - Pantalla de recomendaciones

## Recursos Útiles

- [Documentación React Native](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Claude API Documentation](https://docs.anthropic.com/)

## Solución de Problemas

### Error de conexión a base de datos
- Verifica que PostgreSQL esté corriendo
- Revisa la `DATABASE_URL` en `.env`

### Error con Claude API
- Verifica tu `ANTHROPIC_API_KEY`
- Asegúrate de tener créditos en tu cuenta

### Problemas con Expo
- Limpia caché: `expo start -c`
- Reinstala dependencias: `rm -rf node_modules && npm install`

