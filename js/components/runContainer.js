var React = require('react')
var NewRun = require('./newRun')
var RunList = require('./runList')

var RunContainer = React.createClass({
  getInitialState: function() {
    return {
      runs: [
        {name: 'test route 1', distance: 3, hrs: 0, mins: 28, sec: 15},
        {name: '5 mile loop', distance: 5.5, hrs: 0, mins: 47, sec: 37}
      ]
    }
  },

  addRun: function(run) {
    this.setState({
      runs: this.state.runs.concat([run])
    })
  },

  render: function() {
    return (
      <main>
        <h1>My Run Tracker</h1>
        <NewRun addRun={this.addRun} />
        <RunList runs={this.state.runs} />
      </main>
    )
  }
})

module.exports = RunContainer
