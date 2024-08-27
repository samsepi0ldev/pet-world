import { CreateSchedule } from '@/components/create-schedule'
import { Logo } from '@/components/logo'
import { ListSchedulesCards } from '@/components/list-schedules'
import { Suspense } from 'react'


export default async function Home() {
  return (
    <div className='w-full h-screen'>
      <Logo />

      <div className='w-full max-w-4xl md:p-20 p-5 md:mt-0 mt-16 mx-auto'>
        <div className='mb-8'>
          <h1 className='font-tight font-bold text-2xl text-content-primary'>
            Sua agenda
          </h1>
          <span className='text-sm font-medium text-content-secondary'>
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </span>
        </div>
        <Suspense fallback={<span>Carregando...</span>}>
          <ListSchedulesCards />
        </Suspense>
      </div>
      <CreateSchedule />
    </div>
  )
}
