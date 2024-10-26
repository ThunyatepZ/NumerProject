const express = require('express');
const NumerRouters = require('./Routers/ApiNumer'); // ถ้ามี Router อื่น ๆ สามารถนำเข้าได้ที่นี่
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const conectDB = require('./Models/config/db');
const router = require('./Routers/Index')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// const swaggerAutogen = require('./Swagger');

conectDB();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(morgan('dev'));
app.use(cors({
    origin : true,
    credentials : true
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use('/api/',router())

app.listen(process.env.SEVER_PORT, () =>
    console.log(`Server is running on port ${process.env.SEVER_PORT}`));