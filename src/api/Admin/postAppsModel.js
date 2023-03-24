import mongoose from 'mongoose'

const postAppSchema = new mongoose.Schema({
	appname: {
		type: String
	},
	description: {
		type: String
	},
	category: {
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
	appsprice: {
		type: String
	},
	appsimage: {
		type: String
	},
	uploadapps: {
		type: String
	}
}, {
		timestamps: true
	});

const postModel = mongoose.model('postapps', postAppSchema)

export default postModel