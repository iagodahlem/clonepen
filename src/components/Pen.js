import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Preview from './Preview'
import './Pen.css'

const Pen = ({ pen, onDelete }) => (
  <div className='Pen'>
    <div className='Pen__content'>
      <Link to={`/pen/${pen.id}`} className='Pen__link' />
      <Preview pen={pen} className='Pen__preview' />
    </div>

    <div className='Pen__footer'>
      <button onClick={onDelete(pen.id)}>
        <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 459 459">
          <path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5    H51v51h357V25.5z" fill="#FFFFFF"/>
        </svg>
      </button>
    </div>
  </div>
)

Pen.propTypes = {
  pen: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Pen
