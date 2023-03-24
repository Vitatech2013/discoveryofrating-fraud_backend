import mongoose from 'mongoose'

const sendRatingSchema = new mongoose.Schema({

    appname: {
        type: String
    },

    username: {
        type: String
    },
    rating: {
        type: String
    },
    status: {
        type: String
    }
},
    {
        timestamps: true
    });

const sendRatingModel = mongoose.model('addRatings', sendRatingSchema)

export default sendRatingModel