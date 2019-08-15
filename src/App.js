import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/search.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
const formatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  minimumFractionDigits: 2
})

class App extends Component {
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
    this.search();
  }

  render() {
    return (
      <div className="CommentBox">
        <div id="search">
            <img src="MercadoLibre.png" alt="Mercado Libre"/>
            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              onChange={this.handleProduct}
            />
            <button class="button" onClick={() => this.search()}>
                <i class="fa fa-search fa-lg"></i>
            </button>
          </div>
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

export default App;
