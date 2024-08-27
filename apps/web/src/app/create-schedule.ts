'use server'

import { revalidateTag } from 'next/cache'
import { db } from '@pet-world/prisma'

type Schedule = {
  client_name: string
  description_service: string
  hours: number
  pet_name: string
  phone_number: string
  service_to: Date
}

export async function createSchedule (data: FormData) {
  const d = Object.fromEntries(data) as any
  const [hour, minute] = d.hours.split(':')
  const date = new Date()

  date.setHours(Number(hour))
  date.setMinutes(Number(minute))

  const hours = date.getTime()
  await db.schedule.create({ data: {
      ...d,
      hours,
    }
  })

  revalidateTag('schedules')
}
