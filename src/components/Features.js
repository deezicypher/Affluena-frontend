import React from 'react'
import styles,{layout} from '../style'
import {features} from '../constants/constants';


const {headingSub, paragraph, flexCenter,flexStart}  = styles;
const {section, sectionInfo, sectionImg} = layout;




const Features = () => {
  return (
    <div id="about" className={`${section}`}>
    <div className={sectionInfo}>
    <h2 className={`${headingSub} md:text-[-20px]`}>
      Unlock the power <br className='sm:block hidden' />
      of your investment and make a positive impact
      </h2>
      <p className={`${paragraph} max-w-[470px] mt-5`} >As a member of our community,
       you will have the opportunity to unlock the full potential 
       of your investment and make a positive impact on the world.
      </p>
      <a
                        href="#"
                        className="inline-block mt-10 rounded-lg bg-secondary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#00d5a0] hover:bg-[#00d5a0]-700 hover:ring-[#00d5a0]-700"
                      >
                        Get started
                        <span className="text-white-200" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
      </div>
  
  <div className={`${sectionImg} flex-col ${flexStart} gap-10`}>
    {features?.map(feature => (
        <div className={`flex  flex-row sm:p-6 rounded-[20px] feature-card  `} key={feature.id} >
        <div className={`w-[64px] h-[64px] rounded-full ${flexCenter} bg-dimBlue`}>
        {feature.svg}
        </div>
        <div className='flex-1  flex flex-col ml-3'>
          <h4 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1'>
            {feature.title}
          </h4>
          <p className='font-poppins font-normal text-[14px] leading-[23px]' >
            {feature.content}
          </p>
        </div>
      </div>
    ) )}
  
  </div>

  </div>
  )
}

export default Features