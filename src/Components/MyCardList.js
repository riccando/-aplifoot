import React from 'react';
import MyCard from "../Components/MyCard";
export default ({entries}) => {return(
        <div className="row">
           {entries.map(
            (entrie) => (
              <MyCard entries={entrie} key={entrie.numericCode}/>
              )
            )}
        </div>
)}