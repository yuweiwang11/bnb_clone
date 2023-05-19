const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/users.js')
const app = express()
require('dotenv').config()

app.use(express.json())
// connecting to client side
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
)

// connect to database
mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req, res) => {
  res.json('hello world test test')
})

app.post('/signUp', (req, res) => {
  const { name, email, password } = req.body
  User.create({
    name,
    email,
    password,
  })
  // res.json(name, email, password)
})

app.listen(4000)

// pp0YQpFuVyt6JrCn
