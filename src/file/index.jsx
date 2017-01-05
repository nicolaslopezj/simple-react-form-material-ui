import React from 'react'
import {FieldType, registerType} from 'simple-react-form'
import _ from 'underscore'

import UploadButton from './upload-button'
import Preview from './preview'
import styles from '../styles'

const propTypes = {
  ...FieldType.propTypes,
  /**
   * A function that recieves { file, onProgress, onReady, onError }.
   * onProgress input is progress, a number from 0 to 1.
   * onReady inputs are { url, meta },
   *    url is the url of the file, meta is a object with whatever you want.
   * onError input is message.
   */
  upload: React.PropTypes.func.isRequired,

  /**
   * A function that recieves { file, onReady, onError }.
   * file is the information of the file (includes the meta from before).
   * onReady is a function with no input.
   * onError input is message.
   */
  delete: React.PropTypes.func,

  /**
   * A mime type to match to accept the files.
   * If image prop is set and image prop is also set, this mime type is going to stay.
   * If this prop is not set and image prop is, the mime type will be 'image/*'
   */
  accept: React.PropTypes.string,

  /**
   * Only accept images
   */
  image: React.PropTypes.bool,

  /**
   * Accept multiple files. If you are using simple-schema and this is true,
   * you must set [Object] to the type.
   */
  multi: React.PropTypes.bool,

  /**
   * Pass the styles props to the preview
   */
  previewStyles: React.PropTypes.object,

  /**
   * This delete the files that are not used
   */
  deleteNotUsedFiles: React.PropTypes.bool,

  /**
   * The label of the button
   */
  uploadLabel: React.PropTypes.any,

  /**
   * The label of the delete button
   */
  deleteLabel: React.PropTypes.any,

  /**
   * The text that is shown when deleting
   */
  confirmDeleteText: React.PropTypes.any
}

const defaultProps = {
  accept: false,
  image: false,
  multi: false,
  previewStyles: {},
  deleteLabel: 'Delete',
  confirmDeleteText: 'Do you want to delete this file?',
  delete: ({ file, onReady, onError }) => onReady()
}

export default class Component extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
    this.uploads = []
    this.toDelete = []
    this.limbo = []

    /* $(window).unload(() => { This will be deactivated until better implementation is made
      this.componentWillUnmount()
    }) */
  }

  onSuccess () {
    this.toDelete.map((file) => {
      this.props.delete({
        file,
        onReady: () => {},

        onError: (message) => {
          alert(message)
        }
      })
    })
    this.toDelete = []
    this.limbo = []
  }

  onError (message) {
    // Todo something here
  }

  componentWillUnmount () {
    if (!this.limbo.length) return
    if (this.props.hasOwnProperty('deleteNotUsedFiles')) {
      if (!this.props.deleteNotUsedFiles) {
        return
      }
    } else {
      if (this.props.form.props.hasOwnProperty('onChange')) {
        return
      }
    }

    this.limbo.map((file) => {
      this.props.delete({
        file,
        onReady: () => {},

        onError: (message) => {
          alert(message)
        }
      })
    })
  }

  onReady (upload, file) {
    if (this.props.multi) {
      var newValue = _.clone(this.props.value) || []
      newValue.push(file)
      this.props.onChange(newValue)
    } else {
      this.props.onChange(file)
    }
    this.limbo.push(file)
  }

  startUpload (file, base64) {
    var upload = {
      key: _.uniqueId('uploadComponent'),
      file,
      base64,
      isUploading: true
    }
    this.uploads.push(upload)
    this.forceUpdate()

    this.props.upload({
      file,
      onProgress: (progress) => {
        upload.progress = progress
        this.forceUpdate()
      },

      onReady: ({ url, meta }) => {
        this.onReady(upload, { url, meta })
        const index = this.uploads.indexOf(upload)
        this.uploads.splice(index, 1)
        this.forceUpdate()
      },

      onError: (message) => {
        this.onError(upload, message)
        upload.isUploading = false
        upload.error = message
        this.forceUpdate()
      }
    })
  }

  deleteFile (file) {
    this.toDelete.push(_.clone(file))
    if (this.props.multi) {
      var value = _.clone(this.props.value)
      const index = value.indexOf(file)
      value.splice(index, 1)
      this.props.onChange(value)
    } else {
      this.props.onChange(null)
    }
  }

  renderPreviews () {
    const uploadingPreviews = this.uploads.map((upload, index) => {
      return <Preview
        key={upload.key}
        styles={this.props.previewStyles}
        base64={upload.base64}
        file={upload.file}
        isUploading={upload.isUploading}
        progress={upload.progress}
        isImage={!!this.props.image}
        onDelete={() => this.deleteFile(upload.file)}/>
    })

    const value = this.props.multi ? (this.props.value || []) : this.props.value ? [this.props.value] : []
    const previews = value.map((file, index) => {
      return <Preview
        key={`preview-${file.url}`}
        styles={this.props.previewStyles}
        url={file.url}
        isImage={!!this.props.image}
        deleteLabel={this.props.deleteLabel}
        confirmDeleteText={this.props.confirmDeleteText}
        onDelete={() => this.deleteFile(file)}
        />
    })

    return (
      <div>
        {previews}
        {uploadingPreviews}
      </div>
    )
  }

  renderUploadButton () {
    if (!this.props.multi && (this.props.value || this.uploads.length)) return
    const props = {
      accept: this.props.accept ? this.props.accept : this.props.image ? 'image/*' : '',
      label: this.props.image ? this.props.uploadLabel || 'Upload image' : this.props.uploadLabel || 'Upload file',
      multi: !!this.props.multi,
      onUpload: this.startUpload.bind(this),
      passBase64: !!this.props.image
    }
    return <UploadButton {...props} />
  }

  render () {
    return (
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        <div style={styles.label}>
          {this.props.label}
        </div>
        {this.renderPreviews()}
        {this.renderUploadButton()}
        <div style={styles.errorMessage}>
          {this.props.errorMessage}
        </div>
      </div>
    )
  }
}

Component.propTypes = propTypes
Component.defaultProps = defaultProps

registerType({
  type: 'file',
  component: Component
})
