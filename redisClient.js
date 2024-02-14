require('dotenv').config();
const Redis = require("ioredis");

// Using the Redis URI from environment variables
const redis = new Redis(process.env.REDIS_URI);

module.exports = redis;
