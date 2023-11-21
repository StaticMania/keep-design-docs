import { Calendar } from 'phosphor-react'
import { forwardRef } from 'react'
import { useDatePickerContext } from './DatePickerContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the CustomInput component.
 * @interface CustomInputProps
 */
export interface CustomInputProps {
  /**
   * The value of the input.
   */
  value?: string
  /**
   * Callback function to handle click event.
   */
  onClick?: () => void
  /**
   * The placeholder text for the input.
   */
  placeholder?: string
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ value, onClick }, ref) => {
  const { className, icon, iconStyle, placeholder } = useDatePickerContext()
  return (
    <>
      <input
        ref={ref}
        placeholder={placeholder ? placeholder : 'Date / Month / Year'}
        value={value}
        readOnly
        onClick={onClick}
        className={cn(
          'relative w-full rounded-md border border-metal-200 px-4 py-3 placeholder:text-body-4 placeholder:font-normal placeholder:text-metal-300 focus-within:border-metal-300 focus:outline-none',
          className,
        )}
      />
      <span
        className={cn(
          'pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 border-l border-l-metal-200 pl-1',
          iconStyle,
        )}>
        {icon ? icon : <Calendar size={24} color="#5E718D" />}
      </span>
    </>
  )
})

CustomInput.displayName = 'CustomInput'

export default CustomInput
