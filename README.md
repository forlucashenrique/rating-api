# Rating API


### Esta é uma simples API de avaliações usando Node.js, Express, MongoDB, Typescript, Swagger and Jest.

#
### Guia de instalação

Primeiro, instale o mongodb community server: [MongoDB Community Server Download](https://www.mongodb.com/try/download/community-kubernetes-operator)

Logo após, execute os comandos:
``` 
    git clone 'https://repo-url'
```

Dentro do repositório do projeto, execute: 
``` 
    npm install
```

## Config (.env)

No **.env.example** estão descritas as variáveis de ambiente. 
``` 
    DATABASE_URL=
    JWT_SECRET=
    PORT=
```
Por padrão, o mongodb utiliza a url *"**mongodb://localhost:27017/mydatabase**"* para acessar o banco de dados **mydatabase** localmente caso ele exista, caso não, o mongo o cria automaticamente assim que executa uma operação de banco de dados. Sugiro utilizar a url acima. 

**Deixo como sugestão os outros valores**
```
PORT=3333
JWT_SECRET=04c7fafe0738f10dbf129edfdd4df34f5f8379a64eafe912c597199f9d266701
```

Por fim, execute para iniciar a API: 

``` 
    npm run dev
```

Para executar os testes, execute: 
``` 
    npm run test
```

**Documentação da API:** *localhost:{port}/api-docs*
