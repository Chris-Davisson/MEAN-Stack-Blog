const express = require('express');
const router = express.Router();
const funcs = require('../controller/controller.js');

router.route('/posts')
.get(funcs.getPosts)
.post(funcs.createPost)
.delete(funcs.deleteAllPost);

router.route('/posts/:username')
.get(funcs.getPostByUsername)
.patch(funcs.updatePost)
.delete(funcs.deletePost);

router.route('/login')
.post(funcs.login);

router.route('/register')
.post(funcs.register);

router.route('/message')
.post(funcs.sendMessage)
.get(funcs.getMessages);

module.exports = router;