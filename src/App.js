import React, { PureComponent } from 'react'
import Editor from './Editor'
import Preview from './Preview'
import './App.css'

class App extends PureComponent {
  state = {
    panes: {
      html: '',
      css: '',
      js: '',
    },
  }

  handleChangePanes = (event) => {
    const { name, value } = event.target

    const panes = {
      ...this.state.panes,
      [name]: value,
    }

    this.setState({
      panes,
    })
  }

  render() {
    const { panes } = this.state

    return (
      <div className='App'>
        <Editor
          panes={panes}
          onChange={this.handleChangePanes}
        />

        <Preview
          panes={panes}
        />
      </div>
    )
  }
}

export default App
