import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Pens from '../components/Pens'
import * as pensRepository from '../repositories/pensRepository'
import './Home.css'

class Home extends PureComponent {
  state = {
    pens: [],
  }

  componentDidMount() {
    this.index()
  }

  index() {
    return pensRepository
      .index()
      .then(pens => this.setState({ pens }))
  }

  handleDeletePen = (id) => () => {
    pensRepository
      .del(id)
      .then(pens => this.setState({ pens }))
  }

  render() {
    const { pens } = this.state

    return (
      <div className='Home'>
        <h2 className='Home__title'>
          Your Pens
        </h2>

        {pens.length
          ? <Pens pens={pens} onDelete={this.handleDeletePen} />
          : (<p>You don't have any pens yet, go <Link to='/pen'>create one</Link>.</p>)}
      </div>
    )
  }
}

export default Home
