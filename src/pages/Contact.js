import { useState} from 'react'
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom';
import logo from '../assets/img/fly.png'
import toast from 'react-hot-toast';
import axios from '../config/axios';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const Contact = () => {
  const formSchema = yup.object().shape({
    name: yup.string()
    .required('Please enter your Full Name'), 
    email: yup.string()
    .required('Please enter your email')
    .email('Enter a valid email address'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    message: yup.string()
    .required('Please enter a Message'), 
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const {register, handleSubmit, formState: {errors}} = useForm(formOptions);

  const [value, setValue] = useState();


  const onSubmit = async data => {
    try{
      toast.loading('Submiting...',{
        id: "contact"
      });
      const detail = await axios.post('/contact-us/', data).then(res => res.data)
   
     
       toast.success(`${detail.success}`, {
        id: "contact"
       })         
    }catch(err){
      toast.error("Sorry Your message can't be processed at the moment.", {
        id: "contact"
      })
    }
    }

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
          Get in Touch
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We would Like to hear from you
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
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
          
          <div >
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
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                {errors.message && <p className='text-red-500 text-[14px] mb-2' role="alert">{errors.message?.message}</p>}
                <textarea 
                rows="5" 
                cols="33"
                id="message"
                name="message"
                type="textArea"
                autoComplete="message"
                {...register('message')}
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                placeholder="Message"
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
<path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd" />
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

export default Contact