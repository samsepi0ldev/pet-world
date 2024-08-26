import { User, Pet, Call } from 'iconsax-react'

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/dialog'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { Textarea } from '@/components/textarea'

export function CreateSchedule () {
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
        <div className='mt-7 space-y-4'>
          <Input
            label='Nome do tutor'
            placeholder='Helena Souza'
            icon={<User className='size-5 text-content-brand' variant='Bulk' />}
          />
          <Input
            label='Nome do pet'
            placeholder='Cheddar'
            icon={<Pet className='size-5 text-content-brand' variant='Bulk' />}
          />
          <Input
            label='Telefone'
            placeholder='(00) 0 0000-0000'
            icon={<Call className='size-5 text-content-brand' variant='Bulk' />}
          />
          <Textarea
            label='Descrição do serviço'
            placeholder='Banho e tosa'
          />
          <Button className='ml-auto block'>
            Agendar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
