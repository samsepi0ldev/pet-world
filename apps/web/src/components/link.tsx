import { ComponentProps } from 'react'

import { cn } from '@/utils'

export interface LinkProps extends ComponentProps<'button'> {}

export function Link ({ className, ...props }: LinkProps) {
  return (
    <button
      className={cn(
        'text-content-tertiary text-xs hover:underline hover:text-content-primary transition-colors',
        className
      )}
      {...props}
    />
  )
}
