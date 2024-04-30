import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaUsuarios from './components/ListaUsuarios';
import Dashboard from './pages/Dashboard';
import AdicionarUsuario from './components/AdicionarUsuario';
import DeletarUsuario from './components/DeletarUsuario';
import AlterarUsuario from './components/AlterarUsuario';
import Login from './pages/Login';
import Principal from './pages/Principal';

function App() {
  return (
    <Router>
      <div>
        <Switch> 
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/principal" exact component={Principal} />
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
