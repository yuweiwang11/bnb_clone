const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// User model
const User = require('./models/users.js')
const Listing = require('./models/listing.js')
const bcrypt = require('bcryptjs')
// json web token
const jwt = require('jsonwebtoken')
const cookieParcer = require('cookie-parser')
const imageDownloader = require('image-downloader')
const multer = require('multer')
const fs = require('fs')
const app = express()
require('dotenv').config()

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = process.env.JWT_SALT

app.use(express.json())

// to be able to read cookies
app.use(cookieParcer())

// make photos link http://localhost:4000/uploads/photo1685072322691.jpg working
app.use('/uploads', express.static(__dirname + '/uploads'))

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
          res.cookie('token', token).json(userDoc)
        }
      )
    } else {
      res.status(422).json('pass not ok')
    }
  } else {
    res.json('not found')
  }
})

// grap cookies token
app.get('/profile', (req, res) => {
  const { token } = req.cookies
  if (token) {
    //verify token
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err
      const { name, email, _id } = await User.findById(userData.id)

      res.json({ name, email, _id })
    })
  } else {
    res.json(null)
  }
})

app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true)
})

app.post('/upload-by-link', async (req, res) => {
  const { link } = req.body
  // console.log(link)
  const newName = 'photo' + Date.now() + '.jpg'
  await imageDownloader.image({
    url: link,
    dest: __dirname + '/uploads/' + newName,
  })
  res.json(newName)
})

const photoMiddleware = multer({ dest: 'uploads/' })
app.post('/upload', photoMiddleware.array('photos', 100), (req, res) => {
  const uploadFiles = []
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i]
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)
    uploadFiles.push(newPath.replace('uploads/', ''))
  }
  res.json(uploadFiles)
})

app.post('/listings', (req, res) => {
  const { token } = req.cookies
  const {
    title,
    address,
    photos,
    description,
    perks,
    exteaInfo,
    checkIn,
    checkOut,
    maxGuests,
  } = req.body

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err
    const listingDoc = await Listing.create({
      owner: userData.id,
      title,
      address,
      photos,
      description,
      perks,
      exteaInfo,
      checkIn,
      checkOut,
      maxGuests,
    })
    res.json(listingDoc)
  })
})
app.listen(4000)
