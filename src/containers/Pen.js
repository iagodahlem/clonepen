import React, { PureComponent, Fragment } from 'react'
import Editor from '../components/Editor'
import Preview from '../components/Preview'
import * as pensRepository from '../repositories/pensRepository'

class Pen extends PureComponent {
  state = {
    pen: {
      editors: {
        html: '',
        css: '',
        js: '',
      }
    },
  }

  componentDidMount() {
    const { params } = this.props.match

    if (params.id) {
      this.show(params.id)
    } else {
      this.create()
    }
  }

  show(id) {
    return pensRepository
      .show(id)
      .then(pen => this.setState({ pen }))
  }

  create() {
    const { history } = this.props

    return pensRepository
      .create()
      .then(pen => history.replace(`/pen/${pen.id}`))
  }

  update(pen) {
    return pensRepository.update(pen.id, pen)
      .then(pen => this.setState({ pen }))
  }

  handleUpdatePen = (event) => {
    const { name, value } = event.target

    const pen = {
      ...this.state.pen,
      editors: {
        ...this.state.pen.editors,
        [name]: value,
      },
    }

    this.update(pen)
  }

  render() {
    const { pen } = this.state

    return (
      <Fragment>
        <Editor
          pen={pen}
          onChange={this.handleUpdatePen}
        />

        <Preview
          pen={pen}
        />
      </Fragment>
    )
  }
}

export default Pen
