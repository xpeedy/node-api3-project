const Users = require("../users/users-model")
// const Posts = require("../posts/posts-model")

function logger(req, res, next) {
  // do your magic!
  const url = req.protocol + '://' + req.get('host') + req.originalUrl
  console.log(`a ${req.method} request, on ${Date()} to ${url}`)
  next()
}

function validateUserId(req, res, next) {
  // do your magic!
  const {id} = req.params
  Users.getById(id).then((user) => {
    !user ?
    res.status(400).json({message:"user does not exist"}) :
    req.user = user
    next()
  })
  .catch(err => {
    console.log(err)
  })
}

function validateUser(req, res, next) {
  // do your magic!
  // Users.insert(req.body.name).then(user => {
  //   user ?
  //   res.status(201).json(user)
  // })
  req.body.name ?
  res.status(400).json({message:"name is required"}) :
  next()

}

function validatePost(req, res, next) {
  // do your magic!
  !req.body || !req.body ?
  res.status(400).json("fields are required") :
  next()
}

function validatePostId(req, res, next) {
  const { id } = req.params
  Posts.getById(id).then(post => {
    !post ?
    res.status(400).json({message:"not found"}) :
    req.post = post
    next()
  })
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
  validatePostId
}