import React, { Component } from 'react';
import './App.css';

import Main from './pages/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { page: 'main' };

  }
  render() {
    let page;
    switch(this.state.page){
      case 'main':
        page = <Main />;
        break;
      case 'cms':
          page = 'cms';
          break;
      default:
        page = <Main />;
        break;
    }

    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;