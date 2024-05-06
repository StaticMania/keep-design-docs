'use client'
import { BaseHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const Sidebar = forwardRef<HTMLBaseElement, BaseHTMLAttributes<HTMLBaseElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <aside
        {...props}
        ref={ref}
        className={cn(
          'flex h-[calc(100vh-25vh)] w-[280px] flex-col justify-between rounded-xl border border-metal-100 bg-white p-5 shadow-xl',
          className,
        )}>
        {children}
      </aside>
    )
  },
)

Sidebar.displayName = 'Sidebar'

export { Sidebar }
