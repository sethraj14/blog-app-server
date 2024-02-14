const express = require('express');
const helmet = require('helmet');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    app.use(helmet());
    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`));
}


startApolloServer(typeDefs, resolvers);


