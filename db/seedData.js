const seedComments = [
    {
      "body": "This is a great post!",
      "createdAt": "2022-01-01T12:00:00Z"
    },
    {
      "body": "I completely agree with you.",
      "createdAt": "2022-01-02T08:30:00Z"
    },
    {
      "body": "Can you explain this point further?",
      "createdAt": "2022-01-02T10:45:00Z"
    },
    {
      "body": "Thanks for sharing your thoughts.",
      "createdAt": "2022-01-03T15:20:00Z"
    },
    {
      "body": "I have a different opinion on this topic.",
      "createdAt": "2022-01-04T09:10:00Z"
    }
]  

const seedLikes = [
    {
      "reactionType": "👍",
      "createdAt": "2022-03-20T10:00:00Z"
    },
    {
      "reactionType": "❤️",
      "createdAt": "2022-03-21T12:30:00Z"
    },
    {
      "reactionType": "😂",
      "createdAt": "2022-03-22T15:45:00Z"
    },
    {
      "reactionType": "🤔",
      "createdAt": "2022-03-23T18:10:00Z"
    },
    {
      "reactionType": "👎",
      "createdAt": "2022-03-24T20:20:00Z"
    }
]  

const seedPosts = [
    {
      "title": "Hiking in Yosemite",
      "body": "I had an amazing time hiking in Yosemite National Park!",
      "createdAt": "2022-03-15T10:30:00.000Z"
    },
    {
      "title": "London Street Photography",
      "body": "Here are some of my recent street photography shots from London.",
      "createdAt": "2022-03-18T14:15:00.000Z"
    },
    {
      "title": "New JavaScript Framework",
      "body": "I'm excited to announce the release of our new JavaScript framework!",
      "createdAt": "2022-03-21T09:00:00.000Z"
    },
    {
      "title": "Harvard Yard in the Spring",
      "body": "Spring is finally here! Here's a shot of Harvard Yard.",
      "createdAt": "2022-03-25T11:45:00.000Z"
    },
    {
      "title": "New Song Release",
      "body": "Check out my latest song on Spotify!",
      "createdAt": "2022-03-27T16:20:00.000Z"
    }
]
  
const seedProfiles = [
    {
      "bio": "I'm a software engineer",
      "profilePicture": "https://example.com/profile1.jpg",
      "birthday": "1990-06-15"
    },
    {
      "bio": "I love to travel",
      "profilePicture": "https://example.com/profile2.jpg",
      "birthday": "1985-09-28"
    },
    {
      "bio": "I'm a foodie",
      "profilePicture": "https://example.com/profile3.jpg",
      "birthday": "1992-01-10"
    },
    {
      "bio": "I'm a fitness enthusiast",
      "profilePicture": "https://example.com/profile4.jpg",
      "birthday": "1988-11-22"
    },
    {
      "bio": "I'm a musician",
      "profilePicture": "https://example.com/profile5.jpg",
      "birthday": "1995-03-01"
    }
]  

const seedUsers = [
    {
      "username": "john_doe",
      "email": "john_doe@example.com"
    },
    {
      "username": "jane_doe",
      "email": "jane_doe@example.com"
    },
    {
      "username": "bob_smith",
      "email": "bob_smith@example.com"
    },
    {
      "username": "alice_wonderland",
      "email": "alice_wonderland@example.com"
    },
    {
      "username": "tom_jones",
      "email": "tom_jones@example.com"
    }
  ]
  

module.exports = {
    seedComments,
    seedLikes,
    seedPosts,
    seedProfiles,
    seedUsers
}