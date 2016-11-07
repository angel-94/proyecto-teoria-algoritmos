require('normalize.css/normalize.css');
//require('styles/bootstrap/dist/css/bootstrap.css');
//require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import React from 'react';

export default class Entradas extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      datos: 0,
      estados: '1',
      alfabetos: '1'
    };
    this.handleChange = this.cambiandoEstado.bind(this);
    this.handleChange = this.cambiandoAlfabeto.bind(this);
  }

  cambiandoEstado=(event)=>{
    console.log('primer valor!' + this.state.estados);
    let valor = event.target.value;
    this.setState({estados: event.target.value});
    console.log('Segundo valor!' + valor);
    var pagina = this.state.datos;
    this.setState({datos:(pagina+1)});
  }

  cambiandoAlfabeto=(event)=>{
    console.log('primer valor!' + this.state.alfabetos);
    let valora = event.target.value;
    this.setState({alfabetos: event.target.value});
    console.log('Segundo valor!' + valora);
    var pagina = this.state.page;
    this.setState({page:(pagina+1)});
    console.log('pagina ' + pagina);
  }

  render(){
    let vista;
    if(this.state.datos === 0){
      vista = (<div>
        <h2>Datos de entrada para t&uacute; afd</h2>
        <div className="form-group">
          <label for="">N&uacute;mero de estados (Q):</label>
          <select value={this.state.estados} onChange={this.cambiandoEstado} className="form-control" name="">
            <option value="1">q0</option>
            <option value="2">q1</option>
            <option value="3">q2</option>
            <option value="4">q3</option>
            <option value="5">q4</option>
            <option value="6">q5</option>
            <option value="7">q6</option>
            <option value="8">q7</option>
            <option value="9">q8</option>
            <option value="10">q9</option>
          </select>
        </div>
        <div className="form-group">
          <label for="">Elementos del alfabeto (&Sigma;):</label>
          <select value={this.state.alfabeto} onChange={this.cambiandoAlfabeto} className="form-control" name="">
            <option value="1">a</option>
            <option value="2">b</option>
            <option value="3">c</option>
            <option value="4">d</option>
          </select>
        </div>
      </div>
    )}
    else{
    for (var i = 1; i < this.state.estados; i++) {
      vista = (<div>
        <div className="">
          <div className="row">
            <div className="col-md-6">
              <h5></h5>
            </div>
            <div className="col-md-6">
              <h5>a</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>q0</h5>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for=""></label>
                <input type="text" className="form-control" id="" placeholder="estado 1"/>
                <p className="help-block">Help text here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>)
      console.log(i);
    }
  }

    return(
      <div>
        {vista}
      </div>
    );
  }
}
