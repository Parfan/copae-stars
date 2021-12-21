// Express
import express from 'express';
const app = express();
app.listen(3333, () => console.log('Server is running'));

// Body parser
import bodyParser from 'body-parser';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Routing
import { drawRouter } from './routes/draw.routes';
app.use("/draw", drawRouter);

