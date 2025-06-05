# Guías de desarrollo para React Stars Modern

## Estándares de código

### TypeScript estricto

- Usar `strict: true` en tsconfig.json
- Definir tipos explícitos para todas las props, estados y funciones
- Evitar el uso de `any` y `unknown` sin acotar

### Componentes funcionales

- Usar exclusivamente componentes funcionales con hooks
- Evitar clases de React
- Aplicar React.memo para componentes que no necesitan re-renderizarse frecuentemente

### Hooks

- Seguir las reglas de hooks de React
- Extraer lógica compleja a hooks personalizados
- Usar useCallback para funciones y useMemo para valores calculados
- Optimizar las dependencias de los hooks para evitar re-renderizados innecesarios

### Estilo de código

- Seguir las reglas de ESLint y Prettier configuradas
- Usar punto y coma al final de las declaraciones
- Comillas simples para strings
- 2 espacios para indentación
- Máximo 100 caracteres por línea

## Estructura y organización

### Estructura de archivos

- Un componente por archivo
- Nombres de archivos en PascalCase para componentes
- Nombres de archivos en camelCase para hooks y utilidades
- Exportar componentes como default
- Exportar tipos y hooks como named exports

### Imports

- **IMPORTANTE**: Incluir la extensión del archivo en las importaciones (ej: `import App from './App.tsx';`)
- Agrupar imports por categorías: React, bibliotecas externas, componentes, hooks, utilidades
- Usar imports absolutos con alias para rutas internas
- Evitar imports circulares

### Exportaciones

- Usar archivos index.ts para re-exportar componentes públicos
- Mantener la API pública mínima y bien definida

## Estilos y CSS

### CSS Modules

- Usar CSS Modules para estilos encapsulados
- Nombrar archivos como ComponentName.module.css
- Usar nombres de clases descriptivos y específicos del componente
- Evitar selectores anidados profundos

### Variables CSS

- Definir variables CSS para colores, tamaños y otros valores reutilizables
- Soportar temas claro/oscuro mediante variables CSS

### Responsive design

- Asegurar que el componente se adapta a diferentes tamaños de pantalla
- Usar unidades relativas (em, rem) cuando sea apropiado

## Accesibilidad (A11y)

### Atributos ARIA

- Implementar atributos ARIA apropiados para todos los componentes interactivos
- Usar role="slider" para el componente principal
- Incluir aria-valuemin, aria-valuemax y aria-valuenow

### Navegación por teclado

- Asegurar que todos los componentes interactivos son navegables por teclado
- Implementar atajos de teclado intuitivos (flechas, números)
- Mantener un orden de tabulación lógico

### Contraste y legibilidad

- Asegurar suficiente contraste entre texto/iconos y fondo
- Proporcionar opciones para aumentar el contraste
- Soportar el aumento de tamaño de texto

## Testing

### Pruebas unitarias

- Escribir pruebas para cada componente y hook
- Usar Testing Library con enfoque en comportamiento, no implementación
- Cubrir todos los casos de uso principales

### Pruebas de integración

- Probar la interacción entre componentes
- Verificar el comportamiento con diferentes props y configuraciones

### Pruebas de accesibilidad

- Incluir pruebas específicas para características de accesibilidad
- Verificar la navegación por teclado
- Comprobar los atributos ARIA

## Documentación

### Comentarios de código

- Usar JSDoc para documentar funciones y componentes
- Explicar lógica compleja o no obvia
- Documentar decisiones de diseño importantes

### README y documentación

- Mantener el README actualizado con ejemplos de uso
- Documentar todas las props disponibles
- Incluir guías para casos de uso comunes

### Demo y ejemplos

- Crear ejemplos para todas las características principales
- Asegurar que los ejemplos son claros y educativos
- Incluir código de ejemplo copiable

## Flujo de trabajo de desarrollo

### Desarrollo local

- Usar `npm run dev` para desarrollo local
- Probar cambios en la demo antes de commit

### Control de calidad

- Ejecutar `npm run lint` y `npm run format` antes de commit
- Asegurar que todas las pruebas pasan con `npm run test`
- Verificar la build con `npm run build`

### Commits y PRs

- Usar mensajes de commit descriptivos siguiendo Conventional Commits
- Agrupar cambios relacionados en un solo commit
- Crear PRs pequeños y enfocados

## Rendimiento

### Optimización

- Minimizar re-renderizados con React.memo y hooks optimizados
- Evitar cálculos costosos en cada renderizado
- Usar lazy loading para componentes grandes cuando sea apropiado

### Bundle size

- Mantener el tamaño del bundle lo más pequeño posible
- Evitar dependencias innecesarias
- Usar tree-shaking efectivamente

### Monitoreo

- Usar herramientas como React DevTools para identificar problemas de rendimiento
- Medir y optimizar tiempos de renderizado

## Compatibilidad

### Navegadores

- Soportar los navegadores modernos (últimas 2 versiones)
- Proporcionar fallbacks para características no soportadas

### Versiones de React

- Soportar React 18+ como mínimo
- Documentar cualquier limitación con versiones específicas

### Dispositivos

- Asegurar funcionalidad en dispositivos táctiles
- Optimizar para diferentes tamaños de pantalla y densidades de píxeles

## Solución de problemas comunes

### Importaciones

- **Incluir la extensión de archivo en las importaciones**: En Vite con TypeScript, es necesario incluir la extensión del archivo en las importaciones para evitar errores de resolución de módulos. Por ejemplo, usar `import App from './App.tsx';` en lugar de `import App from './App';`.
