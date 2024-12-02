
import express from 'express'
import { createHandler } from 'graphql-http/lib/use/express';
import { dbConnection } from './database/dbConnection.js';


import { userSchema } from './src/user/schema.js';
import playGround from "graphql-playground-middleware-express"

const expressPlayground = playGround.default
const app = express()
const port = 3000


dbConnection()
app.use('/graphQl',createHandler({schema:userSchema}))
app.get("/gui" , expressPlayground({endpoint: '/graphQl'}))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))