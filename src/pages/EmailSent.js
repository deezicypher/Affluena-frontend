import React from 'react'
import logo from '../assets/img/fly.png'
import { useAuthContext } from '../context/authContext'
import axios from '../config/axios'
import toast from 'react-hot-toast'


const EmailSent = () => {
  const {regInfo} = useAuthContext();

  const email = regInfo.email;

  const onSubmit = async e => {
    e.preventDefault();
    try{
    toast.loading('Sending email....',{
      id: 'email'
    })
   const detail =  await axios.post('/resend-verification-email/', {
        email: email
    }).then(res => res.data.message)      
     toast.success(`${detail}`,{
      id: 'email'
     }) 
    }catch(error){
      toast.error("Unable to send email at the moment", {
        id: 'email'
      })
    }


}

  return (
    <div className="flex min-h-full items-center justify-center py-[5rem] px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
      <img
              className="mx-auto h-14 w-auto"
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
   <hr/>
   <form className="mt-8 space-y-6" >
   <p className="mt-2 text-center text-base text-gray-600">
          Didn't get the email?
        </p>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Email address"
                />
              </div>

            <div>
              <button
                onClick={e => onSubmit(e)}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2  focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>


                </span>
               Resend Email
              </button>
            </div>
          </form>
    </div>
  </div>
  )
}

export default EmailSent