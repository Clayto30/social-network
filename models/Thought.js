const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            // required
            // 280 character maximum
        },
        username: {
            type: String
            // required
        },
        createdAt: {
            // module 18.2.7 has information on date formatting
            type: Date,
            default: Date.now
            // date, set default value to the current timestamp, use a getter method to format the timestamp on query
        }
    }
)

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
        // String, required, must be between 1 and 280 characters
    },
    createdAt: {
        // module 18.2.7 has information on date formatting
        type: Date,
        default: Date.now
        // date, set default value to the current timestamp, use a getter method to format the timestamp on query
    },
    username: {
        type: String
        // the user that created this thought, string, required
    },
    reactions: [ReactionSchema]
    // these are like replies, array of nested documents created with the reactionSchema
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

