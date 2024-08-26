import React from 'react'

import { cn } from '@/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
  }

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, label, id, ...props }, ref) => (
    <div>
      <label htmlFor={id} className='text-content-primary font-bold text-sm block mb-1'>
        {label}
      </label>
      <textarea
        id={id}
        ref={ref}
        className={cn(
          'w-full h-20 p-3 rounded-lg border resize-none border-border-primary hover:border-border-secondary active:border-border-brand focus-within:border-border-brand focus-within:hover:border-border-brand text-content-primary bg-transparent outline-none transition-colors',
          className
        )}
        {...props}
      />
    </div>
))

Textarea.displayName = 'Textarea'
