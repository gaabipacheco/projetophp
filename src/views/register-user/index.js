import React,{ Component } from 'react';
import api from'../../services/api';
import './style.css';
export default class RegisterUser extends Component {
    constructor (props) {
        super(props);
          // {
    //     "nome":"buosb",
    //     "raca":"gato siames",
    //     "emaildono":"pga423223b@gmail.com",
    //      "idade": "2",
    //   "peso": "3.2"
    // }
    this.state = {
        nome: "",
        raca:"",
        emaildono:"",
        idade:"",
        peso:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]:value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("state enviado -> " + this.state);
        this.RegisterUser();
    }
    RegisterUser = async () =>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('GET', 'POST','PUT', 'DELETE','OPTIONS');
       await api.post('/users', this.state,headers)
        .then(responde => {
            // console.log(response);
            alert ("Usuário cadastrado com sucesso!");
        })
        .catch(error=>{
            console.log(error);
            alert ("Erro ao cadastrar o usuário.");
        });
    };
  
    render() {
        return(
            <div>
                <h2>Cadastro de usuário</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="card">
                        <div class="card-body">
                            <div class="form-group">
                                <label>Digite o nome do animal: </label>
                                <input name="nome" type="text" value={this.state.nome} onChange={this.handleInputChange} class="form-control" />
                            </div>
                            <div class="form-group">
                                <label>Digite a raça do animal: </label>
                                <input name="raca" type="text" value={this.state.raca} onChange={this.handleInputChange} class="form-control" /> 
                            </div>
                            <div class="form-group">
                                <label>Digite o email do dono: </label>
                                <input name="emaildono" type="text" value={this.state.emaildono} onChange={this.handleInputChange} class="form-control" /> 
                            </div>
                            <div class="form-group">
                                <label>Digite a idade do animal: </label>
                                <input name="idade" type="text" value={this.state.idade} onChange={this.handleInputChange} class="form-control" />   
                            </div>
                            <div class="form-group">
                                <label>Digite o peso do animal:  </label>
                                <input name="peso" type="text" value={this.state.peso} onChange={this.handleInputChange} class="form-control"/>
                            </div>
                        <input type="submit" value="Cadastrar" class="btn btn-lg btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        
    );
    }   
}