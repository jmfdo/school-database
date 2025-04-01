import express from 'express'
import { studentRouter } from './routes/student'

const app = express()

app.use(express.json())
const port = process.env.PORT ?? 3000

app.use('/students', studentRouter)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
