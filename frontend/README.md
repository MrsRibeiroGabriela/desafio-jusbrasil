# JusInfo - Frontend

- O projeto de frontend foi construido em:
  - React.js(bootstrapped with [Create React App]).
  - TailwindCSS
  - Axios
  - Jest 
  - Cypress

- Para instalação: 
### `npm i`

- Para executar:
### `npm start`

- Abra [http://localhost:3000](http://localhost:3000) para visualizar a home no browser.

Nesse projeto, os usuários são apresentados a 3 páginas de navegação: 
  - Home: usuário poderá selecionar se deseja perquisar uma lista de processo por tribunal ou se deseja perquisar diretamente pelo número do processo (CNJ).

  - ListRecordsByCourt: uma lista de todos os processos relacionados ao tribunal selecionado será mostrada na página e disponibilizará um botão de acesso aos detalhes do processo. 

  - RecordByCNJ: apresenta um registro com os detalhes e uma lista das movimentações feitas no andamento do processo por ordem da mais recente movimentação à mais antiga. 

**Note: A barra de pesquisa estará disponível nas 3 páginas, possibilitando ao usuário o acesso por tribunal ou por cnj a qualquer momento.**

## Testes unitário

### `npm run test`

## Testes e2e - Cypress

### `npm run test:e2e`
