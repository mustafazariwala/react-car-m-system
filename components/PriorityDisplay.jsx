import { FireIcon } from '@heroicons/react/20/solid';

function PriorityDisplay({priority}) {
  return (
    <div className="flex justify-start align-baseline">
      <FireIcon className={`h-4 w-4 ${priority > 1 ? 'text-red-500' : 'text-slate-500'}`} />
      <FireIcon className={`h-4 w-4 ${priority > 2 ? 'text-red-500' : 'text-slate-500'}`} />
      <FireIcon className={`h-4 w-4 ${priority > 3 ? 'text-red-500' : 'text-slate-500'}`} />
      <FireIcon className={`h-4 w-4 ${priority > 4 ? 'text-red-500' : 'text-slate-500'}`} />
      <FireIcon className={`h-4 w-4 ${priority > 5 ? 'text-red-500' : 'text-slate-500'}`} />
    </div>
  )
}

export default PriorityDisplay
