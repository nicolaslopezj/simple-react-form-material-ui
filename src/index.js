import {registerType} from 'simple-react-form'
import ArrayField from './array'
import ObjectField from './object'

export { default as Checkbox } from './checkbox'
export { default as Radio } from './radio'
export { default as DatePicker } from './date-picker'
export { default as MultipleCheckbox } from './multiple-checkbox'
export { default as SelectWithMethod } from './select-with-method'
export { default as Select } from './select'
export { default as Tags } from './tags'
export { default as TextField } from './text'
export { default as Textarea } from './textarea'
export { default as File } from './file'
export { default as Toggle } from './toggle'

registerType({
  type: 'array',
  component: ArrayField
})

registerType({
  type: 'object',
  component: ObjectField
})

export const ArrayComponent = ArrayField
export const ObjectComponent = ObjectField
