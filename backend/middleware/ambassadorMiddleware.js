const asyncHandler = require('express-async-handler')

const checkRole = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.access !== 'attendee') {
    next()
  } else {
    console.log(error)
    res.status(401)
    throw new Error('Not authorized')
  }
})

module.exports = { checkRole }
