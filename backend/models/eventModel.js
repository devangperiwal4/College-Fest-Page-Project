const mongoose = require('mongoose')

const eventSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        time: {
            type: Date,
            required: [true, 'Please add the time'],
        },
        venue: {
            type: String,
            required: [true, 'Please add a name'],
        },
        sponsors:[{
            type:String,
        }],
        budget:{
            type: Number,
            required: [true, 'Please add the budget field']
        },
        payments:[{
            name: {
                type:String,
            },
            payment:{
                type: Number,
            }
        }],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Event',eventSchema)