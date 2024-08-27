import { CardList } from '@/components/card-list'
import { getSchedules } from '@/app/get-schedules'

export async function ListSchedulesCards () {
  const data = await getSchedules()

  const newData = data.reduce((acc, cur) => {
    const date = new Date(Number(cur.hours))
    const hour = date.getHours()
    if (hour >= 9 && hour <= 12) {
      acc.morning.push(cur)
      return acc
    }
    if (hour >= 13 && hour <= 18) {
      acc.afternoon.push(cur)
      return acc
    }
    acc.night.push(cur)

    return acc
  }, {
    morning: [],
    afternoon: [],
    night: []
  })

  if (!data.length) {
    return (
      <div className='text-content-secondary text-sm'>
        Nenhum agendamento cadastrado nesta data.
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-3'>
      {Object.entries(newData).map(([key, list]) => {
        if (list.length) {
          return (
            <CardList
              key={key}
              slugMapper={key}
              scheduleList={list}
            />
          )
        }
      })}
    </div>
  )
}
