import { getYear } from 'date-fns'
import { useForm } from 'react-hook-form'
import { Scaffold } from '@/components/layout'
import { Legend } from '@/components/toss-ui'
import { Button, Input, Label } from '@/components/ui'

export interface StartYearStepProps {
  onNext: (startYear: number) => void
}

interface FormValues {
  startYear: number
}

export function StartYearStep({ onNext }: StartYearStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: 'onSubmit',
  })

  const onSubmit = ({ startYear }: FormValues) => {
    const year = Math.round(startYear)
    onNext(year)
  }

  return (
    <Scaffold
      bottom={(
        <Button
          type="submit"
          form="salary-calc-startdate"
          size="cta"
          disabled={isSubmitting}
        >
          다음
        </Button>
      )}
    >
      <main className="p-5">
        <Legend icon="👷" title="언제 일을 시작하셨나요?" />
        <form
          id="salary-calc-startdate"
          className="mt-10"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-row items-center gap-3">
            <Input
              className="text-lg"
              {...register('startYear', {
                required: '시작 연도를 입력해주세요',
                valueAsNumber: true,
                min: { value: 1900, message: '1900 이상의 값을 입력해주세요' },
                max: { value: getYear(new Date()), message: `${getYear(new Date())} 이하의 값을 입력해주세요` },
              })}
              type="number"
              placeholder="예: 2022"
              aria-invalid={errors.startYear ? 'true' : 'false'}
            />
            <Label className="text-lg" htmlFor="startYear">
              년
            </Label>
          </div>
          {errors.startYear && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {errors.startYear.message}
            </p>
          )}
        </form>
      </main>
    </Scaffold>
  )
}
