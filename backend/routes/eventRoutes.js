const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const { checkRole } = require('../middleware/ambassadorMiddleware')
const { getEvents, setEvents, getOneEvents, updateEvent, deleteEvent } = require('../controllers/eventController')
const router = express.Router()


router.route('/').get(getEvents).post(protect, checkRole, setEvents)
router.route('/:id').put(protect,checkRole,updateEvent).delete(protect, checkRole, deleteEvent)
router.route('/:name').get(getOneEvents)

module.exports = router
