/**
 * Determina si el valor es decimal
 * @param value Valor a comprobar
 * @returns true si el valor tiene decimales
 */
export const isDecimal = (value: number): boolean => value % 1 !== 0;

/**
 * Determina si el cursor está en la primera o segunda mitad de un elemento
 * @param event Evento del ratón
 * @returns true si el cursor está en la segunda mitad del elemento
 */
export const isInSecondHalf = (
  event: React.MouseEvent<HTMLElement>,
): boolean => {
  const { currentTarget } = event;
  const rect = currentTarget.getBoundingClientRect();
  const position = event.clientX - rect.left;
  return position > rect.width / 2;
};

/**
 * Calcula el valor de la estrella basado en la posición del cursor
 * @param event Evento del ratón
 * @param index Índice de la estrella
 * @param isHalf Si se permiten medias estrellas
 * @returns Valor de la estrella (index + 1 o index + 0.5)
 */
export const getStarValue = (
  event: React.MouseEvent<HTMLElement>,
  index: number,
  isHalf: boolean,
): number => {
  if (!isHalf) return index + 1;

  return isInSecondHalf(event) ? index + 1 : index + 0.5;
};

/**
 * Obtiene el valor de calificación a partir de una tecla presionada
 * @param key Tecla presionada
 * @param currentValue Valor actual
 * @param count Número total de estrellas
 * @param isHalf Si se permiten medias estrellas
 * @returns Nuevo valor de calificación
 */
export const getValueFromKey = (
  key: string,
  currentValue: number,
  count: number,
  isHalf: boolean,
): number => {
  // Si es un número del 1 al 9
  if (/^[1-9]$/.test(key)) {
    const numericValue = parseInt(key, 10);
    if (numericValue <= count) {
      return numericValue;
    }
  }

  // Flechas para navegar
  switch (key) {
    case "ArrowRight":
    case "ArrowUp":
      return Math.min(count, currentValue + (isHalf ? 0.5 : 1));
    case "ArrowLeft":
    case "ArrowDown":
      return Math.max(0, currentValue - (isHalf ? 0.5 : 1));
    case "Home":
      return 0;
    case "End":
      return count;
    default:
      return currentValue;
  }
};
