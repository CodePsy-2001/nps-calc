import type { ClassValue } from 'clsx'
import type { ReactNode } from 'react'
import { convertNewlineToJSX } from '@toss/react'
import { cn } from '@/lib'

export interface LegendProps {
  icon?: ReactNode
  top?: string
  title: string
  description?: string
  /** @default md */
  size?: 'lg' | 'md'
  className?: ClassValue
}

export function Legend({ icon, top, title, description, size = 'md', className }: LegendProps) {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      {typeof icon === 'string' ? <p className="font-toss-face text-4xl">{icon}</p> : icon}
      <div className="flex flex-col gap-2.5">
        {top && <p className="text-xl font-semibold text-muted-foreground">{top}</p>}
        <p className={cn(`text-2xl font-semibold`, size === 'lg' && `
          text-3xl font-bold
        `)}
        >
          {convertNewlineToJSX(title)}
        </p>
        {description
          ? (
              <p
                className={cn(`
                  text-[17px] leading-tight font-normal text-neutral-600
                `, size === 'lg' && 'text-lg')}
              >
                {convertNewlineToJSX(description)}
              </p>
            )
          : null}
      </div>
    </div>
  )
}
