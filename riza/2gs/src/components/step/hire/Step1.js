var React                   = require('react')
var getRadioOrCheckboxValue = require('./radiobox-value')
var createClass = require('create-react-class');


var Step1 = createClass({

  renderOptions: function(type, name, value, index) {
    var isChecked = function() {
      if (type == 'radio') return value == this.props.fieldValues[name]

      if (type == 'checkbox') return this.props.fieldValues[name].indexOf(value) >= 0

      return false
    }.bind(this)

    return (
      <label key={index}>
        <input type={type} name={name} value={value} defaultChecked={isChecked()} /> <span>{value}</span>
      </label>
    )
  },

  render: function() {
    return (
      <div className='wrapper-steps' id='step-one'>
        <p>Kindly tell us what types of service you need for your brand. The details you submit will be used to accurately provide you with an estimate. But if you don’t feel like filling out forms right now, we welcome you to email us anytime at marketing@2gs.co.</p>
        <div className='form-step'>
        <ul className="form-fields">
          <li className="checkbox">
            {['Exterior', 'Interior', 'Animation', 'Photography'].map(this.renderOptions.bind(this, 'checkbox', 'services'))}
          </li>
          <li className="form-footer">
            <button className="btn -primary pull-right" onClick={this.nextStep}>Next</button>
          </li>
        </ul>
        </div>
      </div>
    )
  },

  nextStep: function() {
    // Get values via querySelector
    var age    = document.querySelector('input[name="age"]:checked')
    var services = document.querySelectorAll('input[name="services"]')

    var data = {
      services : getRadioOrCheckboxValue(services)
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = Step1