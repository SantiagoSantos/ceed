export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func)
    }

    notify(){
        this._inscritos.forEach(f => {
            f(this.notas);
        });
    }

    adicionarNota(titulo, texto, categoria){
        const novaNota = new Notas  (titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notify();
    }

    apagarNota(index){
        this.notas.splice(index, 1);
        this.notify();
    }
}

class Notas{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}