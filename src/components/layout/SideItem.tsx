import Image from 'next/image'
import logo from '@/public/reformparty/logo-horizontal.svg'

const Hairline = () => <hr className="my-6 border-gray-300" style={{ width: 318 }} />

const footerItems = [
  {
    label: '주소(중앙당)',
    value: '서울특별시 마포구 마포대로 53',
  },
  {
    label: '고유번호',
    value: '413-82-71141',
  },
  {
    label: '대표번호',
    value: '02-6788-2093',
  },
  {
    label: 'FAX',
    value: '070-7966-8367',
  },
]

export function SideItem() {
  return (
    <div className="mb-10 w-full p-0">
      <Image width={258} height={101} alt="개혁신당" src={logo} />
      {/* <p className="mt-4">청년과 함께</p> */}
      <Hairline />
      <footer className="flex flex-col gap-2">
        {footerItems.map(({ label, value }) => (
          <p key={label} className="text-xs text-gray-500">
            <strong className="mr-2">{label}</strong>
            {value}
          </p>
        ))}
      </footer>
    </div>
  )
}
