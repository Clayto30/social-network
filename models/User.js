const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String
        // string, unique, required, trimmed
    },
    email : {
        type: String
        // string, required, unique, must match a valid email address (look into Mongoose's matching validation)
    },
    thoughts: [],
        // array of _id values referecing the Thought model
    friends: []
        // array of _id values referecing the User model (self-reference)
    // create a virtual that retrieves the length of the user's friends array field on query

});

const User = model('User', UserSchema);

module.exports = User;