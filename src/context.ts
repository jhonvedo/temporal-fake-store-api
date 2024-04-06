import { PrismaClient } from '@prisma/client';
import { CustomRequest } from './auth/customRequest';
import prisma from './db/db';

export interface Context {
  prisma: PrismaClient
  request: CustomRequest
}

export const getContext = (req: any): Context => ({
  prisma,
  request: req,
});