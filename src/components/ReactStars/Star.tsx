import { memo, useMemo } from "react";
import { StarProps } from "./types";
import styles from "./ReactStars.module.css";

/**
 * Componente para renderizar una estrella individual
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
  const {
    size,
    color,
    activeColor,
    char,
    isHalf,
    edit,
    emptyIcon,
    halfIcon,
    filledIcon,
  } = config;

  // Determinar si estamos usando iconos personalizados
  const isUsingIcons = useMemo(
    () => Boolean(emptyIcon && filledIcon && (!isHalf || halfIcon)),
    [emptyIcon, filledIcon, halfIcon, isHalf],
  );

  // Determinar qué clase CSS aplicar
  const starClass = useMemo(() => {
    const classes = [styles.starContainer];

    if (!edit) {
      classes.push(styles.readonly);
    }

    if (isHalf && isHalfActive) {
      classes.push(isUsingIcons ? styles.halfCustomIcon : styles.halfStar);
    }

    return classes.join(" ");
  }, [edit, isHalf, isHalfActive, isUsingIcons]);

  // Determinar el color de la estrella
  const starColor = useMemo(
    () => (isActive || isHalfActive ? activeColor : color),
    [isActive, isHalfActive, activeColor, color],
  );

  // Determinar el icono a mostrar
  const renderIcon = useMemo(() => {
    if (!isUsingIcons) {
      return char;
    }

    if (isActive) {
      return filledIcon;
    }

    if (isHalfActive) {
      return halfIcon;
    }

    return emptyIcon;
  }, [
    isUsingIcons,
    isActive,
    isHalfActive,
    char,
    filledIcon,
    halfIcon,
    emptyIcon,
  ]);

  // Texto para accesibilidad
  const ariaLabel = useMemo(() => {
    if (isActive) {
      return `${index + 1} estrella${index !== 0 ? "s" : ""} de ${config.count}`;
    }
    return `Valorar con ${index + 1} estrella${index !== 0 ? "s" : ""}`;
  }, [isActive, index, config.count]);

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
      <span className={isUsingIcons ? styles.customIconWrapper : undefined}>
        {renderIcon}
      </span>
    </span>
  );
};

// Memoizamos el componente para evitar re-renderizados innecesarios
export default memo(Star);
