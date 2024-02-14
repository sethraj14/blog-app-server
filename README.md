# Blog Backend System

This backend system serves as the API for a blogging platform, built with Node.js, Express, Sequelize ORM, and Apollo Server for GraphQL. It supports operations such as creating, fetching, and caching blog posts.

## Features

- GraphQL API for creating and fetching blog posts.
- PostgreSQL database integration using Sequelize ORM.
- Redis caching for blog post queries.
- Error handling and security enhancements with Helmet.js.

## Prerequisites

Before running this project, ensure you have the following installed:
- Node.js (LTS version recommended)
- PostgreSQL
- Redis
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sethraj14/blog-app-server.git
   cd blog-app-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env` file in the root directory with the following content (update values based on your environment):

   ```plaintext
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_SSL_CA=path_to_your_ssl_certificate
   REDIS_URI=your_redis_uri
   PORT=3000
   ```

4. Initialize the database:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the server:

   ```bash
   npm start
   ```

   Your server should now be running and accessible at `http://localhost:3000` or the next available port if 3000 is busy.

## API Contracts

### GraphQL Endpoints

- **Create Blog Post**

  - **Mutation**: `createBlogPost(title: String!, content: String!, author: String!): BlogPost`
  - **Description**: Creates a new blog post.
  - **Arguments**:
    - `title`: Title of the blog post.
    - `content`: Content of the blog post.
    - `author`: Author of the blog post.

- **Get All Blog Posts**

  - **Query**: `getAllBlogPosts: [BlogPost]`
  - **Description**: Fetches all blog posts.

- **Get Blog Post by ID**

  - **Query**: `getBlogPost(id: ID!): BlogPost`
  - **Description**: Fetches a single blog post by its ID.
  - **Arguments**:
    - `id`: ID of the blog post.

### Sample GraphQL Query

```graphql
query {
  getAllBlogPosts {
    id
    title
    content
    author
    createdAt
  }
}
```

### Sample GraphQL Mutation

```graphql
mutation {
  createBlogPost(title: "New Blog Post", content: "This is the content of the new blog post.", author: "John Doe") {
    id
    title
    content
    author
  }
}
```

## Deployment

This application is deployed at [https://blog-app-server-hmmp.onrender.com](https://blog-app-server-hmmp.onrender.com) with auto-deployment setup. Any commits to the main branch will trigger a new deployment.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
