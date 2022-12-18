import logo from '../assets/img/fly.png';
import github from '../assets/img/github.png';
import styles,{layout} from '../style';
import { footerLinks } from '../constants/constants';

const {section} = layout;
const {flexCenter,paragraph,flexStart, paddingY,paddingX} = styles;

const Footer = () => {
  return (
    <section className={` ${flexCenter} ${paddingY} ${paddingX} flex-col  w-full`}>
    <div className={`${flexStart} md:flex-row flex-col mb-8 w-full`}>
    <div className="flex flex-1 flex-col justify-start mr-10">
      <img src={logo} alt=""  className='w-[100px] h-[80px] object-contain'/>
      <p className={`${paragraph} mt-4 max-w-[310px]`} > 
      Grow your wealth and make a positive impact.
      </p>
      </div>
      <div className='flex-[1.5]  w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map( footerLink => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='mb-10 text-secondary'>
            {footerLink.title}  
            </h4> 
            <ul className='list-none'>
            {footerLink.links.map((link, index) => (
              <li key={link.name} className={`font-poppins  text-[14px] 
              leading-[24px] hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-2' : 'mb-0'}`}>{link.name}</li>
            ))}  
            </ul> 
            </div>
        ))}
      </div>
      </div>
      <div className='flex  w-full flex-col md:mt-0 mt-6'>
        <div className='flex flex-col bg-black rounded-2xl py-2 text-white'>
        <img src={github} alt=""  className='h-[30px] mt-5 object-contain'/>
     
        
        <a href='https://github.com/deezitheviper'> <p className='text-center mt-5  text-[12px]'>DeeziTheViper</p>
        </a></div>

      <div className='mt-10 font-poppins font-normal text-center text-[14px] leading-[20px] '>
        &copy; 2022 Affluena. All Rights Reserved
      </div>
      </div>
      
   </section>
  )
}

export default Footer