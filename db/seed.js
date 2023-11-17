const { db } = require("./connection.js")
const { Comment, Like, Post, Profile, User } = require("../models")
const { seedComments, seedLikes, seedPosts, seedProfiles, seedUsers } = require("./seedData.js")



async function seed() {
    await db.sync({ force: true})

    await Comment.bulkCreate(seedComments)
    await Like.bulkCreate(seedComments)
    await Post.bulkCreate(seedPosts)
    await Profile.bulkCreate(seedProfiles)
    await User.bulkCreate(seedUsers)
}

seed()