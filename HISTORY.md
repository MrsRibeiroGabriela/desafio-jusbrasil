# Histórico de decisões e desenvolvimento:
Recebi o desafio na data de 06/04/2023 e com prazo para término de 1 semana. 

## Brainstorm inicial: 
- Ux research: Desk Research e Benchmarking (análise de concorrentes)
Decidi começar o projeto usando essas técnicas para melhor compreender o produto a ser desenvolvido e as dores dos usuários, focar em descobertas sobre o mercado e concorrentes diretos ou indiretos. 
- Avaliei as funcionalidades e, principalmente, a usabilidade. Entre os achados ficou nítido que há uma variedade de ferramentas disponíveis para Consulta Processoal, no entanto, há uma grande dificuldade de apresentar uma plataforma intuitiva e centrada em proporcionar uma boa experiência para o usuário. 
- Tendo essa análise feita, iniciei um rabiscoframe para estabelecer alguns fluxos e prototipação de baixa fidelidade de telas. 
- Estabeleci alguns parâmetros para os rudimentos do System Design: esquema de cores, font-family, tipografia

## Desenvolvendo o backend
- Desenvolvi a API com NodeJs e Express, usando Postman para os testes de chamada: 
[Postman link](https://elements.getpostman.com/redirect?entityId=23381075-20661dc6-b1c3-42b8-8020-e7384c38c890&entityType=collection)

## Desenvolvendo o frontend
- Para o frontend, decidi utilizar a lib e estrutura de React mais tradicional (npx create-react-app) que vinha utilizando nas minhas últimas experiências profissionais.
- Na pasta src é possível encontrar: 
  - components (pastas em que poderá acessar os componentes e seus testes unitários);
  - routes (esquema de rotas);
  - pages (estrutura das páginas do projeto: home com formulário de busca de listagem por tribunal ou CNJ, página de exibição de listas de processos por tribunal e página de exibição dos detalhes dos projetos por CNJ);
  - utils (encontram-se arquivos de reutilização das configurações do Axios e das configurações de transições)
- Para estilizar, decidi utilizar o TailwindCSS para dar celeridade ao processo e promover uma boa experiência visual mesmo em um MVP. Apesar de não ter tanta intimidade com esse framework, decidi me desafiar seguindo as orientações da documentação oficial.
- Ainda pensando em estilização e boa experiência ao usuário, fiz uso do framer-motion um biblioteca de animações que proporciona transições mais suaver entre as páginas e na exibição de componentes. 
- Para o formulário de busca, utilizei o Formik e validação com o Yup.
- Para o campo do número de processo, achei importante apresentar uma máscara para guiar o usuário. Para isso, utilizai o react-input-mask.

## Testes unitários e e2e do frontend: 
- Implementei alguns testes unitários com Jest no e e23 utilizando o Cypress no frontend.
- Para rodar os teste unitários implementado: npm run test
- Para rodar os testes e2e do Cypress implemtados: npm run test:e2e

## Para o futuro: 

- Design e Frontend: 
  - Protótipo de alta fidelidade no figma.
  - Melhorar responsividade 
  - Criar um configuração de modo escuro (dark mode), pois uma vez que se trata de uma plataforma de acesso e leitura de processo, é agradável e mais acessível aos usuários.
  - Acrescentar novas validações e mensagens de feedbacks aos usuários com toast notes.
  - Implementar novos testes unitários e e2e para dar maior cobertura e segurança para mudanças futuras no projeto.
  - Organizar o armazenamento de estados da aplicações em uma store com Redux.

- Backend:
  - Implementar novas validações e testes em Jest e Supertest .
  - Substuir a chamada mockada no arquivo `database\db.js` para um database relacional.
  - Novas rotas para prover o CRUD por completo e autenticação

Screenshots: 

![home](https://user-images.githubusercontent.com/88353217/231630584-139e0790-0019-4395-9264-01d0d5486a62.png)
![home-seo](https://user-images.githubusercontent.com/88353217/231630592-88096d7d-b1ef-46e3-82f8-046339c68ae0.png)
![recordByCNJ](https://user-images.githubusercontent.com/88353217/231630597-b22952ce-82c6-47f7-9e6d-752cf8efcf4d.png)
![recordsByTR](https://user-images.githubusercontent.com/88353217/231630598-f3907095-38ac-4efc-aea9-3a80d85e5a61.png)
![seo-home](https://user-images.githubusercontent.com/88353217/231630600-d58825ca-b134-4974-bb42-4d179b047e72.png)
