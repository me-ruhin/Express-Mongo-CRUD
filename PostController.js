const Post = require('./Post')

exports.getAllPost = (req,res)=>{
    Post.find()
    .then(posts=>{
        res.json(posts)
    })
    .catch(error=>{
        res.json({
            message:'Error Occured'
        })
    })
} 

exports.getSinglePost = (req,res)=>{

    let {id} = req.params
    Post.findById(id)
            .then(post=>{
                res.json(post)
            })
            .catch(error=>{
                res.json({
                    message:'Error Occured'
                })
            })

} 


exports.createPost = (req,res)=>{

    let {title,body,author,status } = req.body
// console.log( req.body)
    let post = new Post({
        title,
        body,
        author,
        status 
    })
    post.save()
        .then((result)=>{
            res.json(result)
        })       
        .catch(error=>{
            res.json({
                message:'Error Occured'
            })
        })

   
} 


exports.updatePost = (req,res)=>{

    const {id} = req.params
    const {title,body,author,status } = req.body

console.log(req.body)

    let post = Post.updateOne({_id:id},{
        $set:{
        title,
        body,
        author,
        status}
    },{new:true})

    post
    .then((result)=>{
        res.json(result)
    })       
    .catch(error=>{
        res.json({
            message:'Error Occured'
        })
    })

} 

exports.deletePost = (req,res)=>{

    let {id} = req.params
    Post.deleteOne({_id:id})
    
    .then((result)=>{
        res.json(result)
    })       
    .catch(error=>{
        res.json({
            message:'Error Occured'
        })
    })

} 