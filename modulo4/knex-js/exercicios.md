EXERCICIO 1

a) Explique como é a resposta que temos quando usamos o raw. 

    O raw, além de retornar as informações que você quer, também mostra informações extras sobre as requisições, que muitas vezes não são importantes no momento.

b) Faça uma função que busque um ator pelo nome;

    const actorName = await connection("Actor").where({name:name})

c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

    let result = undefined

        if (gender === "female") {
         result = await connection("Actor").count().where({ gender: gender })
        }

        else if (gender === "male") {
         result = await connection("Actor").count().where({ gender: gender })
        }

        res.status(200).send(result)

Exercício 2

a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

    await connection("Actor")
            .update({
                salary: req.body.salary,
            })
            .where({
                id: req.query.id,
                salary: req.query.salary
    })

b) Uma função que receba um id e delete um ator da tabela

    const id = req.params.id

    await connection("Actor").delete().where({id:id})

    res.status(200).send("Ator deletado")


c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender



Exercício 3

a) Crie um endpoint com as especificações acima
- Usar a função `get` do express
- Definir o *path param* com a **chave id: `/actor/:id`


        app.get("/actor/:id", async (req: Request, res: Response) => {
        try {

        const id = req.params.id
        const actorId = await connection("Actor").where({ id: id })
        console.log("entrei")

        res.send(actorId)
        } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
        }
        })

b) Crie um endpoint agora com as seguintes especificações:
- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

        app.get("/countactor", async (req: Request, res: Response) => {
        try {
        const gender = req.query.gender
        let result = undefined

        if (gender === "female") {
            result = await connection("Actor").count().where({ gender: gender })
        }

        else if (gender === "male") {
            result = await connection("Actor").count().where({ gender: gender })
        }

        res.status(200).send(result)

        } catch (error: any) {
        console.log(error)
        res.status(500).send("Unexpected error")
        }
        })


EXERCICIO 4

Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, devemos:

- Definir o método como `POST`
- Criar um path: `/actor`
- Receber os parâmetros pelo body
    
        app.post("/actor", async (req: Request, res: Response) => {
        try {
        await connection("Actor")
            .insert({
                id: Date.now().toString(),
                name: req.body.name,
                salary: req.body.salary,
                birth_date: req.body.birth_date,
                gender: req.body.gender
            })


        res.status(201).send("O usuario foi inserido");
        } catch (error) {
        console.log(error)
        res.status(500).send("Um erro inesperado aconteceu")
        }
        })

Crie um endpoint para cada uma das especificações abaixo:

- a) Endpoint para atualizar salário com id
    - Deve ser um PUT (`/actor`)
    - Receber o salário e o id pelo body
    - Simplesmente atualizar o salário do ator com id em questão


            app.put("/actor", async (req: Request, res: Response) => {
            try {
            await connection("Actor")
            .update({
                salary: req.body.salary,
            })
            .where({
                id: req.query.id,
                salary: req.query.salary
            })

            res.send("Ator atualizado");
            } catch (error) {
            console.log(error)
            res.status(500).send("Um erro inesperado aconteceu")
            }
            })

- b) Endpoint para deletar ator da tabela

        app.delete("/actor/:id", async (req: Request, res: Response) => {
        try {
        const id = req.params.id

        await connection("Actor").delete().where({ id: id })

        res.status(200).send("Ator deletado")
        } catch (error: any) {
        console.log(error)
        res.status(500).send("Unexpected error")
        }
        })