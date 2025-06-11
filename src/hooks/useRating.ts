import { useState, useCallback, useMemo } from 'react';
import { UseRatingProps } from '@components/ReactStars/types';
import { isDecimal, getStarValue, getValueFromKey } from '@utils/starUtils';

/**
 * Custom hook to handle star rating logic
 */
export const useRating = ({
  initialValue = 0,
  count = 5,
  isHalf = false,
  onChange,
}: UseRatingProps) => {
  // State for current rating value
  const [rating, setRating] = useState<number>(initialValue);

  // State for hover rating
  const [hoverRating, setHoverRating] = useState<number>(0);

  // Effective value (hover or rating)
  const effectiveValue = useMemo(() => hoverRating || rating, [hoverRating, rating]);

  /**
   * Updates the rating value and calls the onChange callback
   */
  const updateRating = useCallback(
    (newRating: number) => {
      setRating(newRating);
      onChange?.(newRating);
    },
    [onChange]
  );

  /**
   * Calculates the state of each star (active, half active)
   */
  const getStarsState = useCallback(() => {
    return Array.from({ length: count }, (_, index) => {
      const starIndex = index + 1;
      const isActive = starIndex <= Math.floor(effectiveValue);
      const isHalfActive =
        isHalf && Math.ceil(effectiveValue) === starIndex && isDecimal(effectiveValue);

      return {
        index,
        isActive,
        isHalfActive,
      };
    });
  }, [count, effectiveValue, isHalf]);

  /**
   * Handles mouse movement over a star
   */
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      const index = Number(event.currentTarget.getAttribute('data-index'));
      const value = getStarValue(event, index, isHalf);
      setHoverRating(value);
    },
    [isHalf]
  );

  /**
   * Handles mouse leave from the component
   */
  const handleMouseLeave = useCallback(() => {
    setHoverRating(0);
  }, []);

  /**
   * Handles click on a star
   */
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      const index = Number(event.currentTarget.getAttribute('data-index'));
      const value = getStarValue(event, index, isHalf);
      updateRating(value);
    },
    [isHalf, updateRating]
  );

  /**
   * Handles keyboard navigation
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
    [count, isHalf, rating, updateRating]
  );

  // Calculate stars state
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
