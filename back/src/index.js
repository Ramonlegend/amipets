import express from 'express';
import petRoutes from './routes/pet.routes.js';

const app = express();
app.use(express.json());
app.use('/api', petRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor rodando na porta localhost:${PORT}`),
);
