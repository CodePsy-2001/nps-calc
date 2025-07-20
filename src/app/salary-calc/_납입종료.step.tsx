import { Scaffold } from '@/components/layout'
import { Legend } from '@/components/toss-ui'
import { Button } from '@/components/ui'

// 정년퇴직 => 생년월일을 물어보고 그에 따라 계산해서 반환
// 조기퇴직 => 퇴직할 예정 년도를 물어보고 그대로 반환

// 참고: 대한민국 정년퇴직은 만 65세

export interface EndYearStepProps {
  onNext: (endYear: number) => void
}

export function EndYearStep({ onNext }: EndYearStepProps) {
  return (
    <Scaffold
      bottom={
        <Button type="submit" form="salary-calc-startdate" size="cta">다음</Button>
      }
    >
      <main className="p-5">
        <Legend className="mt-10" title="퇴직 시점을 알려주세요" />
        <form id="salary-calc-startdate" className="mt-10" onSubmit={() => onNext(3)}>
        </form>
      </main>
    </Scaffold>
  )
}
