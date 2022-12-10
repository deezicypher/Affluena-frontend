import React from 'react'
import styles,{layout} from '../style';

const {section, sectionInfo} = layout;
const {flexCenter,heading3,paragraph, paddingY} = styles;

const CTA = () => {
  return (
    <div className={`${section} ${flexCenter}  sm:flex-row flex-col  `}>
        <div className={`w-full ${section} rounded-[20px] box-shadow`} >
        <div className='flex flex-col flex-1'>
            <h2 className={`${heading3} leading-0`}>What are you waiting for?</h2>
            <p className={`${paragraph} max-w-[540px]`}>
            Join our community of like-minded investors and make a lasting impact on the world    
            </p>  
    </div>
    <div className={`${flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <a
                        href="#"
                        className="inline-block rounded-lg bg-secondary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#00d5a0] hover:bg-[#00d5a0]-700 hover:ring-[#00d5a0]-700"
                      >
                        Get started
                        <span className="text-white-200" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
    </div>
    </div>
    </div>
  )
}

export default CTA