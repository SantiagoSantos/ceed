import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import Categorias from './data/Categorias';
import ArrayDeNotas from './data/Notas';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro 
          criarNota={this.notas.adicionarNota.bind(this.notas)}   
          categorias={this.categorias}       
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas 
            apagarNota = {this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          /> 
        </main>
               
      </section>
    );
  }
  
}

export default App;
