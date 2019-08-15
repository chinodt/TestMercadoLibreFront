import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/search.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import SearchBox from './SearchBox';
const formatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  minimumFractionDigits: 2
})
/*
Descripción:    Página de búsqueda que consume un API de NodeJS que a su vez emplea métodos
                del API de MercadoLibre
Desarrollador:  David Tineo
Fecha: 13/08/2019
*/ 
class Description extends Component {
constructor(props) {
    super(props);
    this.state = {
        query: "",
        productoId: "",
        productoTitulo: "",
        productoPrecio: "",
        productoImagen: "",
        productoCondition: "",
        productoDescripcion: ""
    };
}    

  handleProduct = event => {this.setState({ query: event.target.value })}

  searchById(sId) {
    const url = `http://localhost:3001/getProductById/${sId}`;
    if(sId !== "")
    {
      fetch(url)
      .then(results => results.json())
      .then(data => {
        this.setState({ 
            productoId: data.id,
            productoTitulo: data.title,
            productoPrecio: data.price,
            productoImagen: data.pictures[0].url,
            productoCondition: data.condition
        });
      });
    }
  };

  searchDescription(sId) {
    const url = `http://localhost:3001/getProductDescription/${sId}`;
    if(sId !== "")
    {
      fetch(url)
      .then(results => results.json())
      .then(data => {
        this.setState({ 
            productoDescripcion: data.plain_text 
        });
      });      
    }
  };

  findProduct=(sQuery)=> {
        if(sQuery !== "")
        {
            this.props.history.push('/items?search=' + sQuery)
        }
    }  

  componentDidMount() {
    this.searchById(this.props.match.params.id)
    this.searchDescription(this.props.match.params.id)
  }

  render() {
      
    if(this.state.productoCondition ==="used")
    {
      this.setState({ productoCondition: "Usado" })
    }
    else if(this.state.productoCondition ==="new")
    {
      this.setState({ productoCondition: "Nuevo" })
    }

    return (
    <div>
        <div id="search">
            <SearchBox findProduct={this.findProduct}/>
        </div>
        <div className="container">
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <img className="Prodimg" src={this.state.productoImagen} alt={this.state.productoTitulo}/>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            {this.state.productoCondition}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>{this.state.productoTitulo}</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>
                                                <h4>{formatter.format(this.state.productoPrecio)}</h4>
                                            </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><button className="buttonSale">Comprar</button></td>
                                    </tr>                           
                                </tbody>
                            </table>
                        </td>
                    </tr>                        
                </tbody>
            </table>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <h4><b>Descripción del producto</b></h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {this.state.productoDescripcion}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
  }
}

export default Description;
