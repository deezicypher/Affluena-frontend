import React from 'react'
import styles,{layout} from '../style'

const {heading3, paragraph,hr, flexCenter,flexBetween}  = styles;
const {section, sectionInfo} = layout;



const About = () => {
  return (
    <div className={`${section} ${flexCenter}  gap-10`}>
        <div className={`${sectionInfo} items-center `}>
    <h2 className={`${heading3} text-center`}>What We Do</h2>
    <div className={`${hr} `}/>
    <p className={`${paragraph} md:text-center md:w-4/5`}>
    Our website is a platform for investors who are looking to make a positive impact on the world through their investments.
     We offer a range of investment options that are focused on supporting initiatives that are working towards making the world a better place. Whether you are interested in investing in renewable energy, education, healthcare, or any other cause, we have options that will align with your values and goals. By joining our community, you will be able to invest in projects that are making a difference and help support a better future for us all. Join us today and start making a positive impact with your investment...
    </p>
    <a
                        href="#"
                        className="inline-block rounded-lg px-4 py-1.5 mt-10 text-base font-semibold leading-7 text-gray-900 ring-1 ring-[#00d5a0] hover:ring-[#00d5a0]"
                      >
                        Read More
                        <span className="text-gray-400" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
    </div>
    
    </div>
  )
}

export default About