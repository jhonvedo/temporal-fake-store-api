import { Context } from "../context";
import { Product } from "../models/product";
import { Product as PrismaProduct, Prisma } from "@prisma/client";


export const upsertProduct = async (context: Context, { id, name, price }: Product):Promise<PrismaProduct>=>{
    if(!!id){
        const existingProduct = await context.prisma.product.findFirst({
            where: {
                id,
                user: {
                    email: context.request.user.email
                }
            }
        });
        if(!existingProduct){
            throw new Error("Product does not exist");
        }
    }
    
    return await context.prisma.product.upsert({ 
        where: { id },
        create: { name, price, user: { connect: { email: context.request.user.email } } } ,
        update: { name, price } 
    });
}

export const deleteProduct = async (context: Context, id: number):Promise<PrismaProduct>=>{
    return await context.prisma.product.delete({where: {id}})
}

export const listProduct = async (context: Context, where?: Prisma.ProductWhereInput,take?: number,skip?: number):Promise<PrismaProduct[]>=>{
    if(!where){
        where = {};
    }
    where.user = { email: context.request.user.email };
    return await context.prisma.product.findMany({where,take,skip});
}

export const findProduct = async (context: Context, id: number):Promise<PrismaProduct|null>=>{
    return await context.prisma.product.findFirst({where: {id, user: { email: context.request.user.email }}});
}