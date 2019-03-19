import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class MyCardList extends Component {
  
  render() {
    return(
        <div className="row">
           {this.props.entries.map(
            ({ numericCode, translations, flag, capital, languages,currencies,demonym,population }) => (
              <div className='col-sm-6 col-md-4' key={numericCode}>
                <Card style={cardPerso}>
                  <Card.Img variant="top" src={flag} style={imgStyle} />
                  <Card.Body>
                    <Card.Title>{translations.fr}</Card.Title>
                    <Card.Text>
                      Capitale: {capital}<br />
                      Langue: {languages[0].nativeName}<br />
                      Devise: {currencies[0].name} ({currencies[0].symbol})<br />
                      Populations:{demonym} <br />
                      Nombres:{population} <br />

                    </Card.Text>
                  </Card.Body>
                  
              </Card>
              </div>
               
            )
          )}
         
        </div>
      );
  }
}

const imgStyle = {
  height: '150px',
  display: 'block',
  whith: '100%'
};

const cardPerso = {
  marginBottom: '20px'
};
export default MyCardList;
