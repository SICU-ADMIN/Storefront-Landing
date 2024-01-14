import Image from 'next/image'
import logo from '@/Images/logo.png'

export function Logo() {
  return <Image src={logo} alt="" width={50} height={50} unoptimized />
}
