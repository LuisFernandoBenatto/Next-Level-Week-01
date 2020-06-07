import express, { request } from 'express'; 
//Importando uma biblioteca para o código;
//npm run dev --> para executar o sercidor
const app = express();
app.use(express.json());

// GET: Buscar uma ou mais informação do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST //http://localhost:3333/users = Criar um usuário
// GET //http://localhost:3333/users = Listar usuários
// GET //http://localhost:3333/users/5 = Buscar dados do usuário com ID = 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, páginações, ......
// Resquest Body: Parâmetros para criação/atualização de informações  

const users = [
    'Diego',//0
    'Cleiton',//1
    'Robson',//2
    'Daniel'//3
];
/*******  GET  *********/
app.get('/users', (request, response)=>{
    //console.log('Listagem de Usuários');
    const search = String(request.query.search);
    //console.log(search); //Testando os search
    const filteredUsers = search ? users.filter(user => user.includes(search)): users;
    //JSON  
    response.json(filteredUsers);
    //response.send('Hello World!');
});
app.get('/users/:id', (request, response) =>{
    const id = Number(request.params.id);
    // Number converte o valor da string em um valor numerico, poís como estamos no back-end os valores são passados todos como 'texto' temos que fazer essa conversão

    const user = users[id];
    return response.json(user);
});
/*******  POST  *********/
app.post('/users', (request, response) => {
    const data = request.body;
    //console.log(data);
    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
});

app.listen(3333);
//http://localhost:3333/users

//Rota: Enderço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema


//*******Banco de dados*******/
// SELECT * FROM users WHERE name = 'Diego'  => X
// knex('users').where('name', 'Diego').select('*')  =>V


//Em 'package.json' foi configurado para o programa rodar com o comado 'npm run dev'