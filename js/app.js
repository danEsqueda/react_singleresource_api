var React = require('react')
var RunContainer = require('./components/runContainer')

var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>Welcome to Running Stats</h1>
        <RunContainer url={url} />
      </main>
    )
  }
})
var url = 'http://localhost:3000/'
React.render(<App url={url} />, document.getElementById('app'))
