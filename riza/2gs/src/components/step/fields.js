var React = require('react')
var createClass = require('create-react-class');

var Fields = createClass({
  render: function() {
    return (
      <div className='wrapper-steps'>
        <div className='form-step'>
          <ul className="form-fields">
          <li className='left-field'>
            <input type="text" ref="name" id="form-input-control-first-name" placeholder="YOUR NAME" defaultValue={this.props.fieldValues.name} />
          </li>
          <li className='left-field'>
            <input type="email" ref="email" id="form-input-control-first-name" placeholder="VALID EMAIL" defaultValue={this.props.fieldValues.email} />
          </li>
          <li className='full-field'>
            <textarea type="textarea" ref="message" defaultValue={this.props.fieldValues.message} placeholder='YOUR MESSAGE' />
          </li>
            <li className="form-footer">
              <a className="ui big button white-btn this-black pull-right" onClick={this.props.submitRegistration}>SEND MESSAGE</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Fields