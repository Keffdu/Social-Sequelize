const { db, DataTypes } = require("../db/connection.js")

let Comment;

Comment = db.define("Comment", {
    body: DataTypes.STRING,
    createAt: DataTypes.STRING
})

module.exports = Comment;