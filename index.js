const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here
// User.hasOne(Profile)
// Profile.belongsTo(User)

// User.hasMany(Post)
// Post.belongsTo(User)

// Post.hasMany(Comment)
// Comment.belongsTo(Post)

// User.belongsToMany(Like, {through: "user-like"})
// Like.belongsToMany(User, {through: "user-like"})

const check = async () => {
const user = await User.findByPk(1)
const profile = await Profile.findByPk(5)
const allPosts = await Post.findAll()
console.log(user.__proto__)
await user.setProfile(profile)
await user.addPosts([allPosts[0], allPosts[1], allPosts[2]])
const user1 = await User.findOne({where: {id: 1}, include: [Profile, Post]})
console.log(JSON.stringify(user1, null, 2))
}

check()
module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}