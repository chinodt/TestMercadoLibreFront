import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/search.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
/*
Descripción:    Componente que arma los breadcrumbs
Desarrollador:  David Tineo
Fecha: 13/08/2019
*/ 
class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            separator: ">"
        };
    } 
  render() {
    //Para mostrar solo 5 categorías de breadcrumbs
    var canti = 5;
    return (
      <div>
        <ul className="breadcrumb">
        {
            this.props.breadCrumbs.slice(0, canti).map((item, i,) =>{
            return (
                <li key={i}><a href="#">{item.name}</a></li>
            )                                    
        })            
        }
        </ul>         
      </div>
    );
  }
}

export default Breadcrumbs;
