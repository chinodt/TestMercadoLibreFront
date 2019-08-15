import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchMain from './SearchMain';
import SearchResult from './SearchResult';
import Description from './Description';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'  component={SearchMain} />
          <Route exact path='/items' component={SearchResult} />          
          <Route path='/items/:id'  component={Description}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;