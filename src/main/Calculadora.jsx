import React, { Component } from 'react'
import './Calculadora.css'

import Button from '../components/Button'
import Display from '../components/Display'


const stateInicial = {
    displayValor: '0',
    valores: [0, 0],
    operation: null,
    indice: 0,
    limparDisplay: false
}

export default class Calculadora extends Component {


    state = { ...stateInicial }

    constructor(props) {
        super(props)
        this.zerar = this.zerar.bind(this)
        this.setDigito = this.setDigito.bind(this)
        this.setOperacao = this.setOperacao.bind(this)
    }

    zerar() {
        this.setState({
            ...stateInicial
        })
    }

    setDigito(numero) {
        let v = this.state.displayValor
        if(v==='0' || this.state.limparDisplay){
            v = numero
        }else{
        v = v + numero
        }
        this.setState({
            displayValor: v,
            limparDisplay:false
        })
    }

    setOperacao(operacao) {

        let valorD = this.state.displayValor
        const valores = this.state.valores
        valores[this.state.indice] = parseFloat(this.state.displayValor)
        if(this.state.operation === '+'){
            valorD = valores[0] + valores [1]
        }
        if(this.state.operation === '-'){
            valorD = valores[0] - valores [1]
        }
        if(this.state.operation === '*'){
            valorD = valores[0] * valores [1]
        }
        if(this.state.operation === '/'){
            valorD = valores[0] / valores [1]
        }
        if(this.state.operation === '='){
            valorD = valores[0] / valores [1]
        }
        valores[0] = parseFloat(valorD)
        this.setState({ indice: 1, limparDisplay: true, operation: operacao, displayValor: valores[0] })
    }


    render() {
        return (
            <div className="calculadora">
                <Display valor={this.state.displayValor} />
                <Button label="AC" tresColunas click={this.zerar} />
                <Button label="/" click={this.setOperacao} operacao />
                <Button label="7" click={this.setDigito} />
                <Button label="8" click={this.setDigito} />
                <Button label="9" click={this.setDigito} />
                <Button label="*" click={this.setOperacao} operacao />
                <Button label="4" click={this.setDigito} />
                <Button label="5" click={this.setDigito} />
                <Button label="6" click={this.setDigito} />
                <Button label="-" click={this.setOperacao} operacao />
                <Button label="1" click={this.setDigito} />
                <Button label="2" click={this.setDigito} />
                <Button label="3" click={this.setDigito} />
                <Button label="+" click={this.setOperacao} operacao />
                <Button label="0" click={this.setDigito} duasColunas />
                <Button label="." click={this.setDigito} />
                <Button label="=" click={this.setOperacao} operacao />
            </div>
        )
    }
}