const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/',(req,res)=>{
    res.send('Home')
})

router.get('/posts',(req,res)=>{
    Post.find()
        .then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json({message:err})
        })
})

router.get('/posts/:id',(req,res)=>{
    const id = req.params.id

    Post.findById(id)
        .then(data =>{
            if(!data){
                res.json({message:`Any result not found. May be id is wrong. Id : ${id}`})
            }else{
                res.json(data)
            }
        })
        .catch(err =>{
            res.json({message:err})
        })
})

router.post('/posts',(req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    })

    post.save()
        .then(data=>{
            res.json(data)
        })
        .catch(err =>{
            res.json({message:err})
        })
})

router.put('/posts/:id',(req,res)=>{
    if(!req.body){
        return res.status(404).send({message:'Unable to update..!'})
    }else{
        const id = req.params.id
        Post.findByIdAndUpdate(id,req.body)
            .then(data =>{
                if(!data){
                    res.send({message:'Unable to find User'})
                }else{
                    res.send({message:'User Data Successfully Updated...!'})
                }
            })
            .catch(err =>{
                res.send({message:err})
            })
    }
})

router.delete('/posts/:id',(req,res)=>{
    const id = req.params.id

    Post.findByIdAndDelete(id)
        .then(data =>{
            if(data){
                res.json({message:`User Successfully Deleted!`})
            }else{
                res.json({message:`Can't delete user by id : ${id}`})
            }
        })
        .catch(err =>{
            res.json({message:err})
        })
})

module.exports = router