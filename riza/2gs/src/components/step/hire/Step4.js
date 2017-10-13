var React = require('react')

var Step4 = React.createClass({
  render: function() {
    return (
      <div className='wrapper-steps' id='step-four'>
        <p>Confirmation</p>
        <div className='form-step'>
          <ul className="form-fields">
            <li><p>Services:<span>{this.props.fieldValues.services.join(', ')}</span></p></li>
            <li><p>Describe:<span>{this.props.fieldValues.describe}</span></p></li>
            <li><p>Name:<span>{this.props.fieldValues.name}</span></p></li>
            <li><p>Email:<span>{this.props.fieldValues.email}</span></p></li>
            <li><p>Phone:<span>{this.props.fieldValues.phone}</span></p></li>
            <li><p>Address:<span>{this.props.fieldValues.address}</span></p></li>
            <li className="form-footer">
              <button className="btn -default pull-left" onClick={this.props.previousStep}>Previous</button>
              <button className="btn -primary pull-right" onClick={this.props.submitRegistration}>Next</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Step4