'use client'
import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from 'react'

interface DismissProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

const Dismiss = forwardRef<HTMLButtonElement, DismissProps>(
  ({ children, onClick, ...props }: DismissProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <button {...props} onClick={onClick} ref={ref}>
        {children ?? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            className="opacity-50"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256">
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        )}
      </button>
    )
  },
)
Dismiss.displayName = 'Alert.Dismiss'
export { Dismiss }
