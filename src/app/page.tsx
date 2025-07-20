import Image from 'next/image'
import Link from 'next/link'
import { Scaffold } from '@/components/layout'
import { Legend } from '@/components/toss-ui'
import { Button } from '@/components/ui'
// import savings from '@/public/images/undraw_savings.svg'
import businessWoman from '@/public/images/undraw_businesswoman.svg'

export default function HomePage() {
  return (
    <Scaffold
      headerTransparent
      headerLeft={null}
      bottomTop="지금까지 11,898명 참여했어요"
      bottom={(
        <Link href="/intro">
          <Button size="cta">
            시작하기
          </Button>
        </Link>
      )}
    >
      <main className="flex grow flex-col p-5">
        <Legend
          className="mt-18 text-center"
          top="지속가능 대한민국"
          size="lg"
          title={`2025\n연금계산기`}
          description="쉽게 알아보는 연금개혁안"
        />
        <Image className="mt-20 px-8" alt="businesswoman" src={businessWoman} width={1000} height={1000} />
      </main>
    </Scaffold>
  )
}
