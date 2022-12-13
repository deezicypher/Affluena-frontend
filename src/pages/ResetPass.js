import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useForm } from'react-hook-form';
import logo from '../assets/img/fly.png';
import axios from '../config/axios';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPass = () => {

    let { token } = useParams();
    let { uid } = useParams();
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        password: yup.string()
        .required('Please enter a password')
        .matches(/^\S*$/, 'Whitespace is not allowed')
        .min(6, 'Password must be at 6 characters long'),
        password2: yup.string()
        .required('Confirm password')
        .oneOf([yup.ref('password')], 'Passwords does not match'),
      })

      const formOptions = { resolver: yupResolver(formSchema) }
      const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

      const onSubmit = async data => {
          const {password, password2} = data;
        try{
          toast.loading('Reseting...', {
            id: 'reset'
          })
        const detail = await axios.post('/rest-auth/password/reset/confirm/', {
          new_password1: password,
          new_password2: password2,
          uid: uid,
          token: token,
      }).then(res => res.data.detail)
      toast.success(`${detail}`, {
        id:'reset'
      })
      setTimeout(() => {
        toast.loading('Redirecting to login...',{
          id: 'reset'
        })
      },2000)
    navigate('/login')
      }catch(err){
        if(err.response.data.token){
          toast.error('Invalid Token, Token has already been used or expired',{
            id:'reset'
          })
        }
        else{
          toast.error('Reset Failed, try again later',{
            id:'reset'
          })
        }
     
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
          Reset Password
        </h2>
      
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px flex flex-col  gap-5 rounded-md shadow-sm">
       
        <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                {errors.password && <p className='text-red-500 text-[14px] mb-2' role="alert">{errors.password?.message}</p>}
               
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  {...register('password')}
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password2" className="sr-only">
                  Confirm Password
                </label>
                {errors.confirmpassword && <p className='text-red-500 text-[14px] mb-2' role="alert">{errors.confirmpassword?.message}</p>}
               
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  autoComplete="current-password"
                  required
                  {...register('password2')}
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
        </div>


        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2  focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
  
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" />
</svg>

            </span>
            Reset Password
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ResetPass