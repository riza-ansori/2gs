var React = require('react')
import { Icon } from 'semantic-ui-react'
import MdCheck from 'react-icons/lib/md/check';

var Thanks = React.createClass({
  render: function() {
    return (
      <div className='wrapper-steps' id='step-five'>
        <h2>Thank You</h2>
        <div className='form-step'>
          <i id='end-steps'><MdCheck /></i>
          <p>We’ll be in touch in no time!</p>
        </div>
      </div>
    )
  }
})

module.exports = Thanks