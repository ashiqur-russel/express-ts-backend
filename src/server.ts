import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { registerRoutes } from './modules';
import connectDatabase from './config/database.config';
import { Logger } from './middlewares/logger';
import config from './config';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';

dotenv.config();

const app = express();
const PORT = config.port;

app.use(cors());
app.use(bodyParser.json());
app.use(Logger);

connectDatabase();

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// this route is testing purpose to check Authguard and Role Guard
app.get('/admin', AuthGuard, RoleGuard('admin'), (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

// Register Module Routes
registerRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
