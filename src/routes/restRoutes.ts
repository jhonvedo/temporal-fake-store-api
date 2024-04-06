import express, { Request, Response } from 'express';
import authMiddleware from '../auth/authMiddleware';
import prisma from '../db/db';
import { generateToken } from '../auth/jwt';
import { Product } from '../models/product';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }
  const token = generateToken({ id: user.id, email: user.email });
  res.json({ token });
});


router.use(authMiddleware);


router.get('/products', async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
});


router.post('/products', async (req: Request, res: Response) => {
  const { name, price } = req.body;
  //@ts-ignore
  const { email } = req.user;
  const product = await prisma.product.create({ data: { name, price, user: {connect: {email: email}} } });
  res.json(product);
});


router.put('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(id, 10) },
    data: { name, price },
  });
  res.json(updatedProduct);
});


router.delete('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedProduct = await prisma.product.delete({
    where: { id: parseInt(id, 10) },
  });
  res.json(deletedProduct);
});

export default router;