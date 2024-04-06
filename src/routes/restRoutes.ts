import express, { Request, Response } from 'express';
import authMiddleware from '../auth/authMiddleware';
import prisma from '../db/db';
import { generateToken } from '../auth/jwt';
import { Product } from '../models/product';
import { Context, getContext } from '../context';
import { deleteProduct, findProduct, listProduct, upsertProduct } from '../services/productService';

const router = express.Router();


router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'User or password invalid' });
  }
  const token = generateToken({ id: user.id, email: user.email });
  res.json({ token });
});

router.use(authMiddleware);

router.get('/products', async (req: Request, res: Response) => {
  const products = await listProduct(getContext(req));
  res.json(products);
});

router.get('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await findProduct(getContext(req), parseInt(id));
  res.json(product);
});

router.post('/products', async (req: Request, res: Response) => {
  const { name, price } = req.body;
  const product = await upsertProduct(getContext(req), { name, price });
  res.json(product);
});


router.put('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;   
  const updatedProduct = await upsertProduct(getContext(req), { id: parseInt(id), name, price });
  res.json(updatedProduct);
});


router.delete('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedProduct = await deleteProduct(getContext(req), parseInt(id));
  res.json(deletedProduct);
});


export default router;



