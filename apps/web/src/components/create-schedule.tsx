'use client'

import { User, Pet, Call, Calendar, Clock } from 'iconsax-react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { format } from 'date-fns'
import { DayPicker, getDefaultClassNames  } from 'react-day-picker'
import { useState } from 'react'
import 'react-day-picker/style.css'

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/dialog'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { Textarea } from '@/components/textarea'
import { createSchedule } from '@/app/create-schedule'

export function CreateSchedule () {
  const defaultClassNames = getDefaultClassNames()
  const [serviceTo, setServiceTo] = useState<Date>()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='fixed right-8 bottom-8'>
          Novo agendamento
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Agende um atendimento
        </DialogTitle>
        <DialogDescription>
          Preencha os dados do cliente para realizar o agendamento:
        </DialogDescription>
        <form action={createSchedule} className='mt-7 space-y-4'>
          <Input
            label='Nome do tutor'
            placeholder='Helena Souza'
            name='client_name'
            icon={<User className='size-5 text-content-brand' variant='Bulk' />}
          />
          <Input
            label='Nome do pet'
            placeholder='Cheddar'
            name='pet_name'
            icon={<Pet className='size-5 text-content-brand' variant='Bulk' />}
          />
          <Input
            label='Telefone'
            placeholder='(00) 0 0000-0000'
            name='phone_number'
            icon={<Call className='size-5 text-content-brand' variant='Bulk' />}
          />
          <Textarea
            label='Descrição do serviço'
            placeholder='Banho e tosa'
            name='description_service'
          />
          <input type='hidden' name='service_to' value={serviceTo?.toISOString()} />
          <div className='grid md:grid-cols-2 gap-4 pb-7'>
            <DialogPrimitive.Root>
              <DialogPrimitive.Trigger>
                <Input
                  label='Data'
                  icon={<Calendar className='size-5 flex-shrink-0 text-content-brand' variant='Bulk' />}
                  asChild
                >
                  <button type='button'>
                    {serviceTo ? format(serviceTo, 'dd/MM/yyyy') : '10/01/2024'}
                  </button>
                </Input>
              </DialogPrimitive.Trigger>
              <DialogPrimitive.Portal>
                <DialogPrimitive.Content className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl bg-background-primary'>
                  <DayPicker
                    mode='single'
                    selected={serviceTo}
                    onSelect={setServiceTo}
                    classNames={{
                      today: 'border-border-brand',
                      selected: 'border-border-brand bg-background-brand text-white',
                      root: `${defaultClassNames.root} bg-transparent  text-white`,
                      chevron: `fill-background-brand`
                    }}
                  />
                </DialogPrimitive.Content>
              </DialogPrimitive.Portal>
            </DialogPrimitive.Root>
            <Input
              label='Hora'
              placeholder='12:00'
              name='hours'
              icon={<Clock className='size-5 flex-shrink-0 text-content-brand' variant='Bulk' />}
            />
          </div>
          <Button className='ml-auto block'>
            Agendar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
