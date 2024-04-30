import { Button } from "@mui/material";
import React, {useEffect, useState} from "react";

function Login(){

    const [login, setLogin] = useState({
        "message": [
            "",
            ""
        ]
    });

    useEffect(() => {
        console.log(login);
        if(login.message[0] == true){
            console.log('Login com sucesso!', login.message[0]);
            if(login.message[1] == 'Administrador'){
                window.location.href = '/dashboard';
            }else{
                window.location.href = '/principal';
            }
        }
    }, [login]);


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            email: formData.email,
            senha: formData.password
        };
      
        console.log(formData.email, formData.password);

        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
            });
      
            if (response.ok) {
                setLogin(await response.json());
            } else {
              console.error('Erro ao cadastrar usuário:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao fazer login de usuário:', error);
        }
        console.log('Dados do formulário:', formData.email);
    }
    
    return(
        <center>
        <h2>Login de Usuário</h2>
        <form onSubmit={handleSubmit}>
            <table>
            <tr>
                <td>Email:</td>
                <td>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </td>
            </tr>
            <tr>
                <td>Senha:</td>
                <td>
                    <input 
                         type="password" 
                         id="password" 
                         name="password" 
                         value={formData.password} 
                         onChange={handleChange}  
                    />
                </td>
            </tr>
            </table>
            <Button type="submit"  variant="contained" >Entrar</Button>
        </form>
        </center>
    );
}

export default Login;