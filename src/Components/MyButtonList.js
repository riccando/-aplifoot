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

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { active: ['europe'] };
  }
  

  handleClick(name) {
    let tmp = this.state.active;
    if(tmp.indexOf(name) >= 0){
      if(tmp.length > 1){
        tmp.splice(tmp.indexOf(name), 1);    
      }
      
    }else{
      tmp.push(name);
    }
    this.setState({active: tmp});
    this.props.changeRegion(tmp);
    this.props.filterText(this.myRef.current.value,tmp);
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
        className={this.state.active.includes(item.name) ? 'active' : ''}
        onClick={this.handleClick.bind(this, item.name)}
        >
        {item.text}
        </Button>
    );
    const fText = (
        <Form.Control type="text" placeholder="Nom du pays" onChange={this.filterList.bind(this)} ref={this.myRef}/>
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
