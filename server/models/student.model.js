//student model prisma and postgresql
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export class StudentModel {

  static async getAll() {
    try {
      return await prisma.student.findMany()
    } catch (error) {
      console.error("Error fetching students:", error)
      throw new Error("Error fetching students")
    }
  }

  static async getById({ id }) {
    try {
      return await prisma.student.findUnique({
        where: { id: Number(id)}
      })
    } catch (error) {
      console.error("Error fetching student:", error)
      throw new Error("Error fetching student")
    }
  }

  static async create(student) {
    // create student with zod validation
    
  }
}

