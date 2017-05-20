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
  constructor(props) {
    super(props)
    this.setMenuItems(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.options && !_.isEqual(this.props.options, nextProps.options)) {
      this.setMenuItems(nextProps);
    }
  }

  setMenuItems(props) {
    this._options = this.getOptions(props)
    this._menuItems = this._options.map((item) => {
      return <MenuItem key={item.value} value={String(item.value)} primaryText={item.label} onTouchTap={(value)=>props.onChange(item.value)}/>
    })
  }

  getOptions(props) {
    if (props.options) {
      return props.options
    } else if (props.fieldSchema && props.fieldSchema.allowedValues) {
      return _.map(props.fieldSchema.allowedValues, function (allowedValue) {
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

  componentDidMount() {
    if (typeof this.props.value === "undefined") {
      this.props.onChange(this.getDefaultValue())
    }
  }

  render() {
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
