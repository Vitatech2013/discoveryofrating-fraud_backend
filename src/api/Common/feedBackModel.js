import mongoose from 'mongoose'

const sendFeedbackSchema = new mongoose.Schema({
    username: {
        type: String
    },
    appname: {
        type: String
    },
    feedback: {
        type: String
    },
    date: {
        type: String
    }
},
    {
        timestamps: true
    });

const sendFeedbackModel = mongoose.model('Feedback', sendFeedbackSchema)

export default sendFeedbackModel