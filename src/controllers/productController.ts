import { Request, Response } from 'express';
import prisma from '../db/db';
import { Product } from '../models/product';

const getProductById = async (req: Request, res: Response): Promise<void> => {
  const productId: number = parseInt(req.params.id);

  try {
    const product = await prisma.product.findUnique({ where: { id: productId } });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Implementa los demás controladores para el CRUD de productos

export { getProductById };