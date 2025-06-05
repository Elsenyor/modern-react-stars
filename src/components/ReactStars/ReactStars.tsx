import { useId, useMemo } from "react";
import { ReactStarsProps } from "./types";
import { useRating } from "@hooks/useRating";
import Star from "./Star";
import styles from "./ReactStars.module.css";

/**
 * Componente de calificación con estrellas para React
 */
const ReactStars = ({
  count = 5,
  value = 0,
  isHalf = false,
  edit = true,
  char = "★",
  size = 24,
  color = "#ddd",
  activeColor = "#ffb400",
  className = "",
  emptyIcon = null,
  halfIcon = null,
  filledIcon = null,
  a11y = true,
  onChange,
}: ReactStarsProps) => {
  // Generamos un ID único para este componente
  const id = useId();

  // Configuramos el hook de calificación
  const {
    rating,
    starsState,
    handleMouseMove,
    handleMouseLeave,
    handleClick,
    handleKeyDown,
  } = useRating({
    initialValue: value,
    count,
    isHalf,
    onChange,
  });

  // Configuración para el componente Star
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
    [
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
    ],
  );

  // Clases CSS para el contenedor
  const containerClass = useMemo(
    () => `${styles.container} ${className}`.trim(),
    [className],
  );

  // Clases CSS para el contenedor de estrellas
  const starsContainerClass = useMemo(
    () => `${styles.starsContainer} ${edit ? "" : styles.readonly}`.trim(),
    [edit],
  );

  return (
    <div
      className={containerClass}
      onMouseLeave={edit ? handleMouseLeave : undefined}
    >
      <div
        id={`react-stars-${id}`}
        className={starsContainerClass}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={count}
        aria-valuenow={rating}
        aria-label={`Valoración: ${rating} de ${count} estrellas`}
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

        {/* Texto para lectores de pantalla */}
        <span className={styles.srOnly} aria-live="polite">
          Valoración actual: {rating} de {count} estrellas
        </span>
      </div>
    </div>
  );
};

export default ReactStars;
