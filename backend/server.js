const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()
const port = process.env.PORT || 5000

connectDB()

const { errorHandler } = require('./middleware/errorMiddleware')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.use('/api/posts', require('./routes/commentRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/events', require('./routes/eventRoutes'))
// app.use('/api/news', require('./routes/newsRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`Server stared on port ${port}`))
