import { ComponentProps, forwardRef, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { KeepBoolean, KeepButtonVariant, KeepColors, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import type { PositionInButtonGroup } from './ButtonGroup'
import { ButtonGroup } from './ButtonGroup'
import { cn } from '../../helpers/cn'

export interface keepButtonTheme {
  base: string
  disabled: string
  width: {
    half: string
    full: string
  }
  inner: {
    base: string
    position: PositionInButtonGroup
  }
  notificationLabel: string
  default: {
    color: ButtonColors
    transition: KeepBoolean
  }
  primary: {
    color: ButtonColors
    transition: KeepBoolean
  }
  outlineGray: {
    color: ButtonColors
    transition: KeepBoolean
  }
  outlinePrimary: {
    color: ButtonColors

    transition: KeepBoolean
  }
  dashed: {
    color: ButtonColors
    transition: KeepBoolean
  }
  text: {
    color: ButtonColors
    transition: KeepBoolean
  }
  linkPrimary: {
    color: ButtonColors
    transition: KeepBoolean
  }
  linkGray: {
    color: ButtonColors
    transition: KeepBoolean
  }
  pill: KeepBoolean
  circle: {
    off: string
    size: ButtonSizes
  }
  size: ButtonSizes
}

/**
 * Props for the Button component.
 * @interface ButtonProps
 * @extends {Omit<ComponentProps<'button'>, 'className' | 'color' | 'type'>}
 */

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'className' | 'color' | 'type'> {
  /**
   * The URL to navigate to when the button is clicked (if provided).
   * @type {string}
   */
  href?: string

  /**
   * The color variant of the button.
   * @type {keyof ButtonColors}
   * @default 'info'
   */
  color?: keyof ButtonColors

  /**
   * The type of the button.
   * @type {keyof ButtonTypes}
   * @default 'default'
   */

  type?: 'reset' | 'submit' | 'button'
  /**
   * The type of the button.
   * @type {keyof ButtonTypes}
   * @default 'default'
   */
  variant?: keyof ButtonVariant
  /**
   * The label for the notification badge displayed on the button.
   * @type {string}
   */
  notificationLabel?: string

  /**
   * The CSS style for the notification label.
   * @type {string}
   * @default 'bg-red-500 text-white'
   */
  notificationLabelStyle?: string

  /**
   * Whether the button should be rendered as a pill shape.
   * @type {boolean}
   * @default false
   */
  pill?: boolean

  /**
   * Whether the button should be rendered as a circle shape.
   * @type {boolean}
   * @default false
   */
  circle?: boolean

  /**
   * The position of the button within a group of buttons.
   * @type {keyof PositionInButtonGroup}
   * @default 'none'
   */
  positionInGroup?: keyof PositionInButtonGroup

  /**
   * The content of the button.
   * @type {ReactNode}
   */
  children?: ReactNode

  /**
   * The size variant of the button.
   * @type {keyof ButtonSizes}
   * @default 'md'
   */
  size?: keyof ButtonSizes

  /**
   * The width of the button.
   * @type {'full' | 'half'}
   */
  width?: 'full' | 'half'

  /**
   * Additional CSS class name(s) for the button.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The callback function to be executed when the button is clicked.
   * @type {() => void}
   */
  onClick?: () => void
}

export interface ButtonVariant
  extends Pick<
    KeepButtonVariant,
    'primary' | 'dashed' | 'text' | 'linkPrimary' | 'linkGray' | 'outlineGray' | 'outlinePrimary' | 'default'
  > {
  [key: string]: string
}

export interface ButtonColors extends Pick<KeepColors, 'error' | 'info' | 'success' | 'warning'> {
  [key: string]: string
}
export interface ButtonSizes extends Pick<KeepSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'> {
  [key: string]: string
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      color = 'info',
      disabled = false,
      type = 'button',
      variant = 'primary',
      href,
      notificationLabel,
      pill = false,
      circle = false,
      positionInGroup = 'none',
      size = 'md',
      width,
      className,
      notificationLabelStyle,
      ...props
    },
    ref,
  ) => {
    const isLink = typeof href !== 'undefined'
    const theirProps = excludeClassName(props)
    const { buttonGroup: groupTheme, button: theme } = useTheme().theme
    const Component = isLink ? 'a' : 'button'
    return (
      <Component
        className={cn(
          theme.base,
          disabled && theme.disabled,
          width && theme.width[width],
          groupTheme.position[positionInGroup],
          !circle && theme.pill[pill ? 'on' : 'off'],
          circle && theme.circle.size[size],
          variant === 'default' && theme.default.color[color],
          variant === 'primary' && theme.primary.color[color],
          variant === 'outlineGray' && theme.outlineGray.color[color],
          variant === 'outlinePrimary' && theme.outlinePrimary.color[color],
          variant === 'dashed' && theme.dashed.color[color],
          variant === 'text' && theme.text.color[color],
          variant === 'linkPrimary' && theme.linkPrimary.color[color],
          variant === 'linkGray' && theme.linkGray.color[color],
          className,
        )}
        disabled={disabled}
        href={href}
        type={isLink ? undefined : type}
        onClick={onClick}
        {...theirProps}>
        <span
          ref={ref}
          className={cn(
            theme.inner.base,
            !circle && theme.size[size],
            theme.inner.position[positionInGroup],
            theme.default.transition[variant === 'default' ? 'on' : 'off'],
            theme.primary.transition[variant === 'primary' ? 'on' : 'off'],
            theme.outlineGray.transition[variant === 'outlineGray' ? 'on' : 'off'],
            theme.outlinePrimary.transition[variant === 'outlinePrimary' ? 'on' : 'off'],
            theme.dashed.transition[variant === 'dashed' ? 'on' : 'off'],
            theme.text.transition[variant === 'text' ? 'on' : 'off'],
            theme.linkPrimary.transition[variant === 'linkPrimary' ? 'on' : 'off'],
            theme.linkGray.transition[variant === 'linkGray' ? 'on' : 'off'],
          )}>
          <>
            {typeof children !== 'undefined' && children}
            {typeof notificationLabel !== 'undefined' && (
              <span className={cn(theme.notificationLabel, notificationLabelStyle)} data-testid="keep-button-label">
                {notificationLabel}
              </span>
            )}
          </>
        </span>
      </Component>
    )
  },
)

ButtonComponent.displayName = 'Button'
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
})
