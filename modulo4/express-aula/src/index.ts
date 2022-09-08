import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json()) //pegar os dados do usuario e converter para objeto
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in port 3003")
})