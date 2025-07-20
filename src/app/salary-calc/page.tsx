'use client'
import { createFunnelSteps, useFunnel } from '@use-funnel/browser'
import { noop } from 'es-toolkit'
import { StartYearStep } from '@/app/salary-calc/_납입시작.step'
import { EndYearStep } from '@/app/salary-calc/_납입종료.step'
import { GrossSalaryStep } from '@/app/salary-calc/_세전월급.step'

interface FormState {
  salaryNow?: number
  startYear?: number
  endYear?: number
}

const steps = createFunnelSteps<FormState>()
  .extends('세전월급')
  .extends('납입시작', { requiredKeys: ['salaryNow'] })
  .extends('납입종료', { requiredKeys: ['salaryNow', 'startYear'] })
  .build()

export default function SalaryCalcPage() {
  const funnel = useFunnel({
    id: SalaryCalcPage.name,
    steps,
    initial: {
      step: '세전월급',
      context: {},
    },
  })

  return (
    <>
      <pre>
        {JSON.stringify(funnel.context, null, 2)}
      </pre>
      <funnel.Render
        세전월급={({ history }) => (
          <GrossSalaryStep onNext={salaryNow => history.push('납입시작', { salaryNow })} />
        )}
        납입시작={({ history }) => (
          <StartYearStep
            onNext={startYear => history.push('납입종료', { startYear })}
          />
        )}
        납입종료={() => <EndYearStep onNext={noop} />}
      />
    </>
  )
}
