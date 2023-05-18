const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
// connecting to client side
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
)

app.get('/test', (req, res) => {
  res.json('hello world test test')
})

app.post('/signUp', (req, res) => {
  const { name, email, password } = req.body
  res.json(name, email, password)
})

app.listen(4000)
