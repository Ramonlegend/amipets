// src/routes/PetRoutes.js
import express from 'express';
import PetController from '../controladores/PetController.js';

const router = express.Router();

router.post('/pets', PetController.createPet);

// Outras rotas podem ser adicionadas aqui...

// Exporte o roteador como exportação padrão
export default router;
