import express, { Request } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import fs from 'fs';
import path from 'path';
import authMiddleware from './auth/authMiddleware';
import resolvers from './graphql/resolvers';
import restRoutes from './routes/restRoutes';
import {  getContext } from './context';

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

app.use('/graphql', authMiddleware);
app.use(
    '/graphql',
    graphqlHTTP((req: any)=>({
        schema: schema,
        graphiql: true,
        context: getContext(req)
    }))
);

app.use('/api', restRoutes);

// let purgeSchedule = process.env.PURGE_SCHEDULE;
// if (!purgeSchedule) {purgeSchedule='0 0 * * * *';}
// schedule.scheduleJob('0 0 3 1 * *', function() {
//     prisma.user.deleteMany();
//     prisma.product.deleteMany();   
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});