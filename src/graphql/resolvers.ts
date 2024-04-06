import { Product } from '../models/product';
import prisma from '../db/db';
import { CustomRequest } from '../auth/customRequest';

const resolvers = {
  Query: {
    products: async (): Promise<Product[]> => {
      return await prisma.product.findMany();
    },
    product: async (_: any, { id }: { id: number }): Promise<Product | null> => {
      return await prisma.product.findUnique({ where: { id } });
    },
  },
  Mutation: {
    createProduct: async (_: any, { name, price }: Product, {req}: {req: CustomRequest}): Promise<Product> => {
      return await prisma.product.create({ data: { name, price, user: {connect:{ email: req.user.email}} } });
    },
    updateProduct: async (_: any, { id, name, price }: Product): Promise<Product | null> => {
      return await prisma.product.update({
        where: { id },
        data: { name, price },
      });
    },
    deleteProduct: async (_: any, { id }: { id: number }): Promise<Product | null> => {
      return await prisma.product.delete({ where: { id } });
    },
  },
};

export default resolvers;