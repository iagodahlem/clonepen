import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Preview extends Component {
  static propTypes = {
    panes: PropTypes.shape({
      html: PropTypes.string.isRequired,
      css: PropTypes.string.isRequired,
      js: PropTypes.string.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.update()
  }

  componentDidUpdate() {
    this.update()
  }

  update() {
    const { panes } = this.props

    const iframeComponent = this.iframe.contentWindow.document

    iframeComponent.open()
    iframeComponent.writeln(`
      ${panes.html}
      <style>${panes.css}</style>
      <script>${panes.js}</script>
    `)
    iframeComponent.close()
  }

  render() {
    return (
      <iframe
        title='preview'
        className='Preview'
        ref={f => this.iframe = f}
      />
    )
  }
}

export default Preview
