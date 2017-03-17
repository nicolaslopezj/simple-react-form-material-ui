import React from 'react'
import TextField from 'material-ui/TextField'
import {FieldType, registerType} from 'simple-react-form'

const propTypes = {
  changeOnKeyDown: React.PropTypes.bool,
  ...FieldType.propTypes
}

const defaultProps = {
  changeOnKeyDown: false
}

export default class TextareaComponent extends React.Component {
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

  onChange (event) {
    this.setState({ value: event.target.value })
    if (this.props.changeOnKeyDown) {
      this.props.onChange(event.target.value)
    }
  }
  render () {
    return (
        <TextField
            ref='input'
            fullWidth={true}
            multiLine={true}
            value={this.state.value || ''}
            floatingLabelText={this.props.useHint ? null : this.props.label}
            hintText={this.props.useHint ? this.props.label : null}
            errorText={this.props.errorMessage}
            disabled={this.props.disabled}
            onChange={this.onChange.bind(this)}
            onKeyDown={this.onKeyDown.bind(this)}
            onBlur={this.onBlur.bind(this)}
            {...this.props.passProps} />
    )
  }
}

TextareaComponent.propTypes = propTypes
TextareaComponent.defaultProps = defaultProps

registerType({
  type: 'textarea',
  component: TextareaComponent
})
