/**
 * Determines if the value is decimal
 * @param value Value to check
 * @returns true if the value has decimals
 */
export const isDecimal = (value: number): boolean => value % 1 !== 0;

/**
 * Determines if the cursor is in the first or second half of an element
 * @param event Mouse event
 * @returns true if the cursor is in the second half of the element
 */
export const isInSecondHalf = (event: React.MouseEvent<HTMLElement>): boolean => {
  const { currentTarget } = event;
  const rect = currentTarget.getBoundingClientRect();
  const position = event.clientX - rect.left;
  return position > rect.width / 2;
};

/**
 * Calculates the star value based on cursor position
 * @param event Mouse event
 * @param index Star index
 * @param isHalf Whether half stars are enabled
 * @returns Star value (index + 1 or index + 0.5)
 */
export const getStarValue = (
  event: React.MouseEvent<HTMLElement>,
  index: number,
  isHalf: boolean
): number => {
  if (!isHalf) return index + 1;

  return isInSecondHalf(event) ? index + 1 : index + 0.5;
};

/**
 * Gets the rating value from a pressed key
 * @param key Pressed key
 * @param currentValue Current value
 * @param count Total number of stars
 * @param isHalf Whether half stars are enabled
 * @returns New rating value
 */
export const getValueFromKey = (
  key: string,
  currentValue: number,
  count: number,
  isHalf: boolean
): number => {
  // If it's a number from 1 to 9
  if (/^[1-9]$/.test(key)) {
    const numericValue = parseInt(key, 10);
    if (numericValue <= count) {
      return numericValue;
    }
  }

  // Arrow keys for navigation
  switch (key) {
    case 'ArrowRight':
    case 'ArrowUp':
      return Math.min(count, currentValue + (isHalf ? 0.5 : 1));
    case 'ArrowLeft':
    case 'ArrowDown':
      return Math.max(0, currentValue - (isHalf ? 0.5 : 1));
    case 'Home':
      return 0;
    case 'End':
      return count;
    default:
      return currentValue;
  }
};
