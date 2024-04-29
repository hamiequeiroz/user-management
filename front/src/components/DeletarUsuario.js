import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function DeletarUsuario(){
    
    const { id } = useParams();
    
    useEffect(() => {
        async function fetchDeleteUsuarios() {
            try { 
                const response = await fetch(`http://127.0.0.1:5000/delete/${id}`);
                if (!response.ok) {
                    console.log("Falha ao deletar usuario")
                    
                    throw new Error('Falha ao buscar usuários');
                }else{
                    console.log("Delete feito com sucesso")
                    return <Redirect to="/user" />;
                }
            } catch (error) {
                console.error('Erro:', error);
            }
        }
        fetchDeleteUsuarios();
    }, []);

    return(
        <div>
            <h2>Detalhes do Usuario</h2>
            <p>ID do Usuario: {id}</p>
        </div>
    );
}

export default DeletarUsuario;