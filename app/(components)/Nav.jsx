import Link from 'next/link'
import { HomeIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
const Nav = () => {
  return (
    <nav className='flex justify-between bg-nav p-4'>
      <div className='flex items-center space-x-4 text-white'>
        <Link href="/">
          <HomeIcon className="h-6 w-6 text-white" />
        </Link>
        <Link href="/carPage/new">
          <PlusCircleIcon className="h-6 w-6 text-white" />
        </Link>
      </div>
      <div>

      </div>
    </nav>
  )
}

export default Nav
