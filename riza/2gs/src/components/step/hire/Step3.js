import DropFile from './dropfile.js'
var React = require('react')

var Step3 = React.createClass({
  render: function() {
    return (
      <div className='wrapper-steps' id='step-three'>
        <p>Keep it simple. That’s how we like to do things. So, it would be great if you’ll do the same</p>
        <div className='form-step'>
            <ul className="form-fields">
                <li className='left-field'>
                    <input type="text" ref="name" id="form-input-control-first-name" placeholder="Name" defaultValue={this.props.fieldValues.name} />
                </li>
                <li className='right-field'>
                    <input type="text" ref="company" id="form-input-control-first-name" placeholder="Company/Organization" defaultValue={this.props.fieldValues.company} />
                </li>
                <li className='left-field'>
                    <input type="email" ref="email" id="form-input-control-first-name" placeholder="Email" defaultValue={this.props.fieldValues.email} />
                </li>
                <li className='right-field'>
                    <input type="text" ref="phone" id="form-input-control-first-name" placeholder="Phone Number" defaultValue={this.props.fieldValues.phone} />
                </li>
                <li className='full-field'>
                <textarea type="textarea" ref="address" defaultValue={this.props.fieldValues.address} placeholder='Address' />
                </li>
                <li className="form-footer">
                    <button className="btn -default pull-left" onClick={this.props.previousStep}>Previous</button>
                    <button className="btn -primary pull-right" onClick={this.nextStep}>Next</button>
                </li>
            </ul>
        </div>
      </div>
    )
  },

  nextStep: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name    : this.refs.name.value,
      company    : this.refs.company.value,
      email    : this.refs.email.value,
      phone    : this.refs.phone.value,
      address    : this.refs.address.value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = Step3