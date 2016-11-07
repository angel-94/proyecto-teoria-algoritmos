require('normalize.css/normalize.css');
//require('styles/bootstrap/dist/css/bootstrap.css');
//require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import React from 'react';

export default class Home extends React.Component{
  render(){
    return(
      <div className="">
        <div className="">
          <h4>Hola mundo</h4>
          <Link to="/afd/entradas">
            <button type="button" name="button">Crea tu AFD</button>
          </Link>
        </div>
      </div>
    );
  }
}
