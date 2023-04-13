# JusInfo - Backend

- O projeto do backend foi construido em Node.js(v16.18.0) e Express

- Para instalação: 
### `npm i`

- Para executar 
### `npm start`

- O servidor estará rodando na porta 3001: 
http://localhost:3001/api/records

Nesse projeto, os processos foram cadastrados com dados fake e possuindo os seguintes dados:

- Número CNJ no formato `NNNNNNN-NN.NNNN.N.NN.NNNN` Ex.: 5001682-88.2020.8.13.0672;
- Nome das partes (Autor x Réu);
- Tribunal de origem (Ex.: TJSP);
- Data de início;
- Movimentações;
  - Data;
  - Descrição;