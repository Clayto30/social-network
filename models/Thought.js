const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
        // String, required, must be between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now
        // date, set default value to the current timestamp, use a getter method to format the timestamp on query
    },
    username: {
        type: String
        // the user that created this thought, string, required
    },
    reactions: []
        // these are like replies, array of nested documents created with the reactionSchema
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

