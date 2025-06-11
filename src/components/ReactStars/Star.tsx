import { memo, useMemo } from 'react';
import { StarProps } from './types';
import styles from './ReactStars.module.css';

/**
 * Component to render an individual star
 */
const Star = ({
  index,
  isActive,
  isHalfActive,
  config,
  onMouseMove,
  onClick,
  onMouseLeave,
}: StarProps) => {
  const { size, color, activeColor, char, isHalf, edit, emptyIcon, halfIcon, filledIcon } = config;

  // Determine if we are using custom icons
  const isUsingIcons = useMemo(
    () => Boolean(emptyIcon && filledIcon && (!isHalf || halfIcon)),
    [emptyIcon, filledIcon, halfIcon, isHalf]
  );

  // Determine which CSS class to apply
  const starClass = useMemo(() => {
    const classes = [styles.starContainer];

    if (!edit) {
      classes.push(styles.readonly);
    }

    if (isHalf && isHalfActive) {
      classes.push(styles.halfStar);
    }

    return classes.join(' ');
  }, [edit, isHalf, isHalfActive]);

  // Determine the star color
  const starColor = useMemo(() => (isActive ? activeColor : color), [isActive, activeColor, color]);

  // Determine the color for the half star
  const halfStarColor = useMemo(
    () => (isHalfActive ? activeColor : color),
    [isHalfActive, activeColor, color]
  );

  // Accessibility text
  const ariaLabel = useMemo(() => {
    if (isActive) {
      return `${index + 1} star${index !== 0 ? 's' : ''} out of ${config.count}`;
    }
    return `Rate with ${index + 1} star${index !== 0 ? 's' : ''}`;
  }, [isActive, index, config.count]);

  // Render SVG or custom icons
  const renderStarContent = () => {
    // If we are using custom icons, use them directly
    if (isUsingIcons) {
      if (isActive) {
        return filledIcon;
      }
      if (isHalfActive) {
        return halfIcon;
      }
      return emptyIcon;
    }

    // Otherwise, use SVG for stars
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="none"
        className={styles.starSvg}
      >
        {/* Base star (always visible) */}
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill={starColor}
        />

        {/* Clip path for half star */}
        {isHalf && isHalfActive && (
          <defs>
            <clipPath id={`halfStarClip-${index}`}>
              <rect x="0" y="0" width="12" height="24" />
            </clipPath>
          </defs>
        )}

        {/* Half star (if applicable) */}
        {isHalf && isHalfActive && (
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={activeColor}
            clipPath={`url(#halfStarClip-${index})`}
          />
        )}
      </svg>
    );
  };

  return (
    <span
      className={starClass}
      style={{
        fontSize: `${size}px`,
        color: starColor,
      }}
      data-index={index}
      data-testid={`star-${index}`}
      onMouseMove={edit ? onMouseMove : undefined}
      onClick={edit ? onClick : undefined}
      onMouseLeave={edit ? onMouseLeave : undefined}
      role="button"
      tabIndex={edit ? 0 : -1}
      aria-label={ariaLabel}
    >
      {renderStarContent()}
    </span>
  );
};

// Memoize the component to avoid unnecessary re-renders
export default memo(Star);
