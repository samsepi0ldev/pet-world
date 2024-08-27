import { List, ListProps } from '@/components/list'
import { getIconAndTextByHour } from '@/utils/get-icon-and-text-by-hour'

interface CardListProps {
  slugMapper: string
  scheduleList?: ListProps[]
}

export function CardList ({ slugMapper, scheduleList }: CardListProps) {
  const secondaryText = {
    morning: '09h-12h',
    afternoon: '13h-18h',
    night: '19h-21h',
    default: '--'
  } as const
  
  const { icon: Icon, text, slug } = getIconAndTextByHour(slugMapper)

  return (
    <div className='w-full bg-background-tertiary rounded-xl'>
      <div className='flex items-center justify-between gap-3 px-5 py-3 border-b border-border-divisor'>
        <Icon
          data-state={slug}
          className='size-5 data-[state=morning]:text-accent-blue data-[state=afternoon]:text-accent-orange data-[state=night]:text-accent-yellow'
          variant='Bulk'
        />
        <span className='font-bold font-tight text-content-primary flex-1'>
          {text}
        </span>
        <span className='font-tight font-bold text-content-secondary'>
          {secondaryText[slug]}
        </span>
      </div>
      <div className='p-5 flex flex-col gap-3'>
        {scheduleList?.map(schedule => (
          <List
            key={schedule.id}
            id={schedule.id}
            client_name={schedule.client_name}
            description_service={schedule.description_service}
            pet_name={schedule.pet_name}
            hours={schedule.hours}
            phone_number={schedule.phone_number}
            service_to={schedule.service_to}
          />
        ))}
      </div>
    </div>
  )
}
