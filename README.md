# Desafio: Consulta Processual

Olá! Esse desafio técnico tem como propósito medir suas habilidades, ver como estuda, pensa e se organiza na prática. O tempo de término é livre, porém o ideal é que não demore muito mais do que uma semana, já que as circunstâncias para a vaga podem mudar.

Após finalizar o desafio, nos envie um link para repositório do projeto ou um zip com o código.

**Registre tudo**: testes que forem executados, ideias que gostaria de implementar se tivesse tempo (explique como você as resolveria, se houvesse tempo), decisões que forem tomadas e seus porquês, arquiteturas que forem testadas e os motivos de terem sido modificadas ou abandonadas. Crie um arquivo `COMMENTS.md` ou `HISTORY.md` no repositório para registrar essas reflexões e decisões.

============
#### Dicas
- Use ferramentas e bibliotecas open source, mas documente as decisões e porquês;

- Automatize o máximo possível;

- Em caso de dúvidas, pergunte.

Boa sorte!

## Considerações Gerais

O problema aqui descrito tem algumas constraints:

a) Eu preciso conseguir rodar seu código em um Mac OS X OU no Ubuntu;

b) Devemos ser capazes de rodar o seu código no nosso ambiente local;

Considere que o meu usuário não é root, porém tem permissão de sudo. 
Temos instalado no nosso sistema: Java, JavaScript (Node), Scala, Python e Go. Qualquer outra dependência que eu precisar você tem que prover.

O repositório contém algumas imagens de exemplo para implementação da parte Web, elas são apenas referências então sinta-se livre para segui-las ou criar sua própria interface.

## O Desafio

Você deve implementar duas páginas principais:

- Uma página de consulta processual (busca); e
- uma página de processos (exibição) 

Seu sistema deve rodar na Web utilizando **ReactJs** no front-end + backend usando a linguagem de programação e ferramentas open source da sua preferência.

### Persistência

O armazenamento dos dados fica à seu critério, você pode usar um banco de dados opensource à sua escolha e fornecer uma forma de popular o banco ou até mesmo fazer com que sua API entregue os dados de um arquivo JSON já populado na pasta do projeto. 

Se optar por usar um banco de dados você precisa me fornecer um meio automatizado de popular ele para testar seu projeto sem que eu precise cadastrar os processos um a um.

### O processo

Nesse desafio os processos podem ser cadastrados com dados fake e devem possuir os seguintes dados:

- Número CNJ no formato `NNNNNNN-NN.NNNN.N.NN.NNNN` Ex.: 5001682-88.2020.8.13.0672;
- Nome das partes (Autor x Réu);
- Tribunal de origem (Ex.: TJSP);
- Data de início;
- Movimentações;
  - Data;
  - Descrição;

### Busca

A página de busca consiste em pelo menos um campo para o usuário preencher o número do processo. Abaixo você pode conferir o desenho de um exemplo, mas fique livre para implementar a interface da maneira que preferir, use-a apenas como um guia.

![image](https://user-images.githubusercontent.com/549412/181397734-a5c77623-ba71-40ce-8396-e121034466b9.png)

### Exibição

Nessa página devem ser exibidos todos os dados do processo

![image](https://user-images.githubusercontent.com/549412/181397867-9bc31ac1-bbed-4b6b-ab07-76814f7d02e3.png)

### Alguns pontos que serão analisados:

- Organização do código
- Testes
- Facilidade ao rodar o projeto