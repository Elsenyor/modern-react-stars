# React Stars Modern

A modern star rating component for React, with support for half stars and custom icons.

## Features

- ⭐ Support for full and half stars
- 🎨 Fully customizable (colors, sizes, icons)
- 🔄 Interactive or read-only mode
- ♿ Accessibility (a11y) with full keyboard support
- 🚀 Optimized performance with React 18+
- 📦 Lightweight with no external dependencies
- 🌐 Consistent display across all browsers using SVG

## Installation

```bash
npm install react-stars-modern
# or
yarn add react-stars-modern
```

## Basic Usage

```jsx
import ReactStars from 'react-stars-modern';

function App() {
  const handleRatingChange = (newRating) => {
    console.log(`New rating: ${newRating}`);
  };

  return <ReactStars count={5} value={3.5} isHalf={true} onChange={handleRatingChange} size={24} />;
}
```

## Usage with Custom Icons

### FontAwesome Icons

```jsx
import ReactStars from 'react-stars-modern';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

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

### Custom SVG Icons

```jsx
import ReactStars from 'react-stars-modern';
import { ReactComponent as EmptyStar } from './icons/empty-star.svg';
import { ReactComponent as HalfStar } from './icons/half-star.svg';
import { ReactComponent as FilledStar } from './icons/filled-star.svg';

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

## How the Half Star System Works

The component uses a modern approach to handle half stars:

1. **Position Detection**: When `isHalf` is enabled, the component detects whether the cursor is in the first or second half of each star.

2. **Smart Rendering**:

   - **With custom icons**:
     - For full stars, the `filledIcon` is displayed
     - For half stars, the `halfIcon` is displayed
     - For empty stars, the `emptyIcon` is displayed
   - **Without custom icons**:
     - SVG is used to render the stars
     - For half stars, a clipPath is applied to show only half of the star in the active color

3. **Precise Calculation**: The rating value is calculated with decimal precision (e.g., 3.5) based on the exact cursor position or keyboard interaction.

4. **Performance Optimization**: The logic uses custom hooks and memoization to avoid unnecessary calculations and renders.

5. **Cross-browser Compatibility**: The use of SVG ensures consistent display of half stars across all browsers.

## SVG Implementation

The component uses SVG to render stars when no custom icons are provided:

- **Full stars**: An SVG star shape is rendered in the active color.
- **Half stars**: A `clipPath` is used to show only the left half of the star in the active color.
- **Empty stars**: An SVG star shape is rendered in the inactive color.

This SVG implementation offers several advantages:

- Consistent display across all browsers
- Scalability without quality loss
- Precision in half star representation
- No dependency on browser-specific CSS techniques

## API

| Property      | Description                         | Type                       | Default Value |
| ------------- | ----------------------------------- | -------------------------- | ------------- |
| `count`       | Total number of stars               | `number`                   | `5`           |
| `value`       | Initial rating value                | `number`                   | `0`           |
| `isHalf`      | Enable half stars                   | `boolean`                  | `false`       |
| `edit`        | Allow changing the rating           | `boolean`                  | `true`        |
| `emptyIcon`   | Icon for empty stars                | `ReactNode`                | `null`        |
| `halfIcon`    | Icon for half stars                 | `ReactNode`                | `null`        |
| `filledIcon`  | Icon for filled stars               | `ReactNode`                | `null`        |
| `size`        | Size of stars in pixels             | `number`                   | `24`          |
| `color`       | Color of inactive stars             | `string`                   | `"#ddd"`      |
| `activeColor` | Color of active stars               | `string`                   | `"#ffb400"`   |
| `className`   | Custom CSS class                    | `string`                   | `""`          |
| `onChange`    | Function called when rating changes | `(rating: number) => void` | `undefined`   |
| `a11y`        | Enable accessibility features       | `boolean`                  | `true`        |

## Accessibility

The component implements the following accessibility features:

- Appropriate ARIA attributes (`role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`)
- Complete keyboard navigation (left/right arrows, numbers)
- Descriptive labels for screen readers
- Configurable color contrast

## Local Development

1. Clone the repository

```bash
git clone https://github.com/username/react-stars-modern.git
cd react-stars-modern
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## License

MIT
