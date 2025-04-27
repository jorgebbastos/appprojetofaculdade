Descrição
Este projeto foi desenvolvido como parte de uma atividade acadêmica, com o objetivo de criar uma aplicação simples para aprender sobre as boas práticas de desenvolvimento web utilizando React, TypeScript, Styled Components, e Tailwind CSS. A aplicação interage com a API do GitHub para buscar informações sobre perfis de usuários e exibi-las de forma organizada e visualmente agradável.

A aplicação é composta por duas rotas principais:

Styled Components: Uma página onde os componentes são estilizados utilizando styled-components.

Tailwind CSS: Uma página onde os componentes são estilizados utilizando o framework Tailwind CSS.

Funcionalidades
Busca de usuários no GitHub: A aplicação se comunica com a API pública do GitHub para buscar e exibir informações de perfis de usuários.

Rotas diferentes para estilização: A aplicação permite testar duas abordagens de estilização de componentes: uma usando styled-components e outra com Tailwind CSS.

Interface de usuário interativa: A interface é simples e interativa, permitindo que o usuário insira o nome de um usuário GitHub e visualize os resultados de forma rápida e eficiente.

Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.

TypeScript: Superset de JavaScript para adicionar tipagem estática e melhorar a confiabilidade do código.

React Router: Biblioteca para gerenciar rotas no React.

Styled Components: Biblioteca para estilização de componentes utilizando JavaScript.

Tailwind CSS: Framework CSS para estilização rápida e customizável utilizando classes utilitárias.

Instruções para Rodar o Projeto
Siga as etapas abaixo para rodar a aplicação localmente.

1. Clonar o repositório
Primeiro, clone o repositório para sua máquina local.

bash
Copiar
Editar
git clone https://github.com/jorgebbastos/appprojetofaculdade.git
2. Instalar as dependências
Dentro da pasta do projeto, instale as dependências necessárias utilizando o npm ou yarn.

bash
Copiar
Editar
npm install
Ou, caso esteja usando o yarn:

bash
Copiar
Editar
yarn install
3. Rodar o servidor de desenvolvimento
Após as dependências serem instaladas, inicie o servidor de desenvolvimento.

bash
Copiar
Editar
npm start
Ou, caso esteja usando o yarn:

bash
Copiar
Editar
yarn start
Isso iniciará a aplicação, e você poderá acessá-la em http://localhost:3000.

4. Acessando as rotas
Página Styled Components: http://localhost:3000/styled

Página Tailwind CSS: http://localhost:3000/tailwind

Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

bash
Copiar
Editar
/src
  /components        # Componentes reutilizáveis
  /pages            # Páginas principais da aplicação
  /styles           # Arquivos de estilos, como o Tailwind e Styled Components
  /services         # Funções para lidar com as requisições à API do GitHub
  /App.tsx          # Componente principal que define as rotas
  /index.tsx        # Ponto de entrada da aplicação
