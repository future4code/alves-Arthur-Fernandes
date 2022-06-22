import React from "react";
import axios from "axios";


export default class TelaDetalhe extends React.Component {
 state = {
    email : '',
    nome : '',
    id : '',
    edit : false,
    editNome : '',
    editEmail : '',
 }
getUserById =(id) => { axios.get(
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
  
        {
          headers: {
            Authorization: "arthur-fernandes-alves"
          }
        })
        .then((resposta) => {
        
            this.setState({email : resposta.data.email , id : resposta.data.id, nome : resposta.data.name})
        })
    }
    componentDidMount(){
        this.getUserById(this.props.id)
    }
    editarUser = () => {
        this.setState({ edit : true})
    }
    editNome = (e) => {
        this.setState ({editNome : e.target.value})
    }
    editEmail = (e) => {
        this.setState ({editEmail : e.target.value})
    }
    exportEdit = (id) => {
        const body = {
            name: this.state.editNome,
            email: this.state.editEmail
        }
        axios.put(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            body,

            {
                headers: {
                    Authorization: "arthur-fernandes-alves"
                }
            })
            .then((resposta) => {
               
               this.getUserById(this.state.id)
               alert('Usuário editado!')
               this.setState({editEmail : '', editNome : '', edit : false})
            })
    }
    showInput = () => {
        switch (this.state.edit) {
            case false:
                return <button onClick={()=> this.editarUser()}>Editar Usuário</button>     
        
            default:
                return <>
                <input placeholder="Novo Nome" value = {this.state.editNome} onChange ={this.editNome}/>
                <input placeholder="Novo Email" value ={this.state.editEmail} onChange ={this.editEmail}/>
                <button onClick={()=>this.exportEdit(this.state.id)}>Salvar</button>
                </>
                
        }
    }
    render(){
       
        
        return(
        <div>
            <h2>{this.state.nome}</h2>
            <h3>{this.state.email}</h3>
            <button onClick={()=> this.props.remover(this.state.id)}> Remover Usuário </button>
            <button onClick={()=> this.props.trocar(true)}>Voltar</button>
            <ul>
            {this.showInput()}
            </ul>
       </div>
        )
    }
}
