import { removeSchedule } from '@/app/remove-schedule'
import { Link } from '@/components/link'
import { format } from 'date-fns'

export interface ListProps {
  id: string
  client_name: string
  pet_name: string
  description_service: string
  phone_number: string
  hours: number
  service_to: Date
}

export function List ({ client_name, pet_name, hours, description_service, id }: ListProps) {
  async function remove () {
    'use server'

    await removeSchedule(id)
  }
  return (
    <form action={remove} className='w-full md:h-12 md:px-3 md:py-0 p-3 grid md:grid-cols-list md:grid-rows-1 grid-rows-3 grid-cols-[auto_1fr] gap-4 items-center border-b border-b-border-divisor text-xs last-of-type:border-none'>
      <span className='text-content-primary font-semibold'>
        {format(Number(hours.toString()), 'k:mm').toString()}
      </span>
      <span className='text-content-secondary'>
        <b className='text-content-primary font-semibold'>{pet_name}</b> / {client_name}
      </span>
      <span className='text-content-secondary md:col-auto col-start-1 col-end-3'>
        {description_service}
      </span>
      <Link className='text-content-tertiary md:col-start-4 md:col-end-4 col-start-2 col-end-3 md:text-center text-right'>
        Remover agendamento
      </Link>
    </form>
  )
}