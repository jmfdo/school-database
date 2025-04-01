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
}

