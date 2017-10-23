var React         = require('react')
var Step1  = require('./Step1.js')
var Step2 = require('./Step2')
var Step3  = require('./Step3')
var Step4       = require('./Step4')
var Step5       = require('./Step5')
var assign        = require('object-assign')
var createClass = require('create-react-class');


// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
  name     : null,
  describe    : null,
  company  : null,
  email    : null,
  phone    : null,
  address    : null,
  services   : []
}

var Registration = createClass({
  getInitialState: function() {
    return {
      step : 1
    }
  },

  saveValues: function(field_value) {
    return function() {
      fieldValues = assign({}, fieldValues, field_value)
    }.bind(this)()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  submitRegistration: function() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep()
  },

  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <Step1 fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 2:
        return <Step2 fieldValues={fieldValues}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />
      case 3:
        return <Step3 fieldValues={fieldValues}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />
      case 4:
        return <Step4 fieldValues={fieldValues}
                             previousStep={this.previousStep}
                             submitRegistration={this.submitRegistration} />
      case 5:
        return <Step5 fieldValues={fieldValues} />
    }
  },

  render: function() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        {this.showStep()}
      </main>
    )
  }
})

module.exports = Registration