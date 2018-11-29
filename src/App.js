import React, { Component } from 'react';
import Services from './Services/Services';
import Form from './Form/Form';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faStroopwafel)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Services />
        <Form />
      </div>
    );
  }
}

export default App;
