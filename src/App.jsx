import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Catalog} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/product/:itemId" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  );


}

export default App;
