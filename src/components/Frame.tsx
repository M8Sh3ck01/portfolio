import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type FrameProps = {
  children: ReactNode
  className?: string
}

export function Frame({ children, className }: FrameProps) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--frame-shadow)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
