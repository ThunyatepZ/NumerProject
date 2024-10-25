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
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use('/api/',router())

app.listen(3000, () =>
    console.log('Server is running on port 5000'));//เปลี่ยนpath5000 to 3000เพราะ5000บนmacใช้ไม่ได้