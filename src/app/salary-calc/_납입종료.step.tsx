'use client'
import { Radio, RadioGroup } from '@headlessui/react'
import { getYear } from 'date-fns'
import { Controller, useForm } from 'react-hook-form'
import { Scaffold } from '@/components/layout'
import { Legend } from '@/components/toss-ui'
import { Button, Input, Label } from '@/components/ui'
import { cn } from '@/lib'

// 정년퇴직 => 생년월일을 물어보고 그에 따라 계산해서 반환
// 조기퇴직 => 퇴직할 예정 년도를 물어보고 그대로 반환

// 참고: 대한민국 정년퇴직은 만 65세

export interface EndYearStepProps {
  onNext: (endYear: number) => void
}

const plans = [
  '정년퇴직',
  '조기퇴직',
] as const

interface FormValues {
  plan: '정년퇴직' | '조기퇴직'
  birthYear?: number
  endJobYear?: number
}

export function EndYearStep({ onNext }: EndYearStepProps) {
  const { register, control, watch } = useForm<FormValues>({
    defaultValues: {
      plan: '정년퇴직',
    },
  })

  const plan = watch('plan')

  return (
    <Scaffold
      bottom={
        <Button disabled type="submit" form="salary-calc-startdate" size="cta">다음</Button>
      }
    >
      <main className="p-5">
        <Legend className="mt-10" title="퇴직 시점을 알려주세요" />
        <form id="salary-calc-startdate" className="mt-10" onSubmit={() => onNext(3)}>
          <Controller
            control={control}
            render={({ field }) => (
              <RadioGroup
                {...field}
                aria-label="Start Date"
                className="grid grid-cols-2 space-x-2"
              >
                {plans.map(plan => (
                  <Radio
                    key={plan}
                    value={plan}
                    className={cn(`
                      group relative flex cursor-pointer flex-col items-center
                      rounded-lg border border-gray-200 p-2.5 text-center
                      font-semibold text-gray-600 transition outline-none
                    `, `
                      data-checked:border-ring data-checked:text-ring
                      data-checked:ring-1 data-checked:ring-ring/50
                    `)}
                  >
                    {plan}
                  </Radio>
                ))}
              </RadioGroup>
            )}
            name="plan"
          />

          {plan === '정년퇴직' && (
            <>
              <div className="mt-8 w-full max-w-xs space-y-2">
                <Label htmlFor="출생년도">출생년도</Label>
                <div className="flex flex-row items-center gap-3">
                  <Input
                    {...register('birthYear', {
                      required: '기모띠',
                      valueAsNumber: true,
                      min: { value: 1900, message: '1900 이상의 값을 입력해주세요' },
                      max: { value: getYear(new Date()), message: `${getYear(new Date())} 이하의 값을 입력해주세요` },
                    })}
                    id="출생년도"
                    type="number"
                    placeholder="예: 1998"
                  />
                  <Label className="text-lg" htmlFor="startYear">
                    년
                  </Label>
                </div>
              </div>
              <div></div>
            </>
          )}
        </form>
      </main>
    </Scaffold>
  )
}
