import React from 'react'
import TextField from 'material-ui/TextField'
import {FieldType, registerType} from 'simple-react-form'

const propTypes = {
  ...FieldType.propTypes,
  changeOnKeyDown: React.PropTypes.bool,
  fieldType: React.PropTypes.string
}

const defaultProps = {
  changeOnKeyDown: false
}

export default class TextFieldComponent extends React.Component {

  constructor (props) {
    super(props)
    this.state = { value: props.value }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ value: nextProps.value })
  }

  onKeyDown (event) {
    if (event.keyCode === 13) {
      this.props.onChange(event.target.value)
    }
  }

  onBlur (event) {
    if (this.props.onBlur) {
      this.props.onBlur()
    }
    this.props.onChange(this.state.value)
  }
  _isNumberType () {
    if (this.props.fieldSchema) {
      return this.props.fieldSchema.type === Number
    }
    if (this.props.fieldType === 'number') {
      return true
    }
    if (this.type === 'number') {
      return true
    }
    return false
  }

  onChange (event) {
    let value = (this._isNumberType()) ? Number(event.target.value) : event.target.value
    this.setState({ value })
    if (this.props.changeOnKeyDown) {
      this.props.onChange(value)
    }
  }

  render () {
    var fieldType = this.props.fieldType || this.type || 'text'
    return (
      <TextField
        ref='input'
        fullWidth
        value={this.state.value || ''}
        type={fieldType}
        floatingLabelText={this.props.useHint ? null : this.props.label}
        hintText={this.props.useHint ? this.props.label : null}
        errorText={this.props.errorMessage}
        disabled={this.props.disabled}
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        onBlur={this.onBlur.bind(this)}
        {...this.props.passProps}
      />
    )
  }
}

TextFieldComponent.propTypes = propTypes
TextFieldComponent.defaultProps = defaultProps

registerType({
  type: 'text',
  component: TextFieldComponent
})

class StringFieldComponent extends TextFieldComponent {
  constructor (props) {
    super(props)
    this.type = 'text'
  }
}

registerType({
  type: 'string',
  component: StringFieldComponent
})

class NumberFieldComponent extends TextFieldComponent {
  constructor (props) {
    super(props)
    this.type = 'number'
  }
}

registerType({
  type: 'number',
  component: NumberFieldComponent
})

class DateFieldComponent extends TextFieldComponent {
  constructor (props) {
    super(props)
    this.type = 'date'
  }
}

registerType({
  type: 'date',
  component: DateFieldComponent
})
