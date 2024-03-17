'use client'
import { useRouter } from 'next/navigation'

import { XMarkIcon } from '@heroicons/react/24/solid'

const DeleteBlock = ({id}) => {
  const router = useRouter()
  const deleteTicket = async () => {
    console.log(id)
    const res = await fetch(process.env.API_URL `Cars/${id}`, {
      method: 'DELETE'
    })
    if (res.status === 200) {
      router.refresh()
    }
  }
  return (
    <div>
      <XMarkIcon className='h-5 w-5 text-red-400' onClick={deleteTicket} />
    </div>
  )
}

export default DeleteBlock
