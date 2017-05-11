import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {FieldType, registerType} from 'simple-react-form'
import _ from 'underscore'

const propTypes = {
  ...FieldType.propTypes,
  /**
   * Optional default value.
   */
  defaultValue: React.PropTypes.string,
  /**
   * The options for the select input. Each item must have label and value.
   */
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired
  }))
}

const defaultProps = {
}

export default class SelectComponent extends React.Component {

  getOptions () {
    if (this.props.options) {
      return this.props.options
    } else if (this.props.fieldSchema && this.props.fieldSchema.allowedValues) {
      return _.map(this.props.fieldSchema.allowedValues, function (allowedValue) {
        return {
          label: allowedValue,
          value: allowedValue
        }
      })
    } else {
      throw new Error('You must set the options for the select field')
    }
  }

  getDefaultValue () {
    if (this.props.defaultValue) {
      return this.props.defaultValue
    } else if (this.props.fieldSchema && this.props.fieldSchema.defaultValue) {
      return this.props.fieldSchema.defaultValue
    }
  }

  componentDidMount () {
    if (!this.props.value) {
      this.props.onChange(this.getDefaultValue())
    }
  }

  render () {
    return (
      <SelectField
        value={String(this.props.value)}
        defaultValue={this.getDefaultValue()}
        fullWidth
        disabled={this.props.disabled}
        floatingLabelText={this.props.label}
        errorText={this.props.errorMessage}
        {...this.props.passProps}>
        {this.getOptions().map((item) => (
          <MenuItem key={item.value} value={String(item.value)} primaryText={item.label} onTouchTap={(value) => this.props.onChange(item.value)} />
        ))}
      </SelectField>
    )
  }
}

SelectComponent.propTypes = propTypes
SelectComponent.defaultProps = defaultProps

registerType({
  type: 'select',
  component: SelectComponent
})
