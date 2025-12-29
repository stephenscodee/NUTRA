# 📋 Roadmap de Implementación - NUTRA

## Estado Actual

✅ **Completado:**
- Estructura del proyecto (mobile + backend)
- Documentación estratégica y técnica
- Configuración base (TypeScript, Prisma, React Native)
- Tipos TypeScript completos
- Servicios base (API client, auth, food, nutrition)
- Rutas y controladores básicos
- Schema de base de datos
- Integración básica con Claude API
- Pantallas móviles base

⏳ **En Progreso / Pendiente:**
- Implementación completa de servicios backend
- Integración con APIs nutricionales
- Sistema de recomendaciones
- UI completa móvil

---

## Fase 1: MVP Backend (Semanas 1-4)

### Semana 1-2: Autenticación y Usuario

- [ ] Completar `auth.controller.ts`
  - [ ] Registro de usuarios
  - [ ] Login con JWT
  - [ ] Refresh tokens
  - [ ] Hashing de contraseñas (bcrypt)
- [ ] Modelo de usuario completo
  - [ ] Creación de perfil
  - [ ] Preferencias de usuario
  - [ ] Objetivos nutricionales

### Semana 2-3: Gestión de Comidas

- [ ] Completar `food.service.ts`
  - [ ] CRUD de entradas de comida
  - [ ] Upload de imágenes (S3 o similar)
  - [ ] Integración OpenFoodFacts (códigos de barras)
- [ ] Mejorar `ai/claude.service.ts`
  - [ ] Optimizar prompts para identificación de alimentos
  - [ ] Manejo de errores robusto
  - [ ] Validación de respuestas

### Semana 3-4: Cálculo Nutricional

- [ ] Completar `nutrition/calculator.service.ts`
  - [ ] Integración USDA FoodData Central API
  - [ ] Integración BEDCA API (alimentos españoles)
  - [ ] Cálculo de macros y micros
  - [ ] Manejo de porciones y conversiones
- [ ] Crear `nutrition/analyzer.service.ts`
  - [ ] Detección de déficits nutricionales
  - [ ] Comparación con objetivos
  - [ ] Generación de alertas

---

## Fase 2: Sistema de Recomendaciones (Semanas 5-6)

- [ ] Crear `recommendations/recommender.service.ts`
  - [ ] Análisis de déficits diarios
  - [ ] Generación de opciones de comida
  - [ ] Personalización según objetivos
- [ ] Integrar Claude para explicaciones naturales
  - [ ] Generación de texto explicativo
  - [ ] Recomendaciones contextuales
- [ ] Sistema de priorización
  - [ ] Alto/medio/bajo impacto
  - [ ] Ranking por relevancia

---

## Fase 3: MVP Mobile (Semanas 7-10)

### Semana 7-8: Pantalla de Registro

- [ ] Input de texto
  - [ ] Campo de texto con validación
  - [ ] Selector de tipo de comida
  - [ ] Integración con API
- [ ] Input de foto
  - [ ] Cámara integrada (expo-camera)
  - [ ] Galería (expo-image-picker)
  - [ ] Preview de imagen
  - [ ] Upload con progreso
- [ ] Input de voz
  - [ ] Grabación (expo-av)
  - [ ] Transcripción (integrar API)
  - [ ] Preview de texto

### Semana 8-9: Dashboard

- [ ] Resumen nutricional diario
  - [ ] Calorías (consumido vs objetivo)
  - [ ] Macros (proteína, carbos, grasas)
  - [ ] Barras de progreso visuales
- [ ] Alertas de déficits
  - [ ] Cards de alertas
  - [ ] Mensajes contextuales
- [ ] Lista de comidas del día
  - [ ] Cards de comidas
  - [ ] Edición/eliminación

### Semana 9-10: Recomendaciones e Historial

- [ ] Pantalla de recomendaciones
  - [ ] Cards de recomendaciones
  - [ ] Detalles de cada recomendación
  - [ ] Acción "Añadir a mi día"
- [ ] Pantalla de historial
  - [ ] Vista por día/semana
  - [ ] Filtros
  - [ ] Estadísticas básicas

---

## Fase 4: Mejoras y Pulido (Semanas 11-12)

### Mejoras de UX

- [ ] Animaciones y transiciones
- [ ] Loading states apropiados
- [ ] Manejo de errores user-friendly
- [ ] Onboarding para nuevos usuarios
- [ ] Tutorial interactivo

### Optimizaciones

- [ ] Caché de datos nutricionales comunes
- [ ] Optimización de imágenes
- [ ] Lazy loading
- [ ] Paginación en listas

### Testing

- [ ] Tests unitarios (backend)
- [ ] Tests de integración (API)
- [ ] Tests E2E (mobile críticos)

---

## Fase 5: Features Premium (Mes 4+)

### Sistema de Suscripciones

- [ ] Integración Stripe
- [ ] Gestión de planes (Free, Pro, Coach)
- [ ] Límites por plan
- [ ] Webhooks de pagos

### Features Premium

- [ ] Historial ilimitado
- [ ] Exportar datos (CSV, PDF)
- [ ] Análisis avanzados
- [ ] Plan semanal personalizado

### IA Avanzada

- [ ] Aprendizaje de patrones del usuario
- [ ] Predicción de hambre/energía
- [ ] Recomendaciones proactivas mejoradas
- [ ] Personalización por historial

---

## Prioridades Críticas

### Para MVP Funcional (Orden de importancia):

1. **Autenticación completa** - Sin esto, nada funciona
2. **Registro de comida por texto** - Core feature
3. **Cálculo nutricional básico** - Valor fundamental
4. **Dashboard con resumen diario** - Visualización necesaria
5. **Recomendaciones simples** - Diferenciador clave

### Post-MVP:

6. Registro por foto
7. Registro por voz
8. Historial completo
9. Análisis avanzados
10. Suscripciones

---

## Métricas de Éxito MVP

- ✅ Usuario puede registrarse y hacer login
- ✅ Usuario puede registrar comida por texto
- ✅ Sistema calcula correctamente calorías y macros
- ✅ Dashboard muestra resumen del día
- ✅ Sistema genera al menos 1 recomendación diaria
- ✅ App carga en <3 segundos
- ✅ Registro de comida toma <30 segundos

---

## Próximos Pasos Inmediatos

1. **Configurar entorno local:**
   - PostgreSQL corriendo
   - Variables de entorno configuradas
   - API keys obtenidas

2. **Implementar autenticación:**
   - Prioridad #1 para comenzar desarrollo

3. **Crear usuario de prueba:**
   - Para testing de features

4. **Implementar primer flujo completo:**
   - Registro → Cálculo → Dashboard

---

*Última actualización: 2024*

