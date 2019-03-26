import React, { Component } from 'react';
import MyButtonList from './Components/MyButtonList';
import MyCardList from './Components/MyCardList';
require('es6-promise').polyfill();
require('isomorphic-fetch');
class App extends Component {
  state = {
    entries: {europe: [],africa: [],asia: [],americas: [],oceania: []},
    entriesAll: [],
    items: [],
    active : 'europe'
  };

  changeRegion(region){
     this.updateCountryList(region);
  } 

  filterText(text,active){
    let updatedList = this.state.entriesAll;
    updatedList = updatedList.filter(function(item){
      return item.region.toLowerCase() == active;
    });
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(text) !== -1 ;
    });
    this.setState({items: updatedList});
  }
  componentDidMount() {
    //this.updateCountryList(this.state.active);
    this.getCountryList();
  }

  updateCountryList(region){
      if(this.state.entries[region].length < 1){
        fetch('https://restcountries.eu/rest/v2/region/'+region)
        .then(response => response.json())
        .then(entries => {
          let tabEntries = this.state.entries;
          tabEntries[region] = entries;
          this.setState({
            entries:tabEntries,
            active:region
          });
        });
      }else{
        this.setState({
            active:region
          });
      }
      
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
        {/*<MyCardList entries={this.state.entries[this.state.active]} />*/}
        <MyCardList entries={this.state.items}/>
      </div>
      );
  }
}
export default App;