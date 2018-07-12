import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './App.css'

class App extends PureComponent {
  static propTypes = {
    chidlren: PropTypes.node,
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <h1 className='App__title'>
            <Link to='/'>Clonepen</Link>
          </h1>

          <nav className='App__nav'>
            <ul>
              <li>
                <Link to='/pen'>
                  New Pen
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className='App__content'>
          {this.props.children}
        </div>

        <footer className='App__footer'>
          <p>
            Made with <span className='heart'>❤</span> by <a href="https://iagodahlem.com">Iago Dahlem Lorensini</a>
          </p>
        </footer>
      </div>
    )
  }
}

export default App
