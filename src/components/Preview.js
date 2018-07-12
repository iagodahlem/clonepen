import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Preview.css'

class Preview extends Component {
  static propTypes = {
    pen: PropTypes.object.isRequired,
    className: PropTypes.string,
  }

  componentDidMount() {
    this.update()
  }

  componentDidUpdate() {
    this.update()
  }

  update() {
    const { pen } = this.props

    const iframeComponent = this.iframe.contentWindow.document

    iframeComponent.open()
    iframeComponent.writeln(`
      ${pen.editors.html}
      <style>${pen.editors.css}</style>
      <script>${pen.editors.js}</script>
    `)
    iframeComponent.close()
  }

  render() {
    const { className } = this.props

    return (
      <iframe
        title='preview'
        className={cx('Preview', className)}
        ref={f => this.iframe = f}
      />
    )
  }
}

export default Preview
