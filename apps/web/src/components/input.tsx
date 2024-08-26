import React from 'react'

import { cn } from '@/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
    label: string
  }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, icon, id, label, ...props }, ref) => (
  <div>
    <label htmlFor={id} className='text-content-primary font-bold text-sm block mb-1'>
      {label}
    </label>
    <div className={cn(
      'p-3 rounded-lg flex gap-2 border border-border-primary hover:border-border-secondary active:border-border-brand focus-within:border-border-brand focus-within:hover:border-border-brand text-content-primary transition-colors',
      className
    )}>
      {icon}
      <input
        id={id}
        ref={ref}
        className='bg-transparent outline-none placeholder-content-secondary'
        {...props}
      />
    </div>
  </div>
))

Input.displayName = 'Input'
