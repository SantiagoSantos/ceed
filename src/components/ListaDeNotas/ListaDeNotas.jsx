import React, { Component } from 'react';
import CardNota from '../CardNota';
import './style.css';

class ListaDeNotas extends Component{

    constructor(){
        super();
        this.state = {
            notas: []
        }

        this._novaNota = this._novaNota.bind(this);
    }

    componentDidMount(){
        this.props.notas.inscrever(this._novaNota);
    }

    componentWillUnmount(){
        this.props.notas.desinscrever(this._novaNota);
    }

    _novaNota(notas){
        this.setState({ ...this.state, notas });
    }

    render()
    {
        return (            
            <ul className="lista-notas">
                {this.state.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            
                            <CardNota 
                                titulo={nota.titulo}
                                texto={nota.texto}
                                apagarNota = {this.props.apagarNota}
                                indice = {index}
                                categoria = {nota.categoria}
                            />
                        </li> 
                    )
                })}
                               
            </ul>            
        )
    }
    
}

export default ListaDeNotas;