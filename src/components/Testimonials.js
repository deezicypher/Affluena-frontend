import React from 'react';
import styles,{layout} from '../style'
import quote from '../assets/svg/quote.svg';
import { feedBack } from '../constants/constants';

const {section, sectionInfo} = layout;
const {flexCenter, heading3,hr} = styles;
const Card = ({name, feedback}) => (
<div className='flex justify-between flex-col py-12 px-10 rounded-[20px] max-w-[370px] 
    md:mr-10 sm:mr-5 mr-0 my-5 feedback-card hover:text-white border-2 hover:border-0 border-secondary'>
        <img src={quote} alt="" className='w-[42px] h-[27px] object-contain' />
        <p className='font-poppins font-normal 
        text-[18px] leading-[32px] 
        my-10
        '>{feedback}</p>
        <div className='flex flex-grow'>
          <div className='flex flex-col ml-4'>
              <h4 className='font-poppins font-normal text-[18px]
               leading-[32px]
                '>
                 - {name}
               </h4>
               
          </div>
        </div>
      </div>
)

const Testimonials = () => {
  return (
<div className={`${section} ${flexCenter}  gap-10`}>
        <div className={`${sectionInfo} items-center `}>
    <h2 className={`${heading3} text-center`}>What Our Members are Saying</h2>
    <div className={`${hr} `}/>
      <div className='flex sm:flex-nowrap flex-wrap sm:justify-start justify-center w-full feedback-container '>
        {feedBack.map((feedback) => (
          <Card key={feedback.id} {...feedback} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Testimonials