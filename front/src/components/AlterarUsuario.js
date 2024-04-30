import React, {useEffect,useState} from "react";
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

function AlterarUsuario(){
    const { id } = useParams();
    const [usuarios, setUsuarios] = useState([{
        'id': '',
        'nome': '',
        'sobrenome': '',
        'email': '',
        'senha': '',
        'nivel': '',
        'status':'',
    }]);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nivel, setNivel] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function fetchAlterarUsuarios() {
            try { 
                const response = await fetch(`http://127.0.0.1:5000/getUser/${id}`);
                if (!response.ok) {
                    console.log("Falha ao buscar usuários")
                    throw new Error('Falha ao buscar usuários');
                }else{
                    console.log("Busca feita com sucesso")
                    setUsuarios(await response.json());
                }                
            } catch (error) {
                console.error('Erro:', error);
            }
        }
        fetchAlterarUsuarios();
    }, []);

    useEffect(() => {
        if(usuarios != undefined){
            setNome(usuarios[0].nome);
            setSobrenome(usuarios[0].sobrenome);
            setEmail(usuarios[0].email);
            setPassword(usuarios[0].senha);
            setNivel(usuarios[0].nivel);
            setStatus(usuarios[0].status)
        } 
    }, [usuarios]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !email || !password) return;
    
        const userData = {
            id: id,
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: password,
            nivel: nivel,
            status: status
          };
      
        console.log(nome, sobrenome, email, password, nivel, status);
        try {
            const response = await fetch(`http://127.0.0.1:5000/update/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
            });
      
            if (response.ok) {
              console.log('Usuário atualizado com sucesso!');
              window.location.href = '/user';
            } else {
              console.error('Erro ao atualizar usuário:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
        }
      };

    return(
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
                <td>Status:</td>
                <td>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">Selecione...</option>
                        <option value="Ativo">Ativo</option>
                        <option value="Cancelado">Cancelado</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                <a href="/user"><Button variant="contained" color='error'>Voltar</Button></a>
                </td>
                <td><Button variant="contained"  type="submit">Alterar</Button></td>
            </tr>
        </table><br/>
        </form>
    </center>
    );
}

export default AlterarUsuario;