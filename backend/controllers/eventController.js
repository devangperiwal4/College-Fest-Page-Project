const asyncHandler = require('express-async-handler')

const Event = require('../models/eventModel')

// @desc    Get events
// @route   GET /api/events
// @access  Private
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find()

  res.status(200).json(events)
})

// @desc     Set Events
// @route    POST /api/events
// @access  Public
const setEvents = asyncHandler(async (req, res) => {
  console.log(req.body.sponsors)
  const { name, time, venue, budget } = req.body

  if (!name || !time || !venue) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if event exists
  const eventExists = await Event.findOne({ name })

  if (eventExists) {
    res.status(400)
    throw new Error('Event already exists')
  }
  // Create event
  const event = await Event.create({
    name,
    time,
    venue,
    sponsors: req.body.sponsors,
    budget,
    payments: req.body.payments
  })

  res.status(200).json(event)
})

// @desc    Get events
// @route   GET /api/events/:name
// @access  Private
const getOneEvents = asyncHandler(async (req, res) => {
  const name = req.params.name
  let new_name = ''
  // console.log(name)
  for (let i = 0; i < name.length; i++) {
    new_name = new_name + (name[i] === '-' ? ' ' : name[i])
  }
  // console.log(new_name)

  const event = await Event.findOne({ name: new_name })

  if (!event) {
    res.status(400)
    throw new Error('Event not found')
  }

  res.status(200).json(event)
})

// @desc    Update event
// @route   PUT /api/events/:id
// @access  Private
const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.find(req.params.name)

  if (!event) {
    res.status(400)
    throw new Error('Event not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  const updatedPost = await Event.findOneAndUpdate(req.params.name, req.body, {
    new: true
  })

  res.status(200).json(updatedPost)
})

// @desc    Delete event
// @route   DELETE /api/events/:id
// @access  Private

const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.find(req.params.name)

  if (!event) {
    res.status(400)
    throw new Error('Event not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  await event.remove()

  res.status(200).json({ message: 'Deleted' })
})

module.exports = {
  getEvents,
  getOneEvents,
  setEvents,
  updateEvent,
  deleteEvent
}
