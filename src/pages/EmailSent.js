import React from 'react'
import logo from '../assets/img/fly.png'
const EmailSent = () => {
  return (
    <div className="flex min-h-full items-center justify-center py-[5rem] px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
      <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Affluena"
            />

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Verification Email Sent
        </h2>
        <p className="mt-2 text-center text-base text-gray-600">
          Verification Email has been sent to your account.{' '}  
          Please check your inbox 
        </p>
        <div className="text-center flex items-center justify-center">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-secondary w-2/5 ">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>
</div>
      </div>
   
    </div>
  </div>
  )
}

export default EmailSent