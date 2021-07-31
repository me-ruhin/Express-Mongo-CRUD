const {Schema,model} = require('mongoose')

const postSchema =  new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    body:{
        type:String,
        required:true,
        minlength:50,
        maxlength:3000
    },
    author:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
})


const Post = model('Post',postSchema)

module.exports = Post