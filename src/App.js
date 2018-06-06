import React from 'react';
import Todo from './components/Todo';
import Home from './components/Home';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <Home/>
    );
  }
}

// App.propTypes = {
//   store : PropTypes.object.isRequired
// }

export default App;
