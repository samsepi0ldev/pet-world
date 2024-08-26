'use client'

import * as PrimitiveDialog from '@radix-ui/react-dialog'
import React from 'react'

import { cn } from '@/utils'

const Dialog = PrimitiveDialog.Root
const DialogTrigger = PrimitiveDialog.Trigger

const DialogOverlay = () => (
  <PrimitiveDialog.Overlay className='bg-black/5 backdrop-blur-md fixed inset-0' />
)

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
        'font-medium text-sm text-content-secondary leading-loose',
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
    <DialogOverlay />
    <PrimitiveDialog.Content
      className={cn(
        'fixed left-1/2 top-6 bottom-6 -translate-x-1/2 w-full max-w-lg bg-background-tertiary rounded-xl p-10',
        className
      )}
    >
      {children}
    </PrimitiveDialog.Content>
  </PrimitiveDialog.Portal>
))

DialogContent.displayName = PrimitiveDialog.Content.displayName

export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger
}
