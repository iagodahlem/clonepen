import React from 'react'
import PropTypes from 'prop-types'

const Editor = ({ panes, onChange }) => (
  <div className='Editor'>
    {Object.keys(panes).map(pane => (
      <textarea
        key={pane}
        name={pane}
        onChange={onChange}
      />
    ))}
  </div>
)

Editor.propTypes = {
  panes: PropTypes.shape({
    html: PropTypes.string.isRequired,
    css: PropTypes.string.isRequired,
    js: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Editor
