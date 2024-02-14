const redis = require('./redisClient');
const BlogPost = require('./BlogPost');

const resolvers = {
    Query: {
        async getAllBlogPosts() {
            return await BlogPost.findAll();
        },
        async getBlogPost(_, { id }) {
            const cacheKey = `blogPost:${id}`;
            const cachedBlogPost = await redis.get(cacheKey);

            if (cachedBlogPost) return JSON.parse(cachedBlogPost);

            const blogPost = await BlogPost.findByPk(id);
            if (blogPost) {
                await redis.set(cacheKey, JSON.stringify(blogPost), 'EX', 3600);
            }
            return blogPost;
        }
    },
    Mutation: {
        async createBlogPost(_, { title, content }) {
            try {
                const newPost = await BlogPost.create({ title, content });
                redis.set(`blogPost:${newPost.id}`, JSON.stringify(newPost), 'EX', 3600);
                return newPost;
            } catch (error) {
                throw new Error('Error creating a new blog post:', error);
            }
        }
    }
};

module.exports = resolvers;
