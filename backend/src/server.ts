// Express
import express from 'express';
const app = express();
app.listen(3333, () => console.log('Server is running'));

// Routing
import { drawRouter } from './routes/draw.routes';
app.use("/draw", drawRouter);

