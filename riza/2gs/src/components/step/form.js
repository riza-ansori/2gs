var React         = require('react')
var Fields  = require('./fields.js')
var Thanks = require('./thanks.js')
var Confirm = require('./confirm.js')
var assign        = require('object-assign')
var createClass = require('create-react-class');

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
  name     : null,
  message : null,
  email    : null,
}

var Form = createClass({
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
        return <Fields fieldValues={fieldValues}
                             previousStep={this.previousStep}
                             submitRegistration={this.submitRegistration} />
      case 2:
        return <Thanks fieldValues={fieldValues} />
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

module.exports = Form