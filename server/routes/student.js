// Create route for the server
import express from 'express'
import { StudentController } from '../controllers/student.controller'

export const studentRouter = express.Router()

router.get('/', StudentController.getAll)
router.get('/:id', StudentController.getById)
