'use client'

import { Dog } from 'phosphor-react'

export function Logo () {
  return (
    <div className='w-fit fixed top-0 left-0 flex items-center gap-0.5 px-5 py-3 rounded-br-lg bg-[#2E2C30]'>
      <Dog
        className='text-content-brand size-5'
        weight='duotone'
      />
      <span className='font-bold uppercase text-content-brand font-familjen-grotesk'>
        Mundo pet
      </span>
    </div>
  )
}