const express = require('express');
const Users = require("./users-model")
const mw = require("../middleware/middleware")

const router = express.Router();

router.get('/',mw.logger, (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  Users.get().then(users => {
    users ?
    res.status(200).json(users) :
    res.status(404).json({message:"users not found"})
  })
});

router.get('/:id',mw.validateUserId, (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  // Users.getById(req.params.id).then(user => {
  //   res.status(200).json(req.user) 
  // })  
  res.status(200).json(req.user) 
});

router.post('/',mw.validateUser, (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  Users.insert(req.body.name).then((user) => {
    res.status(201).json(user)
  })
});

router.put('/:id',mw.validateUserId,mw.validateUser, (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  res.status(200).json(req.user)
});

router.delete('/:id',mw.validateUserId, (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  Users.remove(req.params.id).then(() => {
    res.status(200).json(req.user)
  })
  
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports = router;