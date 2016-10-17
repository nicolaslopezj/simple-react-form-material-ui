import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {FieldType, registerType} from 'simple-react-form'
import _ from 'underscore'

const propTypes = {
  ...FieldType.propTypes,
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

  onChange (event, index, value) {
    const options = this.getOptions()
    options.map(option => {
      if (String(option.value) === value) {
        this.props.onChange(option.value)
      }
    })
  }

  getOptions () {
    if (this.props.options) {
      return this.props.options
    } else if (this.props.fieldSchema.allowedValues) {
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

  renderItems () {
    const options = this.getOptions()
    return options.map((item) => {
      return <MenuItem key={item.value} value={String(item.value)} primaryText={item.label} />
    })
  }

  render () {
    return (
      <SelectField
      value={String(this.props.value)}
      onChange={this.onChange.bind(this)}
      fullWidth
      disabled={this.props.disabled}
      floatingLabelText={this.props.label}
      errorText={this.props.errorMessage}
      {...this.props.passProps}>
        {this.renderItems()}
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
