import { useState} from 'react'
import logo from '../assets/img/fly.png'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useAuthContext} from '../context/authContext';
import EmailSent from './EmailSent';
import { Link } from 'react-router-dom';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const passMatch = (data) => {
   data.matches(
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*()+=]).{8,20}$',
  `Should contains at least 8 characters and at most 20 characters\n 
  Should contains at least one digit\n 
  Should contains at least one upper case alphabet\n 
  Should contains at least one lower case alphabet\n
  Should contains at least one special character which includes !@#$%&*()+=^\n
  Should doesn't contain any white space`
)
}

const Register = () => {
    const [value, setValue] = useState();
    const {signup, regInfo} = useAuthContext();


    const formSchema = yup.object().shape({
        name: yup.string()
        .required('Please enter your Full Name'), 
        username: yup.string()
        .required('Please enter your username'), 
        email: yup.string()
        .required('Please enter your email')
        .email('Enter a valid email address'),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        password: yup.string()
        .required('Please enter a password')
        .matches(/^\S*$/, 'Whitespace is not allowed')
        .min(6, 'Password must be at 6 characters long'),
        confirmpassword: yup.string()
        .required('Confirm password')
        .oneOf([yup.ref('password')], 'Passwords does not match'),
      })

      const formOptions = { resolver: yupResolver(formSchema) }
      const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

      const onSubmit = (data) => {
       
        signup(data)
      }

      if(regInfo?.sent) return (
        <EmailSent/>
      )
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
          <Link to="/">
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Affluena"
            />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up 
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/login" className="font-medium text-secondary">
                Login
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px flex flex-col  gap-5 rounded-md shadow-sm">
            <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                {errors.name && <p className='text-red-500 text-[14px] mb-2' role="alert">{errors.name?.message}</p>}
               
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  {...register('name')}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                {errors.username && <p className='text-red-500 text-[14px] mb-2' role="alert">{errors.username?.message}</p>}
               
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  {...register('username')}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                {errors.email && <p className='text-red-500 text-[14px] mb-2' role="alert">{errors.email?.message}</p>}
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...register('email')}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                {errors.phone && <p className='text-red-500 text-[14px] mb-2' role="alert">{errors.phone?.message}</p>}
                <PhoneInput
defaultCountry="NG"
      placeholder="Enter phone number"
      value={value}
      required
      onChange={setValue}
      {...register('phone')}
      className=" rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
         />
              </div>
          
           
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
                <label htmlFor="confirmpassword" className="sr-only">
                  Confirm Password
                </label>
                {errors.confirmpassword && <p className='text-red-500 text-[14px] mb-2' role="alert">{errors.confirmpassword?.message}</p>}
               
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  {...register('confirmpassword')}
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div>
                <label htmlFor="Code" className="sr-only">
                  Referral Code (Optional)
                </label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  autoComplete="code"
           
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Referral Code (Optional)"
                />
              </div>

            <div className="flex items-center justify-center">
        
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-secondary ">
                  Forgot your password?
                </Link>
              </div>
            </div>

            

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2  focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd" />
</svg>

                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Register