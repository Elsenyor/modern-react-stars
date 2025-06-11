import { useId, useMemo } from 'react';
import { ReactStarsProps } from './types';
import { useRating } from '@hooks/useRating';
import Star from './Star';
import styles from './ReactStars.module.css';

/**
 * Star rating component for React
 */
const ReactStars = ({
  count = 5,
  value = 0,
  isHalf = false,
  edit = true,
  char = '★',
  size = 24,
  color = '#ddd',
  activeColor = '#ffb400',
  className = '',
  emptyIcon = null,
  halfIcon = null,
  filledIcon = null,
  a11y = true,
  onChange,
}: ReactStarsProps) => {
  // Generate a unique ID for this component
  const id = useId();

  // Set up the rating hook
  const { rating, starsState, handleMouseMove, handleMouseLeave, handleClick, handleKeyDown } =
    useRating({
      initialValue: value,
      count,
      isHalf,
      onChange,
    });

  // Configuration for the Star component
  const starConfig = useMemo(
    () => ({
      size,
      color,
      activeColor,
      char,
      isHalf,
      edit,
      emptyIcon,
      halfIcon,
      filledIcon,
      count,
    }),
    [size, color, activeColor, char, isHalf, edit, emptyIcon, halfIcon, filledIcon, count]
  );

  // CSS classes for the container
  const containerClass = useMemo(() => `${styles.container} ${className}`.trim(), [className]);

  // CSS classes for the stars container
  const starsContainerClass = useMemo(
    () => `${styles.starsContainer} ${edit ? '' : styles.readonly}`.trim(),
    [edit]
  );

  return (
    <div className={containerClass} onMouseLeave={edit ? handleMouseLeave : undefined}>
      <div
        id={`react-stars-${id}`}
        className={starsContainerClass}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={count}
        aria-valuenow={rating}
        aria-label={`Rating: ${rating} out of ${count} stars`}
        tabIndex={edit && a11y ? 0 : -1}
        onKeyDown={edit && a11y ? handleKeyDown : undefined}
        data-testid="react-stars-container"
      >
        {starsState.map((star) => (
          <Star
            key={star.index}
            index={star.index}
            isActive={star.isActive}
            isHalfActive={star.isHalfActive}
            config={starConfig}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
          />
        ))}

        {/* Text for screen readers */}
        <span className={styles.srOnly} aria-live="polite">
          Current rating: {rating} out of {count} stars
        </span>
      </div>
    </div>
  );
};

export default ReactStars;
