const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({

    title: {
        type: String,
        required: true

    },
    description:{
        type: String,
        required: true

    },
    date:{
        type: Date,
        default: Date.now

    }

})

const Post = mongoose.model('ninja', postSchema)
module.exports = Post