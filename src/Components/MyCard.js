import React from 'react';
import Card from 'react-bootstrap/Card';

 export default (entrie) => {return(
              <div className='col-sm-6 col-md-4'>
                <Card style={cardPerso}>
                  <Card.Img variant="top" src={entrie.entries.flag} style={imgStyle} />
                  <Card.Body>
                    <Card.Title>{entrie.entries.translations.fr}</Card.Title>
                    <Card.Text>
                      Capitale: {entrie.entries.capital}<br />
                      Langue: {entrie.entries.languages[0].nativeName}<br />
                      Devise: {entrie.entries.currencies[0].name} ({entrie.entries.currencies[0].symbol})<br />
                      Populations:{entrie.entries.demonym} <br />
                      Nombres:{entrie.entries.population} <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
             
)}
const imgStyle = {
  height: '150px',
  display: 'block',
  whith: '100%'
};

const cardPerso = {
  marginBottom: '20px'
};
