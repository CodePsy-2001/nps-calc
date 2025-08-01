import type { PropsWithChildren, ReactElement } from 'react'
import { BackButton } from '@/components/layout/BackButton'

export interface ScaffoldProps {
  headerTransparent?: boolean
  headerLeft?: ReactElement | null
  bottomTop?: string
  bottom?: ReactElement
}

const backButton = <BackButton />

export const HEADER_HEIGHT = 60

export function Scaffold({ children, headerTransparent, headerLeft = backButton, bottom, bottomTop }: PropsWithChildren<ScaffoldProps>) {
  return (
    <>
      <div
        id="scaffold-header"
        className={`
          absolute inset-x-0 top-0 z-10 flex w-full flex-row items-center
          justify-between
          ${headerTransparent ? 'bg-transparent' : 'bg-white'}
          px-5
        `}
        style={{ height: HEADER_HEIGHT }}
      >
        {headerLeft}
        <div className="flex flex-row items-center justify-center"></div>
      </div>
      <div
        className="absolute scrollbar-hidden w-full overflow-y-scroll"
        style={{ height: 'inherit', paddingTop: headerTransparent ? 0 : HEADER_HEIGHT }}
      >
        {children}
      </div>
      <div className="absolute bottom-0 flex w-full flex-col gap-2 p-5">
        <p className="text-center text-sm font-medium text-gray-500">{bottomTop}</p>
        {bottom}
      </div>
    </>
  )
}
