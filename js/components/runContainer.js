var React = require('react')
var $ = require('jquery')
var NewRun = require('./newRun')
var RunList = require('./runList')

var RunContainer = React.createClass({
  getInitialState: function() {
    return {
      runs: []
    }
  },

  componentDidMount: function() {
    var endpoint = this.props.url + 'runningstats/myruns'
    var _this = this
    $.get(endpoint, function(result) {
      if (_this.isMounted) {
        _this.setState({
          runs: _this.state.runs.concat([result])
        })
      }
    })
  },

  addRun: function(run) {
    this.setState({
      runs: this.state.runs.concat([run])
    })
  },

  render: function() {
    alert(this.state.runs[0])
    return (
      <p> {this.state.runs[0]} </p>
    )
    /*
    return (
      <main>
        <h1>My Run Tracker</h1>
        <NewRun addRun={this.addRun} />
        <RunList runs={this.state.runs} />
      </main>
    )
*/
  }
})

module.exports = RunContainer
