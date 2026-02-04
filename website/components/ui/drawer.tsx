"use client"

import * as React from "react"
import { X } from "lucide-react"

interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

interface DrawerContentProps {
  children: React.ReactNode
  className?: string
}

interface DrawerHeaderProps {
  children: React.ReactNode
}

interface DrawerTitleProps {
  children: React.ReactNode
}

interface DrawerDescriptionProps {
  children: React.ReactNode
}

export function Drawer({ open, onOpenChange, children }: DrawerProps) {
  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onOpenChange(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-5xl bg-neutral-950 border-l border-neutral-800 shadow-2xl transform transition-transform duration-300 ease-out">
        <div className="relative h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

export function DrawerContent({ children, className = "" }: DrawerContentProps) {
  return (
    <div className={`h-full overflow-y-auto ${className}`}>
      {children}
    </div>
  )
}

export function DrawerHeader({ children }: DrawerHeaderProps) {
  return (
    <div className="sticky top-0 bg-neutral-950 p-4">
      {children}
    </div>
  )
}

export function DrawerTitle({ children }: DrawerTitleProps) {
  return (
    <h2 className="text-lg font-semibold">
      {children}
    </h2>
  )
}

export function DrawerDescription({ children }: DrawerDescriptionProps) {
  return (
    <p className="text-sm text-neutral-400 mt-1">
      {children}
    </p>
  )
}