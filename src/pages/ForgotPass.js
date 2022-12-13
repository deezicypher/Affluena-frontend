
import { useState } from 'react';
import toast from 'react-hot-toast';
import logo from '../assets/img/fly.png';
import axios from '../config/axios'

const ForgotPass = () => {
      const [email, setEmail] = useState();

      const onSubmit = async e => {
        e.preventDefault();
       try{
        toast.loading('Submiting...',{
          id:'forgot'
        });
        const detail = await axios.post('/password/reset/', {
                email: email
            }).then(res => res.data.detail)
        
            toast.success(`${detail}`,{
                id:'forgot'})

          }catch(err){
              toast.error("Request can't processed at the moment",{
                id:'forgot'
              })
            }
       
      }
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src={logo}
          alt="Affluena"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
         Forgot Password
        </h2>
      
      </div>
      <form className="mt-8 space-y-6" >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px flex flex-col  gap-5 rounded-md shadow-sm">
        <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Email address"
                />
              </div>
        </div>

        <div>
          <button
            onClick={e => onSubmit(e)}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2  focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
  
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" />
</svg>

            </span>
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ForgotPass