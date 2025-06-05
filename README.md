# React Stars Modern

Un componente moderno de calificación con estrellas para React, con soporte para medias estrellas e iconos personalizados.

## Características

- ⭐ Soporte para estrellas completas y medias estrellas
- 🎨 Totalmente personalizable (colores, tamaños, iconos)
- 🔄 Modo interactivo o de solo lectura
- ♿ Accesibilidad (a11y) con soporte completo para teclado
- 🚀 Rendimiento optimizado con React 18+
- 📦 Liviano y sin dependencias externas

## Instalación

```bash
npm install react-stars-modern
# o
yarn add react-stars-modern
```

## Uso básico

```jsx
import ReactStars from "react-stars-modern";

function App() {
  const handleRatingChange = (newRating) => {
    console.log(`Nueva calificación: ${newRating}`);
  };

  return (
    <ReactStars
      count={5}
      value={3.5}
      isHalf={true}
      onChange={handleRatingChange}
      size={24}
    />
  );
}
```

## Uso con iconos personalizados

### Iconos de FontAwesome

```jsx
import ReactStars from "react-stars-modern";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function App() {
  return (
    <ReactStars
      count={5}
      value={3.5}
      isHalf={true}
      emptyIcon={<FaRegStar />}
      halfIcon={<FaStarHalfAlt />}
      filledIcon={<FaStar />}
      onChange={(newRating) => console.log(newRating)}
      size={32}
    />
  );
}
```

### Iconos personalizados SVG

```jsx
import ReactStars from "react-stars-modern";
import { ReactComponent as EmptyStar } from "./icons/empty-star.svg";
import { ReactComponent as HalfStar } from "./icons/half-star.svg";
import { ReactComponent as FilledStar } from "./icons/filled-star.svg";

function App() {
  return (
    <ReactStars
      count={5}
      value={3.5}
      isHalf={true}
      emptyIcon={<EmptyStar />}
      halfIcon={<HalfStar />}
      filledIcon={<FilledStar />}
      onChange={(newRating) => console.log(newRating)}
      size={32}
    />
  );
}
```

## Cómo funciona el sistema de medias estrellas

El componente utiliza un enfoque moderno para gestionar las medias estrellas:

1. **Detección de posición**: Cuando `isHalf` está activado, el componente detecta si el cursor está en la primera o segunda mitad de cada estrella.

2. **Renderizado inteligente**:

   - Para estrellas completas, se muestra el icono `filledIcon`
   - Para medias estrellas, se muestra el icono `halfIcon`
   - Para estrellas vacías, se muestra el icono `emptyIcon`

3. **Cálculo preciso**: El valor de calificación se calcula con precisión decimal (por ejemplo, 3.5) basado en la posición exacta del cursor o la interacción del teclado.

4. **Optimización de rendimiento**: La lógica utiliza hooks personalizados y memoización para evitar cálculos y renderizados innecesarios.

## API

| Propiedad     | Descripción                                | Tipo                       | Valor predeterminado |
| ------------- | ------------------------------------------ | -------------------------- | -------------------- |
| `count`       | Número total de estrellas                  | `number`                   | `5`                  |
| `value`       | Valor inicial de calificación              | `number`                   | `0`                  |
| `isHalf`      | Habilitar medias estrellas                 | `boolean`                  | `false`              |
| `edit`        | Permitir cambiar la calificación           | `boolean`                  | `true`               |
| `emptyIcon`   | Icono para estrellas vacías                | `ReactNode`                | `null`               |
| `halfIcon`    | Icono para medias estrellas                | `ReactNode`                | `null`               |
| `filledIcon`  | Icono para estrellas llenas                | `ReactNode`                | `null`               |
| `size`        | Tamaño de las estrellas (px)               | `number`                   | `24`                 |
| `color`       | Color de estrellas inactivas               | `string`                   | `"#ddd"`             |
| `activeColor` | Color de estrellas activas                 | `string`                   | `"#ffb400"`          |
| `className`   | Clase CSS personalizada                    | `string`                   | `""`                 |
| `onChange`    | Función llamada al cambiar la calificación | `(rating: number) => void` | `undefined`          |
| `a11y`        | Habilitar características de accesibilidad | `boolean`                  | `true`               |

## Accesibilidad

El componente implementa las siguientes características de accesibilidad:

- Atributos ARIA apropiados (`role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`)
- Navegación completa por teclado (flechas izquierda/derecha, números)
- Etiquetas descriptivas para lectores de pantalla
- Contraste de color configurable

## Desarrollo local

1. Clonar el repositorio

```bash
git clone https://github.com/usuario/react-stars-modern.git
cd react-stars-modern
```

2. Instalar dependencias

```bash
npm install
```

3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

4. Construir para producción

```bash
npm run build
```

## Licencia

MIT
