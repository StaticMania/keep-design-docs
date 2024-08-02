'use client'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { useState } from 'react'
import { Button, DatePicker, Popover, PopoverAction, PopoverContent } from '../../../../src'

const MultipleDatePicker = () => {
  const [date, setDate] = useState<Date>()
  return (
    <Popover showArrow={false} placement="bottom-start">
      <PopoverAction asChild>
        <Button className="w-[286px] justify-start gap-2" variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverAction>
      <PopoverContent className="z-50 max-w-min">
        <DatePicker numberOfMonths={2} mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}

const MultipleDatePickerCode = {
  'DatePickerComponent.tsx': `
'use client'
import { format } from 'date-fns'
import { useState } from 'react'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverContent, PopoverAction } from 'keep-react'

export const DatePickerComponent = () => {
  const [date, setDate] = useState(null)
  return (
    <Popover showArrow={false} placement="bottom-start">
      <PopoverAction asChild>
        <Button className="w-[286px] justify-start gap-2" variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverAction>
      <PopoverContent className="z-50 max-w-min">
        <DatePicker numberOfMonths={2} mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}
`,
}

export { MultipleDatePicker, MultipleDatePickerCode }
