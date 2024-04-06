import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import fs from 'fs';
import path from 'path';
import authMiddleware from './auth/authMiddleware';
import prisma from './db/db';
import { generateToken } from './auth/jwt';
import resolvers from './graphql/resolvers';
import { Product } from './models/product';
import restRoutes from './routes/restRoutes';

const app = express();
const schemaString = fs.readFileSync(path.join(__dirname, 'graphql', 'schema.graphql'), 'utf8');

const schema = makeExecutableSchema({
    typeDefs: schemaString,
    resolvers: resolvers,
});


app.use(express.json());
app.get('/', (req, res) => {    
    res.json({ status: "Active" });
  });
app.use('/api', restRoutes);
app.use('/graphql', authMiddleware);
app.use(
    '/graphql',
    graphqlHTTP((req)=>({
        schema: schema,
        graphiql: true,
        context: { prisma,req }
    }))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});