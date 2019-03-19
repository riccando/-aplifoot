import React, { Component } from 'react';
import MyButtonList from './Components/MyButtonList';
import MyCardList from './Components/MyCardList';

class App extends Component {
  
  state = {
    entries: [],
    active : 'europe'
  };
  changeRegion(region){
     this.setState({
      active: region
    });
     this.updateCountryList(region);
  }
  componentDidMount() {
    this.updateCountryList(this.state.active);
  }

  updateCountryList(region){
      fetch('https://restcountries.eu/rest/v2/region/'+region)
      .then(response => response.json())
      .then(entries => {
        this.setState({
          entries
        });
      });
  }

  render() {
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React whith api key : {process.env.REACT_APP_API_KEY}
          </a>
        </header>
      </div>
    );*/
    console.log('render app');
    return(
      <div className="container">
        <MyButtonList changeRegion= {(region) => this.changeRegion(region)} />
        <MyCardList entries={this.state.entries} />
      </div>
      );
  }
}
export default App;