import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import CONFIG from './utils/config.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/', routes);
app.listen(CONFIG.PORT, () => console.log(`Server is running on port ${CONFIG.PORT}`));
