'use client'
import { FormatOptions, numToKorean } from 'num-to-korean'
import { useForm } from 'react-hook-form'
import { Scaffold } from '@/components/layout'
import { Legend } from '@/components/toss-ui'
import { Button, Input, Label } from '@/components/ui'

export interface GrossSalaryStepProps {
  onNext: (startYear: number) => void
}

interface FormValues {
  salaryNow: number
}

export function GrossSalaryStep({ onNext }: GrossSalaryStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<FormValues>({
    defaultValues: { salaryNow: undefined },
    mode: 'onSubmit',
  })

  const salaryNow = watch('salaryNow')

  const onSubmit = ({ salaryNow }: FormValues) => {
    const yearSalary = Math.round(salaryNow)
    onNext(yearSalary)
  }

  return (
    <Scaffold
      bottom={(
        <Button
          type="submit"
          form="salary-calc-startdate"
          size="cta"
          disabled={isSubmitting || !isValid}
        >
          다음
        </Button>
      )}
    >
      <main className="p-5">
        <Legend icon="💰" className="mt-10" title="세전 연봉이 얼마인가요?" />
        <form
          id="salary-calc-startdate"
          className="mt-10"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-row items-center gap-3">
            <Input
              className="text-right text-lg"
              {...register('salaryNow', {
                required: '연봉을 입력해주세요',
                valueAsNumber: true,
                min: { value: 0, message: '0 이상의 값을 입력해주세요' },
              })}
              type="number"
              placeholder="예: 4000"
              aria-invalid={errors.salaryNow ? 'true' : 'false'}
            />
            <Label className="text-lg whitespace-nowrap" htmlFor="salaryNow">
              만 원
            </Label>
          </div>
          <p className="my-2 text-right text-sm font-medium text-gray-600">
            =
            {' '}
            {numToKorean(salaryNow * 10_000, FormatOptions.MIXED)}
            {' '}
            원
          </p>
          {errors.salaryNow && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {errors.salaryNow.message}
            </p>
          )}
        </form>
      </main>
    </Scaffold>
  )
}
