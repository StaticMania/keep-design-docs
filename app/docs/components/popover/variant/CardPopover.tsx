'use client'
import Image from 'next/image'
import { CaretDown, CaretLeft, CaretRight, CaretUp } from 'phosphor-react'
import { Button, Popover, PopoverAction, PopoverContent, PopoverDescription, PopoverHeading } from '../../../../src'

const CardPopover = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5 p-5">
      <Popover placement="left">
        <PopoverAction>
          <CaretLeft size={20} />
        </PopoverAction>
        <PopoverContent className="z-20 max-w-[300px] rounded-xl bg-white shadow-md dark:bg-metal-900">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-2 p-6">
            <PopoverHeading>Keep Design System</PopoverHeading>
            <PopoverDescription>
              You can customize the styles and behavior of this component according to your requirements.
            </PopoverDescription>
            <Button>Learn More</Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="right">
        <PopoverAction>
          <CaretRight size={20} />
        </PopoverAction>
        <PopoverContent className="z-20 max-w-[300px] rounded-xl bg-white shadow-md dark:bg-metal-900">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-2 p-6">
            <PopoverHeading>Keep Design System</PopoverHeading>
            <PopoverDescription>
              You can customize the styles and behavior of this component according to your requirements.
            </PopoverDescription>
            <Button>Learn More</Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="top">
        <PopoverAction>
          <CaretUp size={20} />
        </PopoverAction>
        <PopoverContent className="z-20 max-w-[300px] rounded-xl bg-white shadow-md dark:bg-metal-900">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-2 p-6">
            <PopoverHeading>Keep Design System</PopoverHeading>
            <PopoverDescription>
              You can customize the styles and behavior of this component according to your requirements.
            </PopoverDescription>
            <Button>Learn More</Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="bottom">
        <PopoverAction>
          <CaretDown size={20} />
        </PopoverAction>
        <PopoverContent className="z-20 max-w-[300px] rounded-xl bg-white shadow-md dark:bg-metal-900">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-2 p-6">
            <PopoverHeading>Keep Design System</PopoverHeading>
            <PopoverDescription>
              You can customize the styles and behavior of this component according to your requirements.
            </PopoverDescription>
            <Button>Learn More</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

const CardPopoverCode = `
'use client'
import Image from 'next/image'
import { CaretRight } from 'phosphor-react'
import { Button, Popover, PopoverContent, PopoverDescription, PopoverHeading, PopoverAction } from 'keep-react'


export const PopoverComponent = () => {
  return (
    <Popover placement="left">
      <PopoverAction>
        <CaretLeft size={20} />
      </PopoverAction>
      <PopoverContent className="z-20 max-w-[300px] rounded-xl bg-white shadow-md dark:bg-metal-900">
        <Image
          src="https://via.placeholder.com/600x400"
          className="rounded-t-xl"
          alt="image"
          width={600}
          height={300}
        />
        <div className="space-y-2 p-6">
          <PopoverHeading>Keep Design System</PopoverHeading>
          <PopoverDescription>
            You can customize the styles and behavior of this component according to your requirements.
          </PopoverDescription>
          <Button>Learn More</Button>
        </div>
        </PopoverContent>
    </Popover>
  )
}
`

export { CardPopover, CardPopoverCode }
