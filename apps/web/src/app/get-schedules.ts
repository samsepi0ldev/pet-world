import { unstable_cache } from 'next/cache'

import { db } from '@pet-world/prisma'

export const getSchedules = unstable_cache(
  async () => {
    return await db.schedule.findMany()
  },
  ['schedules'],
  {
    revalidate: 3600,
    tags: ['schedules']
  }
)
