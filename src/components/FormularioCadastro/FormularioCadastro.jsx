import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component{
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem categoria"
        this.state = {
            categorias: []
        }

        this._novaCategoria = this._novaCategoria.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novaCategoria);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novaCategoria);
    }

    _novaCategoria(categorias){
        this.setState({ ...this.state, categorias });
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _handleMudancaCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();

        let isTituloDigitado = true;
        let isTextoDigitado = true;

        if (this.titulo.trim() === "") {
            isTituloDigitado = false;
        }
        if (this.texto.trim() === "") {
            isTextoDigitado = false;
        }

        if (isTituloDigitado && isTextoDigitado) {
            this.props.criarNota(this.titulo, this.texto, this.categoria);
        }
        else{
            if (!isTituloDigitado && !isTextoDigitado) {
                alert('Título e texto da nota são obrigatórios.');
            }
            else if (!isTituloDigitado) {
                alert('Título da nota é obrigatório.')
            }
            else{
                alert('Texto da nota é obrigatório.')
            }
        }           
        
    }

    render(){
        return(
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <select onChange = {this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
                    <option>Sem Categoria</option>
                    {this.state.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
                    })}
                </select>
                <input className="form-cadastro_input" type="text" placeholder="Título" onChange={this._handleMudancaTitulo.bind(this)} />
                <textarea onChange={this._handleMudancaTexto.bind(this)} rows="15" className="form-cadastro_input" placeholder="Escreva sua nota" />
                <button className="form-cadastro_submit">Criar Nota</button>
            </form>
        )
    }
}

export default FormularioCadastro;