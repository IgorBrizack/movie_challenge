
# :movie_camera: Movie Challenge API

Esse projeto foi um desafio técnico proposto durante o processo de recrutamento de uma empresa. 

Desafios propostos: 
- Desenvolver um sistema de autenticação JWT.
- Desenvolver uma CRUD de um catálogo de filmes. Todos os endpoints dessa CRUD só devem ser consumidos por um usuário autenticado.
- Desenvolver os testes da aplicação.
- Fazer o Deploy ao finalizar a criação da API e gerar a sua documentação com o Swagger.

Ferramentas necessárias:
- TypeScript (Possuia conhecimento prévio)
- Nest.js (Não possuia conhecimento prévio)
- TypeORM (Possuia conhecimentos em ORM ex: Sequelize)
- Swagger (Não possuia conhecimento prévio)
- Docker (Possuia conhecimento Prévio)
- Redis (Não possuia conhecimento prévio)
- PostgreSQL (Possuia conhecimento prévio)

<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />
 
 Na sua máquina deve ter:
  - Sistema Operacional Distribuição Unix
  - Node
  - Docker
  - Docker-compose
  - Devem ser setadas as váriaveis de ambiente no .env da sua aplicação
 
 Clone o repositório e rode na sua máquina:

```
git clone git@github.com:IgorBrizack/movie_challenge.git
acesse o diretório...

subindo os containers...
docker-compose up -d

inicie a aplicação acessando localhost:3001/api

Atente-se que as portas das quais o container utilizam devem estar liberada.

```
 
 </details>




### Acessando Documentação 
<details>
 A Documentação da API pode ser encontrada de duas formas, através do endpoint do deploy.
 
 endpoint deploy: https://moviechallenge-production.up.railway.app/api Tempo de deploy excedido no railway, buscando outra plataforma gratuita.
 
 ou 
 
 Após rodar na sua máquina acessando o http://localhost:3000/api
 
 Nesse momento o Swagger irá renderizar com as chamadas das rotas e as sua definições.
 
 Atente-se as rotas que necessitam de um JWT para serem acessadas. O token só será retornado após a criação de um usuário e esse usuário ter feito o login.
 
</details>
