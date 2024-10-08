const express = require('express')
const NumerRouters = require('./Routers/ApiNumer')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const conectDB = require('./Models/config/db')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')
// const swaggerAutogen = require('./Swagger');

conectDB()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))

readdirSync('./Routers').map((r)=>app.use('/api',require('./Routers/' + r)))

app.listen(5000,()=> console.log('Server is running on port 5000'))