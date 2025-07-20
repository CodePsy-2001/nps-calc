'use client'
import { Monicon } from '@monicon/react'
import { useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()

  return (
    <button type="button" onClick={router.back}>
      <Monicon name="radix-icons:arrow-left" size={24} />
    </button>
  )
}
