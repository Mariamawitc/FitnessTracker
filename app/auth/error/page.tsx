'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  let errorMessage = 'An error occurred during authentication';
  if (error === 'CredentialsSignin') {
    errorMessage = 'Invalid email or password';
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <p className="mt-2 text-center text-sm text-red-600">{errorMessage}</p>
        </div>
        <div className="flex justify-center">
          <Link
            href="/auth/signin"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Try again
          </Link>
        </div>
      </div>
    </div>
  );
}
