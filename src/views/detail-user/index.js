import React,{ Component } from 'react';
import api from '../../services/api.js';
import { Link } from 'react-router-dom';
import './style.css';
export default class DetailUser extends Component {

    state = {
        id:"",
        nome:"",
        raca:"",
        emaildono:"",
        idade:"",
        peso:"",
    };
    constructor (props) {
        super(props);
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
        this.updateUser();
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/users/${id}`);
        console.log(`id: ${id}`);
        this.setState({id: id, nome: response.data.nome,
         raca: response.data.raca, 
         emaildono: response.data.emaildono, 
         idade: response.data.idade, 
         peso: response.data.peso 
        }
        );
    }
   deleteUser = async () =>{
       const {id} = this.state;
       const response = await api.delete(`/users/${id}`);
       console.log(response);
       if (response.status === 200) {
           alert ("Sucesso");
           this.props.history.push('/list-user');
       }
   }

    updateUser = async () => {
        await api.put('/users', this.state)
        .then (response =>{
            alert ("Usuário alterado com sucesso");
            this.props.history.push('/list-user');
        })
        .catch(error =>{
            alert ("Erro ao alterar o usuário");
        })
    }
    
    render() {
        const{ id,nome,raca,emaildono,idade,peso} = this.state;
        
        return(
            <div className="detail-user">
                <h2>Detalhe do  usuário</h2>

                <h2>{nome}</h2>
                <p> 
                Código: {id} <br/>
                Raça: {raca} <br/>
                Email do dono: {emaildono} <br/>
                Idade: {idade} <br/>
                Peso: {peso} <br/>
                </p>
                <h2>Alterar dados do usuário</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="card">
                        <div class="card-body">
                            <div class="form-group">
                                <label>Digite o nome do animal:</label>
                                <input name="nome" type="text" value={this.state.nome} onChange={this.handleInputChange} class="form-control" />

                            </div>
                            <div class="form-group">
                                <label>Digite a raça do animal:</label>
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
                                <label>Digite o peso do animal:</label>
                                <input name="peso" type="text" value={this.state.peso} onChange={this.handleInputChange} class="form-control" />
                            </div>
                            <input type="submit" value="Alterar" class="btn btn-lg btn-success" />
                        </div>
                    </div>
                </form>

                <button onClick={() => this.deleteUser()} class="btn btn-lg btn-danger">
                    Excluir usuário

                </button>
            </div>
        
    );
    }   
}