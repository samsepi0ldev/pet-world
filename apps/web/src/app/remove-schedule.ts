'use server'

import { db } from '@pet-world/prisma'
import { revalidateTag } from 'next/cache'

export async function removeSchedule (id: string) {
  await db.schedule.delete({ where: { id } })
  revalidateTag('schedules')
}
