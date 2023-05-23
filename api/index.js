const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// User model
const User = require('./models/users.js')
const bcrypt = require('bcryptjs')
// json web token
const jwt = require('jsonwebtoken')
const app = express()
require('dotenv').config()

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = process.env.JWT_SALT

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
// .then(() => console.log('Database connected!'))
// .catch((err) => console.log(err))
// console.log(process.env.MONGO_URL)

app.get('/test', (req, res) => {
  res.json('hello world test test')
})

// async fun
app.post('/signUp', async (req, res) => {
  const { name, email, password } = req.body

  try {
    const userDoc = await User.create({
      name,
      email,
      // encrypt passwd using bcryptjs
      password: bcrypt.hashSync(password, bcryptSalt),
    })
    res.json(userDoc)
  } catch (e) {
    res.status(422).json(e)
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  const userDoc = await User.findOne({ email })
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if (passOk) {
      // web token sign in
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err
          res.cookie('token', token).json('pass')
        }
      )
    } else {
      res.status(422).json('pass not ok')
    }
  } else {
    res.json('not found')
  }
})

app.listen(4000)
