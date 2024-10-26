// src/controllers/PetController.js
import { PrismaClient } from '@prisma/client';
import Pet from '../entities/pet.entity.js';

const prisma = new PrismaClient();

class PetController {
  static async createPet(req, res) {
    const { nome, especie, dataNascimento, descricao, tamanho, personalidade } =
      req.body;

    try {
      const newPet = await prisma.pet.create({
        data: {
          nome,
          especie,
          dataNascimento,
          descricao,
          tamanho,
          personalidade,
        },
      });
      res.status(201).json(new Pet(newPet));
    } catch (error) {
      console.error(error); // Adicione logs para ajudar no debug
      res.status(500).json({ error: 'Erro ao criar o pet.' });
    }
  }

  // Outros métodos para listar, atualizar e excluir pets...
}

export default PetController; // Certifique-se de que está exportando como exportação padrão
