import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaUsuarios from './components/ListaUsuarios';
import Principal from './components/Principal';
import AdicionarUsuario from './components/AdicionarUsuario';
import DeletarUsuario from './components/DeletarUsuario';
import AlterarUsuario from './components/AlterarUsuario';

function App() {
  return (
    <Router>
      <div>
        <Switch> 
          <Route path="/" exact component={Principal} />
          <Route path='/user' component={ListaUsuarios} />
          <Route path='/add' component={AdicionarUsuario} />
          <Route path='/delete/:id' component={DeletarUsuario} />
          <Route path='/update/:id' component={AlterarUsuario} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
