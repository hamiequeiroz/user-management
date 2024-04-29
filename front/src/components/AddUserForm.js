import { Button } from '@mui/material';
import React, { useState } from 'react';

const AddUserForm = ({ addUser }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nivel, setNivel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se todos os campos foram preenchidos
    if (!nome || !email || !password) return;
    
    console.log(nome, sobrenome, email, password, nivel);
    // Limpa os campos do formulário
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
                    <option value="1">Administrador</option>
                    <option value="2">Usuário</option>
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

export default AddUserForm;
