import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/search.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
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
  state = {
    query: "",
    productos: []
  };
  handleProduct = event => {this.setState({ query: event.target.value })}

  search() {
    const url = `http://localhost:3001/getProduct/${this.state.query}`;
    // console.log(url)
    if(this.state.query !== "")
    {
      fetch(url)
      .then(results => results.json())
      .then(data => {
        this.setState({ productos: data.results });
      });      
    }
  };

  componentDidMount() {
      console.log('Estoy en description')
    this.search();
  }

  render() {
    return (
      <div className="CommentBox">
          <div className="container">
          <table className="table">
            <tbody>
            {
                this.state.productos.map((item, i,) =>{
                  return (
                      <tr key={i}>
                      <td>
                        <img src={item.thumbnail} alt={item.title}/>
                      </td>
                      <td>
                        <table>
                          <tbody>
                            <tr>
                                  <td>
                                    <h4>{formatter.format(item.price)}</h4>
                                  </td>
                              </tr>
                              <tr>
                                <td>{item.title}</td>
                              </tr>                          
                          </tbody>
                        </table>
                      </td>
                      <td>
                        {item.address.state_name}
                      </td>
                  </tr>
                  )                                    
              })
            }
            </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default Description;
