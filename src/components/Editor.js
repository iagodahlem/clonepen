import React from 'react'
import PropTypes from 'prop-types'
import './Editor.css'

const Editor = ({ pen, onChange }) => (
  <div className='Editor'>
    {Object.keys(pen.editors).map(editor => (
      <textarea
        key={editor}
        name={editor}
        value={pen.editors[editor]}
        onChange={onChange}
      />
    ))}
  </div>
)

Editor.propTypes = {
  pen: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Editor
