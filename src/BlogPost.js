const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const BlogPost = sequelize.define('BlogPost', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Title must not be empty' },
        },
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Content must not be empty' },
        },
    },
    author: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Author must not be empty' },
        },
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
});

module.exports = BlogPost;
