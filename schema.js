const { gql } = require('apollo-server-express');

const typeDefs = gql`
type BlogPost {
    id: ID!
    title: String!
    content: String!
    createdAt: String
    updatedAt: String
}

type Query {
    getAllBlogPosts: [BlogPost]
    getBlogPost(id: ID!): BlogPost
}

type Mutation {
    createBlogPost(title: String!, content: String!): BlogPost
}
`;

module.exports = typeDefs;
