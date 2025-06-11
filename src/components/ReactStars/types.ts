import { ReactNode } from 'react';

/**
 * Props for the ReactStars component
 */
export interface ReactStarsProps {
  /**
   * Total number of stars
   * @default 5
   */
  count?: number;

  /**
   * Initial rating value
   * @default 0
   */
  value?: number;

  /**
   * Enable half stars
   * @default false
   */
  isHalf?: boolean;

  /**
   * Allow changing the rating
   * @default true
   */
  edit?: boolean;

  /**
   * Character to use as star
   * @default "★"
   */
  char?: string;

  /**
   * Size of stars in pixels
   * @default 24
   */
  size?: number;

  /**
   * Color of inactive stars
   * @default "#ddd"
   */
  color?: string;

  /**
   * Color of active stars
   * @default "#ffb400"
   */
  activeColor?: string;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * Icon for empty stars
   */
  emptyIcon?: ReactNode;

  /**
   * Icon for half stars
   */
  halfIcon?: ReactNode;

  /**
   * Icon for filled stars
   */
  filledIcon?: ReactNode;

  /**
   * Enable accessibility features
   * @default true
   */
  a11y?: boolean;

  /**
   * Function called when rating changes
   */
  onChange?: (rating: number) => void;
}

/**
 * Props for the Star component
 */
export interface StarProps {
  /**
   * Index of the star
   */
  index: number;

  /**
   * Whether the star is active (filled)
   */
  isActive: boolean;

  /**
   * Whether the star is half active (half star)
   */
  isHalfActive: boolean;

  /**
   * Component configuration
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
   * Function called when mouse moves over the star
   */
  onMouseMove: (event: React.MouseEvent<HTMLSpanElement>) => void;

  /**
   * Function called when star is clicked
   */
  onClick: (event: React.MouseEvent<HTMLSpanElement>) => void;

  /**
   * Function called when mouse leaves the star
   */
  onMouseLeave: () => void;
}

/**
 * Props for the useRating hook
 */
export interface UseRatingProps {
  /**
   * Initial rating value
   */
  initialValue: number;

  /**
   * Total number of stars
   */
  count: number;

  /**
   * Enable half stars
   */
  isHalf: boolean;

  /**
   * Function called when rating changes
   */
  onChange?: (rating: number) => void;
}
