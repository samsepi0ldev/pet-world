import { CardList } from '@/components/card-list'
import { CreateSchedule } from '@/components/create-schedule'

import { Logo } from '@/components/logo'


export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Logo />

      <div className='w-full max-w-4xl p-20 mx-auto'>
        <div className='mb-8'>
          <h1 className='font-tight font-bold text-2xl text-content-primary'>
            Sua agenda
          </h1>
          <span className='text-sm font-medium text-content-secondary'>
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </span>
        </div>
        <div>
          <CardList />
        </div>
      </div>
      <CreateSchedule />
    </div>
  )
}
