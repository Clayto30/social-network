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
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
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
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        // module 18.2.7 has information on date formatting
        type: Date,
        default: Date.now
        // date, set default value to the current timestamp, use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
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
