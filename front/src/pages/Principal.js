import { Button } from '@mui/material';
import React from 'react';

function Principal(){    
    return(
        <center>
            <div>
                <h1>Pagina Comum de Usuários</h1>
                <a href="/"><Button variant="contained"  color="error">Sair</Button></a>
            </div>
        </center>
    );
}

export default Principal;