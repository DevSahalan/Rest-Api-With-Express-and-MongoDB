const express = require("express");
const router = express.Router();
const Post = require("../models/post");




//get all posts
router.get("/", (req, res) => {
  const posts = Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.json({ message: err });
    })
})

//create and save post
router.post("/", (req, res) => {
  Post.create(req.body)
    .then((post) => {
      res.send(post);
    })
    .catch((err) => res.status(404).send("enter both title and description"));
})

//get specific post

router.get('/:id', (req, res)=>{
    const post = Post.findById(req.params.id)
    .then(post =>{
        res.json(post)
    }).catch(err =>{
        res.json({message: "id isn't exist"})
    })
})


//delete post
router.delete('/:id', (req, res)=>{
    const post = Post.remove({_id: req.params.id})
    .then( post=>{
        res.json({deleted: "post deleted succesfully"})}
    ).catch(err=>{
        res.json({message: "couldn't find the id"})
    })
})


// //update one
// router.patch('/:id', (req, res)=>{
//     const post = Post.updateOne({_id: req.params.id}, {$set:{
//         title: req.body.title,
//         description: req.body.description
//     }})
//     .then( post=>{
//         res.json({Updated: "post updated succesfully"})}
//     ).catch(err=>{
//         res.json({message: "couldn't find the id"})
//         console.log(err)
//     })
// })


//update one
router.patch('/:id', async (req, res, next)=>{

try{
    const id = req.params.id
    const updates = req.body

    const result = await Post.findByIdAndUpdate(id, updates)
    res.send(updates)
} catch (error){
    console.log(error.message)
}



})

module.exports = router;

//update post

