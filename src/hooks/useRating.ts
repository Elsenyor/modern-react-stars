import { useState, useCallback, useMemo } from "react";
import { UseRatingProps } from "@components/ReactStars/types";
import { isDecimal, getStarValue, getValueFromKey } from "@utils/starUtils";

/**
 * Hook personalizado para manejar la lógica de calificación con estrellas
 */
export const useRating = ({
  initialValue = 0,
  count = 5,
  isHalf = false,
  onChange,
}: UseRatingProps) => {
  // Estado para el valor actual de calificación
  const [rating, setRating] = useState<number>(initialValue);

  // Estado para el valor al pasar el ratón
  const [hoverRating, setHoverRating] = useState<number>(0);

  // Valor efectivo (hover o rating)
  const effectiveValue = useMemo(
    () => hoverRating || rating,
    [hoverRating, rating],
  );

  /**
   * Actualiza el valor de calificación y llama al callback onChange
   */
  const updateRating = useCallback(
    (newRating: number) => {
      setRating(newRating);
      onChange?.(newRating);
    },
    [onChange],
  );

  /**
   * Calcula el estado de cada estrella (activa, media activa)
   */
  const getStarsState = useCallback(() => {
    return Array.from({ length: count }, (_, index) => {
      const starIndex = index + 1;
      const isActive = starIndex <= Math.floor(effectiveValue);
      const isHalfActive =
        isHalf &&
        Math.ceil(effectiveValue) === starIndex &&
        isDecimal(effectiveValue);

      return {
        index,
        isActive,
        isHalfActive,
      };
    });
  }, [count, effectiveValue, isHalf]);

  /**
   * Maneja el movimiento del ratón sobre una estrella
   */
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      const index = Number(event.currentTarget.getAttribute("data-index"));
      const value = getStarValue(event, index, isHalf);
      setHoverRating(value);
    },
    [isHalf],
  );

  /**
   * Maneja la salida del ratón del componente
   */
  const handleMouseLeave = useCallback(() => {
    setHoverRating(0);
  }, []);

  /**
   * Maneja el clic en una estrella
   */
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      const index = Number(event.currentTarget.getAttribute("data-index"));
      const value = getStarValue(event, index, isHalf);
      updateRating(value);
    },
    [isHalf, updateRating],
  );

  /**
   * Maneja la navegación por teclado
   */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const { key } = event;
      const newValue = getValueFromKey(key, rating, count, isHalf);

      if (newValue !== rating) {
        event.preventDefault();
        updateRating(newValue);
      }
    },
    [count, isHalf, rating, updateRating],
  );

  // Calculamos el estado de las estrellas
  const starsState = useMemo(() => getStarsState(), [getStarsState]);

  return {
    rating,
    hoverRating,
    starsState,
    handleMouseMove,
    handleMouseLeave,
    handleClick,
    handleKeyDown,
  };
};
