# GitHub Users App 
### Desafio compasso UOL

## Objetivo do Projeto 📌

Aplicação desenvolvida em React que permite realizar a pesquisa de um perfil do GitHub através do seu nome de usuário, exibindo sua foto de perfil, nome, bio, número de repositórios e os repositórios estrelados/favoritos do usuário. 

## Link do surge
https://guilherme-desafio-compasso-uol.surge.sh/

## Funcionalidades

- Página inicial: esta é uma página de pesquisa que possui um campo de texto para digitar o nome de usuário e um botão para realizar a busca. A página retorna um erro caso tente fazer a busca sem passar um nome e retorna um alerta caso tente buscar um usuário que não existe. 

- Página de perfil: página que mostra o perfil do usuário pesquisado. Além das informações básicas (nome, bio e foto do perfil), esta página contém dois botões, um que direciona para a página dos repositórios do usuário pesquisado e outro que direciona para a página dos repositórios estrelados/favoritos.

- Página de repositórios: esta página retorna uma lista de cards com todos os repositórios daquele usuário, caso ele não tenha nenhum repositório, retorna uma mensagem avisando. 

- Página de estrelados: esta página também retorna uma lista de cards, só que desta vez os repositórios favoritos do usuário pesquisado, caso ele não tenha marcado nenhum como favorito, retorna uma mensagem informando.

## Ferramentas utilizadas 🔧

- React Js - Biblioteca Javascript para construir interfaces;
- Axios - Biblioteca para fazer requisições do navegador;
- React-router-dom - Biblioteca que permite controlar em forma de rotas os componentes a serem renderizados;
- Styled-components - Bibilioteca que permite a utilização de CSS para estilização de componentes React;
- Material UI - Biblioteca de componentes React para personalização e um desenvolvimento ágil e fácil.


## API 
https://developer.github.com/v3/
