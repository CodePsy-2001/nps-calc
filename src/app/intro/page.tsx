import Image from 'next/image'
import Link from 'next/link'
import { Scaffold } from '@/components/layout'
import { Legend } from '@/components/toss-ui'
import { Button } from '@/components/ui'

export default function IntroPage() {
  return (
    <Scaffold
      bottom={(
        <Link href="/salary-calc">
          <Button size="cta">알아보기</Button>
        </Link>
      )}
    >
      <main className="p-5">
        <Legend
          className="mt-10"
          size="md"
          title={`노후에 받을 국민연금\n얼마인지 함께 알아볼까요?`}
          // description="본 사이트는 2025년 국회예산정책서 ~~ 자료를 따릅니다."
        />
        <Image className="mt-18 px-5" alt="123" src="/images/undraw_grandma.png" width={1000} height={1000} />
      </main>
    </Scaffold>
  )
}
