import './App.css';
import React, { Component }  from 'react';
import Header from './components/header';
import Routes from './routes';
import {BrowserRouter,Link} from 'react-router-dom';
import { Button } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <h1>Registro de Pet</h1>
        <Header />
        {/* <nav id="main-nav">
          <ul> */}
          <div class="btn-group" role="group" aria-label="Basic example">
            <Link className="btn btn-primary btn-lg" to={`/register-user`}>Cadastro</Link>
            <Link className="btn btn-success btn-lg" to={`/list-user`}>Lista</Link>
          </div>
          {/* </ul>
        </nav> */}
        <Routes/>
        </BrowserRouter>
     
      </header>
    </div>
  );
}

export default App;

