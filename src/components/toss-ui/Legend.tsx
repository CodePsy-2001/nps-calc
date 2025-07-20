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
    <div className={cn('flex flex-col gap-4', className)}>
      {typeof icon === 'string' ? <p className="font-toss-face text-4xl">{icon}</p> : icon}
      <div className={cn(`flex flex-col gap-2.5`, size === 'lg' && 'gap-3.5')}>
        {top && <p className="text-xl font-semibold text-muted-foreground">{top}</p>}
        <p className={cn(`text-2xl font-semibold tracking-tight`, size === 'lg' && `
          text-[46px] leading-[1] font-extrabold tracking-tighter
        `)}
        >
          {convertNewlineToJSX(title)}
        </p>
        {description
          ? (
              <p
                className={cn(`
                  text-base leading-tight font-medium text-neutral-600
                `, size === 'lg' && `font-semibold`)}
              >
                {convertNewlineToJSX(description)}
              </p>
            )
          : null}
      </div>
    </div>
  )
}
