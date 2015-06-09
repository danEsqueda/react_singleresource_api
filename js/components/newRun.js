var React = require('react')

var NewRun = React.createClass({
  getInitialState: function() {
    return {
      newName: '',
      newDistance: 0,
      newHrs: 00,
      newMins: 00,
      newSec: 00
    }
  },

  propTypes: {
    addRun: React.PropTypes.func.isRequired
  },

  updateNewName: function(e) {
    this.setState({
      newName: e.target.value
    })
  },

  updateNewDistance: function(e) {
    this.setState({
      newDistance: e.target.value
    })
  },

  updateNewHrs: function(e) {
    this.setState({
      newHrs: e.target.value
    })
  },

  updateNewMins: function(e) {
    this.setState({
      newMins: e.target.value
    })
  },

  updateNewSec: function(e) {
    this.setState({
      newSec: e.target.value
    })
  },

  handleAddNew: function() {
    this.props.addRun({
      name: this.state.newName,
      distance: this.state.newDistance,
      hrs: this.state.newHrs,
      mins: this.state.newMins,
      sec: this.state.newSec
    })
  },

  render: function() {
    return (
      <section>
        <h4>Add a new run here </h4>
        <p>Route Name: {this.state.newName}</p>
        <p>Distance: {this.state.newDistance}</p>
        <p>Duration: {this.state.newHrs}:{this.state.newMins}:{this.state.newSec}</p>
        Route Name:
        <input type='text' value={this.state.newName} onChange={this.updateNewName} />
        Distance in miles:
        <input type='number' value={this.state.newDistance} onChange={this.updateNewDistance} />
        Duration:
        <input type='number' max='24' value={this.state.newHrs} onChange={this.updateNewHrs} />
        :
        <input type='number' max='59' value={this.state.newMins} onChange={this.updateNewMins} />
        :
        <input type='number' max='59' value={this.state.newSec} onChange={this.updateNewSec} />
        <button onClick={this.handleAddNew}> Add Run </button>
      </section>
    )
  }
})

module.exports = NewRun
