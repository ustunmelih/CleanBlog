const express = require('express')

const app = express()

app.get('/', (req, res) => {
  const blog = { id: 1, title: 'Blog title', description: 'Blog description' }
  res.send(blog)
})

const port = 8080

app.listen(port, () => {
  console.log(`server running on ${port}`)
})
