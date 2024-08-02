import { Switch } from '../../../../src'

const SwitchWithIcon = () => {
  return <Switch showIcon />
}

const SwitchWithIconCode = {
  'SwitchComponent.tsx': `
import { Switch } from "keep-react"

export const SwitchComponent = () => {
  return <Switch showIcon />
}
`,
}
export { SwitchWithIcon, SwitchWithIconCode }
