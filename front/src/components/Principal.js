import React from 'react';
import Button from '@mui/material/Button';

function Principal(){    
    return(
        <div style={{ textAlign: 'center' }}>
            <br/><br/>
            <hr/>
            <a href="/user"><Button style={{ margin: '0 10px' }} variant="contained"  color="primary">Visualizar Usuarios</Button></a>
            <a href="/add"><Button  style={{ margin: '0 10px' }} variant="contained"  color="success">Adicionar Usuario</Button></a>
         </div>
    );
}

export default Principal;