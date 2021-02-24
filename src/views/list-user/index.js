import React,{ Component } from 'react';
import api from '../../services/api.js';
import { Link } from 'react-router-dom';
import './style.css';
export default class ListUser extends Component {

    state = {
        users: [],
    };


    componentDidMount(){
        this.loadUsers();
        

    }

    loadUsers = async () => {
        const response = await api.get ("/users");
        // console.log(response);
        this.setState({users: response.data['users']});

    }

    render() {
        const {users} = this.state;
        
        return(
            <div>
                <h2>Lista de usuários</h2>
                <p>Quantidade de usuários: {users.length}</p>
                <div className="users-list">
                    {users.map(user => (
                        <article key={user.id} id="user-article">
                            <p>
                                Código {user.id}<br/>
                                <strong>Nome: {user.nome}</strong> <br/>
                                Raça: {user.raca} <br/>
                                Email dono: {user.emaildono}<br/>
                                Idade: {user.idade}<br/>
                                Peso: {user.peso}<br/>
                            </p>
                        <Link to={`/detail-user/${user.id}`} > Detalhes do usuário </Link>
                        </article>

                    ))}
                </div>
            </div>
        
    );
    }   
}