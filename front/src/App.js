import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaUsuarios from './components/ListaUsuarios';
import Principal from './components/Principal';
import AdicionarUsuario from './components/AdicionarUsuario';
import DeletarUsuario from './components/DeletarUsuario'

function App() {
  return (
    <Router>
      <div>
        <Switch> 
          <Route path="/" exact component={Principal} />
          <Route path='/user' component={ListaUsuarios} />
          <Route path='/add' component={AdicionarUsuario} />
          <Route path='/delete/:id' component={DeletarUsuario} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
