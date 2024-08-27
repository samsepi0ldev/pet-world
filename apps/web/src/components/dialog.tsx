'use client'

import * as PrimitiveDialog from '@radix-ui/react-dialog'
import React from 'react'

import { cn } from '@/utils'
import { X } from 'phosphor-react'

const Dialog = PrimitiveDialog.Root
const DialogTrigger = PrimitiveDialog.Trigger


const DialogTitle = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Title>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Title>
>(({ className, ...props }, ref) => (
    <PrimitiveDialog.Title
      className={cn(
        'font-tight font-bold text-2xl text-content-primary leading-normal',
        className
      )}
      ref={ref}
      {...props}  
    />
))

DialogTitle.displayName = PrimitiveDialog.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Description>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Description>
>(({ className, ...props }, ref) => (
    <PrimitiveDialog.Description
      className={cn(
        'font-medium text-sm text-content-secondary leading-relaxed',
        className
      )}
      ref={ref}
      {...props}  
    />
))

DialogDescription.displayName = PrimitiveDialog.Description.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Content>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Content>
>(({ className, children, ...props }, ref) => (
  <PrimitiveDialog.Portal>
    <PrimitiveDialog.Overlay className='bg-black/5 backdrop-blur-md fixed inset-0 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out' />
    <PrimitiveDialog.Content
      className={cn(
        'fixed left-1/2 top-6 bottom-6 -translate-x-1/2 w-11/12 max-w-lg bg-background-tertiary rounded-xl p-10',
        'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-left-1/2 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:zoom-out-95',
        className
      )}
    >
      {children}
      <PrimitiveDialog.Close className='size-9 absolute right-2 top-2 flex items-center justify-center text-content-secondary hover:text-content-primary transition-colors'>
        <X className='size-5' />
      </PrimitiveDialog.Close>
    </PrimitiveDialog.Content>
  </PrimitiveDialog.Portal>
))

DialogContent.displayName = PrimitiveDialog.Content.displayName

export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
}
