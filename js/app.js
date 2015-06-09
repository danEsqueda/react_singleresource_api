var React = require('react')
var RunContainer = require('./components/runContainer')

// var Run = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h3>{this.props.name}</h3>
//         <p>{this.props.distance} miles</p>
//         <p>{this.props.hrs}:{this.props.mins}:{this.props.sec}</p>
//       </div>
//     )
//   }
// })

// var RunList = React.createClass({
//   render: function() {
//     var runs = this.props.runs.map(function(run) {
//       return <Run name={run.name} distance={run.distance} hrs={run.hrs} mins={run.mins} sec={run.sec} />
//     })
//     return (
//       <section>
//         <h2>My Runs:</h2>
//         { runs }
//       </section>
//     )
//   }
// })

// var NewRun = React.createClass({
//   getInitialState: function() {
//     return {
//       newName: '',
//       newDistance: 0,
//       newHrs: 00,
//       newMins: 00,
//       newSec: 00
//     }
//   },

//   propTypes: {
//     addRun: React.PropTypes.func.isRequired
//   },

//   updateNewName: function(e) {
//     this.setState({
//       newName: e.target.value
//     })
//   },

//   updateNewDistance: function(e) {
//     this.setState({
//       newDistance: e.target.value
//     })
//   },

//   updateNewHrs: function(e) {
//     this.setState({
//       newHrs: e.target.value
//     })
//   },

//   updateNewMins: function(e) {
//     this.setState({
//       newMins: e.target.value
//     })
//   },

//   updateNewSec: function(e) {
//     this.setState({
//       newSec: e.target.value
//     })
//   },

//   handleAddNew: function() {
//     this.props.addRun({
//       name: this.state.newName,
//       distance: this.state.newDistance,
//       hrs: this.state.newHrs,
//       mins: this.state.newMins,
//       sec: this.state.newSec
//     })
//   },

//   render: function() {
//     return (
//       <section>
//         <h4>Add a new run here </h4>
//         <p>Route Name: {this.state.newName}</p>
//         <p>Distance: {this.state.newDistance}</p>
//         <p>Duration: {this.state.newHrs}:{this.state.newMins}:{this.state.newSec}</p>
//         Route Name:
//         <input type='text' value={this.state.newName} onChange={this.updateNewName} />
//         Distance in miles:
//         <input type='number' value={this.state.newDistance} onChange={this.updateNewDistance} />
//         Duration:
//         <input type='number' max='24' value={this.state.newHrs} onChange={this.updateNewHrs} />
//         :
//         <input type='number' max='59' value={this.state.newMins} onChange={this.updateNewMins} />
//         :
//         <input type='number' max='59' value={this.state.newSec} onChange={this.updateNewSec} />
//         <button onClick={this.handleAddNew}> Add Run </button>
//       </section>
//     )
//   }
// })

// var RunContainer = React.createClass({
//   getInitialState: function() {
//     return {
//       runs: [
//         {name: 'test route 1', distance: 3, hrs: 0, mins: 28, sec: 15},
//         {name: '5 mile loop', distance: 5.5, hrs: 0, mins: 47, sec: 37}
//       ]
//     }
//   },

//   addRun: function(run) {
//     this.setState({
//       runs: this.state.runs.concat([run])
//     })
//   },

//   render: function() {
//     return (
//       <main>
//         <h1>My Run Tracker</h1>
//         <NewRun addRun={this.addRun} />
//         <RunList runs={this.state.runs} />
//       </main>
//     )
//   }
// })

var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>Welcome to Running Stats</h1>
        <RunContainer />
      </main>
    )
  }
})

React.render(<App />, document.getElementById('app'))
