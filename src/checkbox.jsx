import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import * as Colors from 'material-ui/styles/colors'
import {FieldType, registerType} from 'simple-react-form'

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {

}

export default class CheckboxComponent extends React.Component {

  render () {
    return (
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Checkbox
          label={this.props.label}
          disabled={this.props.disabled}
          checked={this.props.value}
          onCheck={() => this.props.onChange(!this.props.value)}
          {...this.props.passProps}
        />
        <span style={{ color: Colors.red500 }}>{this.props.errorMessage}</span>
      </div>
    )
  }
}

CheckboxComponent.propTypes = propTypes
CheckboxComponent.defaultProps = defaultProps

registerType({
  type: 'checkbox',
  component: CheckboxComponent
})

registerType({
  type: 'boolean',
  component: CheckboxComponent
})
