// student controller

import { StudentModel } from "../models/student.model"

export class StudentController {
  static async getAll(request, response) {
    try {
      const students = await StudentModel.getAll()
      response.status(200).json(students)
    } catch (error) {
      console.error("Error fetching students:", error)
      response.status(500).json({ message: "Error fetching students" })
    }
  }
}