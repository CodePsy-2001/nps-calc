import Image from 'next/image'
import Link from 'next/link'
import { Scaffold } from '@/components/layout'
import { Legend } from '@/components/toss-ui'
import { Button } from '@/components/ui'

export default function HomePage() {
  return (
    <Scaffold
      headerTransparent
      headerLeft={null}
      bottom={(
        <Link href="/intro">
          <Button size="cta">다음</Button>
        </Link>
      )}
    >
      <main className="flex grow flex-col p-5">
        <Legend
          className="mt-18 text-center"
          top="2025"
          size="lg"
          title={`국민연금\n계산기`}
          // description="본 사이트는 2025년 국회예산정책서 ~~ 자료를 따릅니다."
        />
        <Image className="mt-18 px-5" alt="businesswoman" src="/images/undraw_businesswoman.svg" width={1000} height={1000} />
      </main>
    </Scaffold>
  )
}
