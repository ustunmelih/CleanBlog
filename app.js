const express = require('express')
const mongoose = require('mongoose')
const Post = require('./models/Post')
const pageControllers = require('./controllers/pageControllers')
const postControllers = require('./controllers/postControllers')
var methodOverride = require('method-override')
const ejs = require('ejs')
const app = express()

mongoose.connect('Your connection')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', pageControllers.getCratePostPage)
app.get('/posts/:id', pageControllers.getSinglePostPage)
app.get('/about', pageControllers.getAboutPage)
app.get('/post', pageControllers.getPostPage)

app.post('/posts', async (req, res) => {
  await Post.create(req.body)
  res.redirect('/')
})
app.get('/posts/update/:id', pageControllers.getUpdatePage)

app.put('/posts/:id', postControllers.putPost)
app.delete('/posts/:id', postControllers.deletePost)

const port = 8080
app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
