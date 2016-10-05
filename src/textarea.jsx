import React from 'react'
import TextField from 'material-ui/TextField'
import {FieldType, registerType} from 'simple-react-form'

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {

}

export default class TextareaComponent extends React.Component {
  render () {
    return (
      <TextField
        ref='input'
        fullWidth
        multiLine
        value={this.props.value}
        floatingLabelText={this.props.useHint ? null : this.props.label}
        hintText={this.props.useHint ? this.props.label : null}
        errorText={this.props.errorMessage}
        disabled={this.props.disabled}
        onChange={(event) => this.props.onChange(event.target.value)}
        {...this.passProps} />
    )
  }
}

TextareaComponent.propTypes = propTypes
TextareaComponent.defaultProps = defaultProps

registerType({
  type: 'textarea',
  component: TextareaComponent
})
