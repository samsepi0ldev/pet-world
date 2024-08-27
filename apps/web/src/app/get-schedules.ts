import { db } from '@pet-world/prisma'

type Schedule = {
  id: string
  client_name: string
  description_service: string
  hours: number
  pet_name: string
  phone_number: string
  service_to: Date
}

export async function getSchedules (): Promise<Schedule[]> {
  return await db.schedule.findMany()
}
