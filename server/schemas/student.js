import { z } from 'zod'

const studentSchema = z.object({
  name: z.string().min(1).max(50),
  grade: z.number().min(1).max(12)
})

function validateStudent(data) {
  return studentSchema.safeParse(data)
}
