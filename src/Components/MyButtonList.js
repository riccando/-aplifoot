import React, { Component } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

class MyButtonList extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 'europe' }
  }  

  handleClick(e,name) {
    this.props.changeRegion(name);
    this.setState({
          active: name
        });
  }

  render() {
    const items = [
    { id: 1, name: 'africa', text: 'Afrique'},
    { id: 2, name: 'europe', text: 'Europe'},
    { id: 3, name: 'asia', text: 'Asie'},
    { id: 4, name: 'americas', text: 'Amérique'},
    { id: 5, name: 'oceania', text: 'Océanie'},
    ];
    const BtnList = items.map(item=>
        <Button 
          key ={item.id}
          variant="outline-primary"
          className={this.state.active === item.name ? 'active' : ''}
          onClick={(e,nameVal) => this.handleClick(e,item.name)}
          >
          {item.text}
          </Button>
      );
    return(
        <ButtonToolbar>
          {BtnList}
        </ButtonToolbar>
        
      );
  }
}

export default MyButtonList;
