import { Children, FC, ReactElement, ReactNode, cloneElement } from 'react'
import { Container } from './Container'
import { Description } from './Description'
import { Title } from './Title'
import { Dismiss } from './Dismiss'
import { Link } from './Link'
import { Icon } from './Icon'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'
import { Body } from './Body'

interface AlertProps {
  children?: ReactNode
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  className?: string
  withBg?: boolean
  dismiss?: boolean
  [key: string]: any
}

export const AlertComponent: FC<AlertProps> = ({ children, color = 'primary', withBg, dismiss, className }) => {
  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child as ReactElement<any>, { color: color }),
  )
  return (
    <div
      className={cn(
        alertTheme.root.base,
        withBg ? alertTheme.colorWithBg[color] : alertTheme.colorWithOutBg[color],
        dismiss ? 'hidden' : 'flex',
        className,
      )}>
      {childrenWithProps}
    </div>
  )
}

Container.displayName = 'Alert.Container'
Description.displayName = 'Alert.Description'
Title.displayName = 'Alert.Title'
Dismiss.displayName = 'Alert.Dismiss'
Link.displayName = 'Alert.Link'
Icon.displayName = 'Alert.Icon'
Body.displayName = 'Alert.Body'

export const Alert = Object.assign(AlertComponent, {
  Container,
  Description,
  Title,
  Dismiss,
  Link,
  Icon,
  Body,
})
