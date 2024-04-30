import React from 'react';
import Button from '@mui/material/Button';

function Dashboard(){    
    return(
        <div style={{ textAlign: 'center' }}>
            <br/><br/>
            <h1>Painel de Gestão de Usuários</h1>
            <hr/>
            <a href="/user"><Button style={{ margin: '0 10px' }} variant="contained"  color="primary">Visualizar Usuarios</Button></a>
            <a href="/add"><Button  style={{ margin: '0 10px' }} variant="contained"  color="success">Adicionar Usuario</Button></a>
            <a href="/"><Button variant="contained"  color="error">Sair</Button></a>
         </div>
    );
}

export default Dashboard;