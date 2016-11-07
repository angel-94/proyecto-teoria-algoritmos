require('normalize.css/normalize.css');
import React from 'react';
import {Link} from 'react-router'

export default ({children})=>(
  <div className="container container-fluid">
    <div className="jumbotron">
      <div className="">
        <h4>Hola mundo</h4>
        <Link to="/afd/entradas">
          <button className="btn btn-primary" type="button" name="button">Crea tu AFD</button>
        </Link>
      </div>
      {children}
    </div>
  </div>
)
