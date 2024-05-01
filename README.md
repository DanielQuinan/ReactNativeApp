# ReactNativeApp
Aplicativo para as aulas de Laboratório de Desenvolvimento de Aplicativos Híbridos e Laboratório de Desenvolvimento de Aplicativo Nativos

## Dependências
* Node
* Expo
* React Native

## Inicialização
### Backend
Dentro da pasta backend, execute no terminal:
```
npm install
```
Isso irá instalar todas as dependências necessárias.

No arquivo .env.example, inclua a URI do Mongo_DB e seu token do JWT de escolha. Então, renomeie o arquivo para .env

Execute o seguinte código para executar a aplicação em modo Development:
```
npm run dev
```

### Frontend
Dentro da pasta frontend, execute em outro terminal:
```
npm install
```
Então, no código do arquivo App.js, nas linhas 22 e 43, inclua seu IPV4 no lugar definido.
Então, execute no terminal
```
npx expo start
```
Certifique que o terminal do backend continua aberto, executando a aplicação.
Seu código estará funcionando no celular que você escanear seu QRCode.

## Requests
Para a realização de requisições, foi utilizado o postman.

### GET de usuários
```
http://localhost:3000/api/users
```
Requisição para retornar usuários cadastrados

### POST de cadastro
```
http://localhost:3000/api/users
```
No corpo raw e json
```
{"name": "nome",
"email": "email@email.com",
"password": "senha"
}
```

### POST de login
```
http://localhost:3000/api/users/id
```
No corpo raw e json
```
{
"email": "email@email.com",
"password": "senha"
}
```

### PUT de atualização de usuário
```
http://localhost:3000/api/users/id
```
No corpo raw e json
```
{"name": "nome",
"email": "email@email.com",
"password": "senha"
}
```

### DELETE de usuário
```
http://localhost:3000/api/users/id
```

## Considerações Finais
* O programa usa quanto Expo quanto React Native, portanto, o Async é uma dependência do React Native
* Como o JWT não é apropriado para autorizações, o programa ainda não usa autorizações. Uma razão para isso seria que para a implementação, causaria problemas de segurança e funcionamento para o programa.
* A tela de login é simples, com um botão de cadastro, onde cadastra o e-mail e senha, e um botão de login, que realiza o login e alerta login realizado.


