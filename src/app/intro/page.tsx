import Link from 'next/link'
import { Scaffold } from '@/components/layout'
import { Legend } from '@/components/toss-ui'
import { Button } from '@/components/ui'

export default function IntroPage() {
  return (
    <Scaffold
      bottom={(
        <Link href="/salary-calc">
          <Button size="cta">다음</Button>
        </Link>
      )}
    >
      <main className="flex flex-col p-5">
        <Legend
          icon="🤔"
          size="md"
          title={`2025년 연금개혁안,\n들어보셨나요?`}
          // description="`더 내고 더 받기`가 무슨 의미일까요?"
        />
        <ul className={`
          mt-4 list-disc rounded-lg bg-gray-200 p-5 pl-8 text-gray-700
        `}
        >
          <li>보험료율 9% ⇒ 13% 인상</li>
          <li>소득대체율 41.5% ⇒ 43% 인상</li>
          <li>지급개시연령 65세 ⇒ 68세 늦추기</li>
        </ul>
        <p className="mt-4 text-gray-800">
          지난 4월 1일,
          {' '}
          <strong>더 내고 더 받기</strong>
          {' '}
          형태의 연금개혁안이 국회를 통과했어요. 2007년 이후 18년만의 개혁이에요.
          <br />
          <br />
          <strong>예상 연봉</strong>
          과
          {' '}
          <strong>납입 기간</strong>
          만 알면 내는 돈과 받는 돈이 어떻게 바뀔지 쉽게 계산해볼 수 있어요. 국민연금의 지속가능성에 얼마나 영향을 미칠지, 같이 알아볼게요.
        </p>
        <p className="mt-12 text-xs text-gray-700">
          <strong className="mr-1.5">참고자료</strong>
          <span>
            2025년 ｢국민연금법｣ 개정의 재정 및 정책효과 분석 | 국회예산정책처
          </span>
        </p>
      </main>
    </Scaffold>
  )
}
