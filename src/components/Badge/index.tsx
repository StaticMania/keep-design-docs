import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { KeepColors, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepBadgeTheme {
  base: string
  href: string
  badgeType: {
    default: {
      colorType: {
        light: {
          color: BadgeColors
        }
        strong: {
          color: BadgeColors
        }
      }
    }
    outline: {
      colorType: {
        light: {
          color: BadgeColors
        }
        strong: {
          color: BadgeColors
        }
      }
    }
    text: {
      colorType: {
        light: {
          color: BadgeColors
        }
        strong: {
          color: BadgeColors
        }
      }
    }
  }
  icon: {
    off: string
    on: string
    size: BadgeSizes
  }
  size: BadgeSizes
  dot: string
  dotPosition: {
    left: string
    right: string
  }
}

/**
 * Props for the Badge component.
 */
export interface BadgeProps extends PropsWithChildren<Omit<ComponentProps<'span'>, 'className' | 'color'>> {
  /**
   * The color of the badge.
   */
  color?: keyof BadgeColors
  /**
   * The type of color for the badge.
   */
  colorType?: 'light' | 'strong'
  /**
   * The type of badge.
   */
  badgeType?: 'default' | 'outline' | 'text'
  /**
   * The URL to navigate to when the badge is clicked.
   */
  href?: string

  /**
   * The icon to display within the badge.
   */
  icon?: ReactNode
  /**
   * The position of the icon within the badge.
   */
  iconPosition?: 'left' | 'right'
  /**
   * Additional CSS class name for the badge.
   */
  className?: string
  /**
   * The size of the badge.
   */
  size?: keyof BadgeSizes
  /**
   * The content of the badge.
   */
  children?: ReactNode
  /**
   * Whether to display a dot on the badge.
   */
  dot?: boolean
  /**
   * The position of the dot within the badge.
   */
  dotPosition?: 'left' | 'right'
  /**
   * Custom CSS style for the dot.
   */
  dotStyle?: string
  /**
   * Custom CSS style for the icon.
   */
  iconStyle?: string
}

export interface BadgeColors extends Pick<KeepColors, 'error' | 'gray' | 'info' | 'success' | 'warning'> {
  [key: string]: string
}

export interface BadgeSizes extends Pick<KeepSizes, 'xs' | 'sm'> {
  [key: string]: string
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = 'info',
  colorType = 'strong',
  badgeType = 'default',
  href,
  icon: Icon,
  iconPosition = 'left',
  size = 'xs',
  dot = false,
  dotPosition = 'left',
  className,
  dotStyle,
  iconStyle,
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props)

  const theme = useTheme().theme.badge

  const Content = (): JSX.Element => (
    <span
      className={cn(
        theme.base,
        theme.badgeType[badgeType].colorType[colorType].color[color],
        theme.icon[Icon ? 'on' : 'off'],
        theme.size[size],
        className,
      )}
      data-testid="keep-badge"
      {...theirProps}>
      {Icon && iconPosition === 'left' && <span className={cn(iconStyle)}>{Icon}</span>}
      {dot && dotPosition === 'left' && <div className={cn(theme.dot, theme.dotPosition.left, dotStyle)}></div>}
      {children && <span>{children}</span>}
      {dot && dotPosition === 'right' && <div className={cn(theme.dot, theme.dotPosition.right, dotStyle)}></div>}
      {Icon && iconPosition === 'right' && <span className={cn(iconStyle)}>{Icon}</span>}
    </span>
  )

  return href ? (
    <a className={theme.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  )
}
