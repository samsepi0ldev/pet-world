import { Link } from '@/components/link'

export function List () {
  return (
    <div className='w-full md:h-12 md:px-3 md:py-0 p-3 grid md:grid-cols-list md:grid-rows-1 grid-rows-3 grid-cols-[auto_1fr] gap-4 items-center border-b border-b-border-divisor text-xs last-of-type:border-none'>
      <span className='text-content-primary font-semibold'>
        13:00
      </span>
      <span className='text-content-secondary'>
        <b className='text-content-primary font-semibold'>Rex</b> / Mariana Lima
      </span>
      <span className='text-content-secondary md:col-auto col-start-1 col-end-3'>
        Higienização dos Ouvidos
      </span>
      <Link className='text-content-tertiary md:col-start-4 md:col-end-4 col-start-2 col-end-3 md:text-center text-right'>
        Remover agendamento
      </Link>
    </div>
  )
}