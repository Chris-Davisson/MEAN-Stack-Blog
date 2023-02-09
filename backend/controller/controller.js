const postModel = require('../model/postModel');
const messageModel = require('../model/messageModel');
const userModel = require('../model/userModel');

genericERR = 'There was an issue processing your request.'
notFoundERR = "No post exist in the collection."

//Path '/posts'
//GET
//Returns all posts in the collection
getPosts = (req, res) => {
    postModel.find({}, (err, data) => {
        console.log("here");
        if( err ) {
            res.status(500).send(genericERR);
        }else if(data.length != 0){
            res.status(200).send(data);
        }else{
            res.status(404).send(notFoundERR);
        }
    })
}

//POST
//Creates a new post in the collection
createPost = (req, res) => {
    const newPost = new postModel(req.body);
    newPost.save((err, data) => {
        if(err){
            res.status(500).send(genericERR);
        }else{
            res.status(200).send(data);
        }
    })
}


//DELETE
//Deletes all posts in the collection
deleteAllPost = (req, res) => {
    postModel.deleteMany({}, (err, data) => {
        if(err){
            res.status(500).send(genericERR);
        }else{
            res.status(200).send(data);
        }
    })
}


//Path '/posts/:id'
//GET
//Returns a post with the specified id
getPostByUsername = (req, res) => {
    postModel.findById(req.params.username, (err, data) => {
        if(err){
            res.status(500).send(genericERR);
        }else if(data){
            res.status(200).send(data);
        }else{
            res.status(404).send(notFoundERR);
        }
    })
}

//PATCH
//Updates a post with the specified id
updatePost = (req, res) => {
    postModel.updateOne({username : req.param.username} , req.body , 
        (err, data) => {
            if(err){
                res.status(500).send(genericERR);
            }else if(data){
                res.status(200).send(data);
            }else{
                res.status(404).send(notFoundERR);
            }
        }
    )
}

//DELETE
//Deletes a post with the specified id
deletePost = (req, res) => {
    postModel.deleteOne({username : req.param.username} ,
        (err, data) => {
            if(err){
                res.status(500).send(genericERR);   
            }else if(data){
                res.status(200).send(data);
            }else{
                res.status(404).send(notFoundERR);
            }
        }
    )
}

//Path '/login'
//POST
//Logs in a user
login = (req, res) => {}

//Path '/register'
//POST
//Registers a new user
register = (req, res) => {}

//Path '/message'
//POST
//Sends a message to the admin
sendMessage = (req, res) => {
    const newMessage = new messageModel(req.body);
    newMessage.save((err, data) => {
        if(err){
            res.status(500).send(genericERR);
        }else{
            res.status(200).send(data);
        }
    })
}


//GET
//Returns all messages sent to the admin
getMessages = (req, res) => {
    messageModel.find({}, (err, data) => {
        if(err){
            res.status(500).send(genericERR);
        }else if(data){
            res.status(200).send(data);
        }else{
            res.status(404).send(notFoundERR);
        }
    })
}

module.exports = {getPosts, createPost, deleteAllPost, 
    getPostByUsername, updatePost, deletePost, login, register, sendMessage, getMessages};