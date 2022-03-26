PROJETO GATRY CLONE

## Front-end = Pasta "Web"
    Versão do Node: 16.14.0
    Versãdo do ReactJS: 17.0.2
    PORTA: 3000

## JSON server fake API = Pasta "gatry-api"
    Versão do Node: 16.14.0
    Versão do JSON server: 0.16.1
    PORTA: 5000

## COMO EXECUTAR
É preciso a instalação do NodeJS na versão: 16.14.0 para a execução desse projeto, caso sua versão seja diferente utilize o nvm para utilizar uma versão alternativa do node para utlizar neste projeto

Execute o comando npm install (ou yarn install se vc utiliza o yarn) no terminal para a pasta 'gatry-api' para instalar as dependências da API.
Execute o comando npm install (ou yarn install se vc utiliza o yarn) no terminal para a pasta 'web' para instalar as dependências do front.

Após a instalação execute o comando npm (ou yarn) start na pasta 'gatry-api'.
E em uma outra janela do terminal execute o comando npm (ou yarn) start na pasta 'web'.

O front-end está rodando na porta 3000, e pode ser acessado no seu navegador através da URL:
http://localhost:3000

A API fake pode ser acessada pela url:
http://localhost:5000/promotions?_embed=comments
