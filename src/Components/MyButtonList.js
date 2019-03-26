import React, { Component } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const items = [
  { id: 1, name: 'africa', text: 'Afrique'},
  { id: 2, name: 'europe', text: 'Europe'},
  { id: 3, name: 'asia', text: 'Asie'},
  { id: 4, name: 'americas', text: 'Amérique'},
  { id: 5, name: 'oceania', text: 'Océanie'},
];

class MyButtonList extends Component {

  state = { active: 'europe' }

  handleClick(name) {
    this.props.changeRegion(name);
    this.setState({active: name});
  }

  filterList(event){
    let text = event.target.value.toLowerCase();
    this.props.filterText(text,this.state.active);
  }

  
  render() {
    const BtnList = items.map(item=>
      <Button 
        key ={item.id}
        variant="outline-primary"
        className={this.state.active === item.name ? 'active' : ''}
        onClick={this.handleClick.bind(this, item.name)}
        >
        {item.text}
        </Button>
    );
    const region = this.state.active;
    const fText = (
        <Form.Control type="text" placeholder="Nom du pays" onChange={this.filterList.bind(this)}/>
      );
    return(
        <div>
          <ButtonToolbar>
            {BtnList}
          </ButtonToolbar>
          <br />
           {fText}
          <br />
        </div>
      );
  }
}

export default MyButtonList;
