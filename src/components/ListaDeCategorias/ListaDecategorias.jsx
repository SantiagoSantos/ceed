import React, { Component } from 'react';
import './style.css';

class ListaDecategorias extends Component {
    constructor(){
        super();
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
        this.setState({...this.state, categorias});
    }

    _HandlerEventoInput(ev){
        if (ev.key === 'Enter') {   
            if (ev.target.value.trim() === "") {
                alert('Informe o nome da nova categoria');
                return;
            }
            
            let valorCategoria = ev.target.value;
            this.props.adicionarCategoria(valorCategoria);

            ev.target.value = '';
        }
    }

    render() { 
        return ( 
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}
                
                </ul>
                <input 
                    type="text" 
                    placeholder="Adicionar categoria" 
                    onKeyUp={this._HandlerEventoInput.bind(this)}                       
                />
            </section>
            
         );
    }
}
 
export default ListaDecategorias;