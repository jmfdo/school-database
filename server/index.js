import express from 'express'

const app = express()

app.use(express.json())
const port = process.env.PORT ?? 3000

app.get('/', (_request, response) => {
  response.json({ message: 'Hello World!'})
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
