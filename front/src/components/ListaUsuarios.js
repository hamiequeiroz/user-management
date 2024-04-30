import React, {useState, useEffect} from "react";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';


function ListaUsuarios(){
   
    const [usuarios, setUsuarios] = useState({});

    useEffect(() => {
        async function fetchUsuarios() {
            try { 
                const response = await fetch('http://127.0.0.1:5000/user');
                if (!response.ok) {
                    console.log("Falha ao buscar usuários")
                    throw new Error('Falha ao buscar usuários');
                }else{
                    console.log("Busca feita com sucesso")
                }
                setUsuarios(await response.json());
            } catch (error) {
                console.error('Erro:', error);
            }
        }
        fetchUsuarios();
    }, []);

    const renderizarUsers = () => {
        const elementos = [];

        for(let i in usuarios) {
            elementos.push(
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={usuarios[i].nome +' ' + usuarios[i].sobrenome +' | ' + usuarios[i].email}  />
                    </ListItemButton>
                    <ListItemIcon>
                        <a href={`/update/${usuarios[i].id}`}> <BorderColorIcon /></a>
                    </ListItemIcon>
                    <ListItemIcon> 
                        <a href={`/delete/${usuarios[i].id}`}><DeleteIcon /></a>
                    </ListItemIcon>
                </ListItem> 
            );
        }
        return elementos;
    }
    
    return (
        <center>
            <h1>Lista de Usuários</h1>
        <div>     
            <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        {renderizarUsers()}
                    </List>
                </nav>
            </Box>
            <a href="/dashboard"><Button variant="contained"  color="error">Voltar</Button></a>
        </div>
        </center>
    );
}

export default ListaUsuarios;