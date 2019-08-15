import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/search.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import SearchBox from './SearchBox';
/*
Descripción:    Página Principal
Desarrollador:  David Tineo
Fecha: 13/08/2019
*/ 
class SearchMain extends Component {
    findProduct=(sQuery)=> {
        if(sQuery !== "")
        {
            this.props.history.push('/items?search=' + sQuery)
        }
    }   

  render() {
    return (
      <div>
          <SearchBox findProduct={this.findProduct}/>
      </div>
    );
  }
}

export default SearchMain;
