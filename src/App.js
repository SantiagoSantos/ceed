import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    
    this.state = {
      notas:[],
      categorias:[],
    };
  }

  criarNota(titulo, texto, categoria){
    const novaNota = {
      titulo,
      texto,
      categoria
    }
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    }

    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayDeNotas = this.state.notas;
    arrayDeNotas.splice(index, 1);

    this.setState({notas:arrayDeNotas});
  }

  adicionarCategoria(descricaoCategoria){
    let isCadastrada = false;
    
    this.state.categorias.forEach(categoria => {
      if (categoria.trim().toUpperCase() == descricaoCategoria.trim().toUpperCase()) {
        isCadastrada = true;
      }
    });

    if (isCadastrada) {
      alert(`Categoria ${descricaoCategoria} já existe.`);
    }
    else {
      const novoArrayCategorias = [...this.state.categorias, descricaoCategoria];
      const novoEstado = {...this.state, categorias:novoArrayCategorias};
      this.setState(novoEstado);
    }

    
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro 
          criarNota={this.criarNota.bind(this)}   
          categorias={this.state.categorias}       
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas 
            apagarNota = {this.deletarNota.bind(this)}
            notas={this.state.notas}
          /> 
        </main>
               
      </section>
    );
  }
  
}

export default App;
