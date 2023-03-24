import mongoose from 'mongoose'

const userDetailsSchema = new mongoose.Schema({

    name: {
        type: String
    },
    password: {
        type: String
    },
    mobileno: {
        type: String
    },
    emailid: {
        type: String
    },
    address: {
        type: String
    },
    qualification: {
        type: String
    },
    dob: {
        type: String
    }
},
    {
        timestamps: true
    });

const UsersModel = mongoose.model('userDetails', userDetailsSchema)

export default UsersModel