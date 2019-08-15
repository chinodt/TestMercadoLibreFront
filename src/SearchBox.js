import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/search.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
/*
Descripción:    Página de búsqueda que invoca a otra página que mostrará los productos
Desarrollador:  David Tineo
Fecha: 13/08/2019
*/ 
class SearchBox extends Component {
  state = {
    query: ""
  };
  handleProduct = event => {this.setState({ query: event.target.value })}

  render() {
    return (
      <div className="CommentBox">
        <div id="search">
            <a href="http://localhost:3000/">
                <img src="MercadoLibre.png" alt="Mercado Libre"/>
            </a>

            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              onChange={this.handleProduct}
            />
            <button className="button" onClick={() => this.props.findProduct(this.state.query)}>
                <i className="fa fa-search fa-lg"></i>
            </button>
          </div>
      </div>
    );
  }
}

export default SearchBox;
