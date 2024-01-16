import { ReactNode, FC, Children, cloneElement, ReactElement } from 'react'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'

export interface ContainerProps {
  children?: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  const childrenWithProps = Children.map(children, (child) => cloneElement(child as ReactElement<any>, { ...props }))
  return <div className={cn(alertTheme.container.base, className)}>{childrenWithProps}</div>
}
