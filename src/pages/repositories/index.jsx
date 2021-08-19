import React from 'react';
import * as S from './styled'
 
export default function Repositories() {
    return (
        <S.Container>    
            <S.Title>Seus Repositórios</S.Title>
            <S.List>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
            </S.List>
        </S.Container>    
    );
}