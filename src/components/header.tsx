'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header({ title }: { title: string }) {
  const pathname = usePathname()
  return (
    <header className='items-center'>
      <h1 className='text-center text-3xl font-extrabold leading-9 tracking-tight'>
        {pathname === '/' ? (
          <span>{title}</span>
        ) : (
          <Link href='/' className='hover:text-cb-pink'>
            {title}
          </Link>
        )}
      </h1>
    </header>
  )
}
