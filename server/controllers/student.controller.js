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

  static async getById(request, response) {
    try {
      const { id } = request.params
      const student = await StudentModel.getById({ id})
      if (!student) {
        return response.status(404).json({ message: "Student not found"})
      }
      return response.status(200).json(student)
    } catch (error) {
      console.error("Error fetching student")
      return response.status(500).json({ message: "Error fetching student"})
    }
  }
}