import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
function App(props) {
    const [usuario, setUsuario] = useState('');
    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
    }
    return (<>
            <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
            <button type="button" onClick={handlePesquisa}>Pesquisar</button>
        </>);
}
export default App;
