var React = require('react')

var Run = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.distance} miles</p>
        <p>{this.props.hrs}:{this.props.mins}:{this.props.sec}</p>
      </div>
    )
  }
})

var RunList = React.createClass({
  render: function() {
    var runs = this.props.runs.map(function(run) {
      return <Run name={run.name} distance={run.distance} hrs={run.hrs} mins={run.mins} sec={run.sec} />
    })
    return (
      <section>
        <h2>My Runs:</h2>
        { runs }
      </section>
    )
  }
})

module.exports = RunList
