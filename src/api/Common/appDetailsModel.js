import mongoose from 'mongoose'

const appdetails = new mongoose.Schema({
    appid: {
        type: String
    },
    appname: {
        type: String
    },
    appdescription: {
        type: String
    },
    category: {
        type: String
    },
    compactabulity: {
        type: String
    },
    updatedversion: {
        type: String
    },
    updationdate: {
        type: String
    },
    memorysize: {
        type: String
    },
    language: {
        type: String
    },
    seller: {
        type: String
    },
    appprice: {
        type: String
    },
    appimage: {
        type: String
    },
    uploadapps: {
        type: String
    }
},
    {
        timestamps: true
    });

const appdetailsModel = mongoose.model('appDetails', appdetails)

export default appdetailsModel