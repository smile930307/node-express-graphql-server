var express = require('express');
// const {ExpressGraphql} = require('express-graphql');
const expressGraphQL = require('express-graphql').graphqlHTTP
var { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
var root = {
    message: () => 'Hello World!'
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', expressGraphQL({
    schema: schema,
    rootValue: root,
    graphiql: true
}) 
);

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));