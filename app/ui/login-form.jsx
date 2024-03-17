'use client';
 
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useFormState, useFormStatus } from 'react-dom';
export default function LoginForm() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);
 
  return (
    <form className="space-y-3">
    </form>
  );
}
 
// function LoginButton() {
//   const { pending } = useFormStatus();
 
//   return (
//     <Button className="mt-4 w-full" aria-disabled={pending}>
//       Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
//     </Button>
//   );
// }