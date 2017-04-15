const React = require('react');
const ReactDOM = require('react-dom');
require('../css/index.css');

class App extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <h1>Hello world!</h1>
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
    
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);