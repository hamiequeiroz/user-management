import { Button } from '@mui/material';
import React, { useState } from 'react';


const AdicionarUsuario = ( ) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nivel, setNivel] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    // Verifica se todos os campos foram preenchidos
    if (!nome || !email || !password) return;

    const userData = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: password,
        nivel: nivel,
      };
  
    
    console.log(nome, sobrenome, email, password, nivel);
    try {
        const response = await fetch('http://127.0.0.1:5000/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
  
        if (response.ok) {
          console.log('Usuário cadastrado com sucesso!');
          window.location.href = '/user';
        } else {
          console.error('Erro ao cadastrar usuário:', response.statusText);
        }
    } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    }
  
    
    setNome('');
    setSobrenome('');
    setEmail('');
    setPassword('');
    setNivel('');
  };

  return (
    <center>
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Usuário </h2> 
      <table>
        <tr>
            <td>Nome:</td>
            <td>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </td>
        </tr>
        <tr>
            <td>Sobrenome:</td>
            <td>
                <input
                    type="text"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                />
            </td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>
                <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                />
            </td>
        </tr>
        <tr>
            <td>Senha:</td>
            <td>
                <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                />
            </td>
        </tr>
        <tr>
            <td>Nivel:</td>
            <td>
                <select
                    value={nivel}
                    onChange={(e) => setNivel(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Usuario">Usuario</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>
             <a href="/"><Button variant="contained" color='error'>Voltar</Button></a>
            </td>
            <td><Button variant="contained"  type="submit">Adicionar</Button></td>
            
        </tr>
      </table><br/>
    </form>
    
    </center>
    
  );
};

export default AdicionarUsuario;
