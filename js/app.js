var React = require('react')
var RunContainer = require('./components/runContainer')

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
