import DropFile from './dropfile.js'
var React = require('react')
var createClass = require('create-react-class');

var Step2 = createClass({
  render: function() {
    return (
      <div className='wrapper-steps' id='step-two'>
        <p>Keep it simple. That’s how we like to do things. So, it would be great if you’ll do the same</p>
        <div className='form-step'>
        <ul className="form-fields">
          <li>
            <textarea type="textarea" ref="describe" defaultValue={this.props.fieldValues.describe} placeholder='Please describe briefly the details of your brand and what you require from us.' />
          </li>
          <li>
              <DropFile/>
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
      describe    : this.refs.describe.value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = Step2