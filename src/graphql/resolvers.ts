import { Product } from '../models/product';
import prisma from '../db/db';
import { CustomRequest } from '../auth/customRequest';
import { Context } from '../context';
import { deleteProduct, findProduct, listProduct, upsertProduct } from '../services/productService';

const resolvers = {
  Query: {
    products: async (_: any,__: any,context: Context): Promise<Product[]> => {
      return await listProduct(context); 
    },
    product: async (_: any, { id }: { id: number }, context: Context): Promise<Product | null> => {
      return await findProduct(context, id);  
    },
  },
  Mutation: {
    createProduct: async (_: any, { name, price }: Product, context: Context): Promise<Product> => {
      return await upsertProduct(context, { name, price });      
    },
    updateProduct: async (_: any, { id, name, price }: Product, context: Context): Promise<Product | null> => {
      return await upsertProduct(context, { id, name, price });      
    },
    deleteProduct: async (_: any, { id }: { id: number }, context: Context): Promise<Product | null> => {
      return await deleteProduct(context, id);  
    },
  },
};

export default resolvers;