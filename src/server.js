import http from 'http'

// -HTTP
// -Método HTTP
// - URL

//GET => Buscar um recurso do back-end
//POST => Criar um recurso no back-end
//PUT => Atualizar um recurso no back-end
//PATCH => Atualizar um recurso específico do back-end
//DELETE => Deletar um recurso do back-end

//Stateful - Aplicações que guardam dados em memória, sendo que se o site cair, seu funcionamento será modificado.
//Stateless - Aplicações que não armazenam dados em memória e sim em bancos de dados.

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            nome: 'joão',
            email: 'joao@exemple.com'
        })


        res.writeHead(201).end()
    }
    
    return res.end('Hello world')
})

server.listen(3333)