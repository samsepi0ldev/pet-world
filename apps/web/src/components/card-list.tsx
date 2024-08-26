'use client'

import { SunHorizon } from 'phosphor-react'

import { List } from '@/components/list'

export function CardList () {
  return (
    <div className='w-full bg-background-tertiary rounded-xl'>
      <div className='flex items-center justify-between gap-3 px-5 py-3 border-b border-border-divisor'>
        <SunHorizon
          className='size-5 text-accent-blue'
          weight='duotone'
        />
        <span className='font-bold font-tight text-content-primary flex-1'>
          Manha
        </span>
        <span className='font-tight font-bold text-content-secondary'>
          09h-12h
        </span>
      </div>
      <div className='p-5 flex flex-col gap-3'>
        {Array.from({ length: 4 }, (_, i) => (
          <List key={i} />
        ))}
      </div>
    </div>
  )
}
