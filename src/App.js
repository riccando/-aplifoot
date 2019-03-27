import React, { Component } from 'react';
import MyButtonList from './Components/MyButtonList';
import MyCardList from './Components/MyCardList';
require('es6-promise').polyfill();
require('isomorphic-fetch');
class App extends Component {
  state = {
    entriesAll: [],
    items: [],
    active : ['europe']
  };

  changeRegion(region){
     this.setState({active:region});
     this.filterText('',region);
  } 

  filterText(text,active){
    let updatedList = this.state.entriesAll;
    updatedList = updatedList.filter(function(item){
      let act = active.includes("europe");
      return active.includes(item.region.toLowerCase());
      //return item.region.toLowerCase() === active;
    });
    updatedList = updatedList.filter(function(item){
      let name = (item.translations.fr) ? item.translations.fr.toLowerCase() : item.name.toLowerCase();
      return name.search(text) !== -1 ;
    });
    this.setState({items: updatedList});
  }
  componentDidMount() {
    this.getCountryList();
  }

  getCountryList(){
      fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(entries => {
          this.setState({entriesAll:entries});
          this.filterText('',this.state.active);
      });
  }

  render() {
    return(
      <div className="container">
        <MyButtonList changeRegion= {(region) => this.changeRegion(region)} filterText ={(text,region) => this.filterText(text,region)} />
        <MyCardList entries={this.state.items}/>
      </div>
      );
  }
}
export default App;