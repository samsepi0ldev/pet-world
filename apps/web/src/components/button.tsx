import React from 'react'

import { cn } from '@/utils'

export interface ButtonProps extends React.ComponentProps<'button'> {}

export function Button ({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'font-tight font-bold uppercase py-3 px-5 rounded-lg h-12 bg-content-brand text-background-primary transition-colors',
        'hover:bg-background-highlights',
        className
      )}
      {...props}
    />
  )
}
