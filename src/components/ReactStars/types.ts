import { ReactNode } from "react";

/**
 * Props para el componente ReactStars
 */
export interface ReactStarsProps {
  /**
   * Número total de estrellas
   * @default 5
   */
  count?: number;

  /**
   * Valor inicial de calificación
   * @default 0
   */
  value?: number;

  /**
   * Habilitar medias estrellas
   * @default false
   */
  isHalf?: boolean;

  /**
   * Permitir cambiar la calificación
   * @default true
   */
  edit?: boolean;

  /**
   * Carácter a usar como estrella
   * @default "★"
   */
  char?: string;

  /**
   * Tamaño de las estrellas en píxeles
   * @default 24
   */
  size?: number;

  /**
   * Color de las estrellas inactivas
   * @default "#ddd"
   */
  color?: string;

  /**
   * Color de las estrellas activas
   * @default "#ffb400"
   */
  activeColor?: string;

  /**
   * Clase CSS personalizada
   */
  className?: string;

  /**
   * Icono para estrellas vacías
   */
  emptyIcon?: ReactNode;

  /**
   * Icono para medias estrellas
   */
  halfIcon?: ReactNode;

  /**
   * Icono para estrellas llenas
   */
  filledIcon?: ReactNode;

  /**
   * Habilitar características de accesibilidad
   * @default true
   */
  a11y?: boolean;

  /**
   * Función llamada al cambiar la calificación
   */
  onChange?: (rating: number) => void;
}

/**
 * Props para el componente Star
 */
export interface StarProps {
  /**
   * Índice de la estrella
   */
  index: number;

  /**
   * Si la estrella está activa (llena)
   */
  isActive: boolean;

  /**
   * Si la estrella está medio activa (media estrella)
   */
  isHalfActive: boolean;

  /**
   * Configuración del componente
   */
  config: {
    size: number;
    color: string;
    activeColor: string;
    char: string;
    isHalf: boolean;
    edit: boolean;
    emptyIcon: ReactNode | null;
    halfIcon: ReactNode | null;
    filledIcon: ReactNode | null;
    count: number;
  };

  /**
   * Función llamada al mover el ratón sobre la estrella
   */
  onMouseMove: (event: React.MouseEvent<HTMLSpanElement>) => void;

  /**
   * Función llamada al hacer clic en la estrella
   */
  onClick: (event: React.MouseEvent<HTMLSpanElement>) => void;

  /**
   * Función llamada al salir el ratón de la estrella
   */
  onMouseLeave: () => void;
}

/**
 * Props para el hook useRating
 */
export interface UseRatingProps {
  /**
   * Valor inicial de calificación
   */
  initialValue: number;

  /**
   * Número total de estrellas
   */
  count: number;

  /**
   * Habilitar medias estrellas
   */
  isHalf: boolean;

  /**
   * Función llamada al cambiar la calificación
   */
  onChange?: (rating: number) => void;
}
