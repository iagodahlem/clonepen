import React from 'react'
import PropTypes from 'prop-types'
import Pen from './Pen'
import './Pens.css'

const Pens = ({ pens, onDelete }) => (
  <div className='Pens'>
    {pens.map(pen => (
      <Pen
        key={pen.id}
        pen={pen}
        onDelete={onDelete}
      />
    ))}
  </div>
)

Pens.propTypes = {
  pens: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Pens
