import React from 'react';
import styles,{layout} from '../style';

const {heading3, paragraph,hr, flexCenter,flexBetween}  = styles;
const {section, sectionInfo} = layout;


const About = () => {
  return (
    <div className={`${section} ${flexCenter}  gap-10`}>
    <div className={`${sectionInfo} items-center `}>
<h2 className={`${heading3} text-center`}>What We Do</h2>
<div className={`${hr} `}/>
<p className={`${paragraph}  md:w-4/5 leading-[40.8px] `}>
Our website is a community for investors who are looking to make a positive impact on the world through their investments. We offer a range of investment options that are focused on supporting initiatives that are working towards making the world a better place. Whether you are interested in investing in renewable energy, education, healthcare, or any other cause, we have options that will align with your values and goals. By joining our community, you will be able to invest in projects that are making a difference and help support a better future for us all.

We believe that every investment has the potential to make a positive impact, and we are committed to helping our members make informed decisions that align with their values and goals. Our investment options are carefully selected to ensure that they are not only financially sound, but also support initiatives that are working towards making the world a better place. We are constantly updating our offerings to ensure that our members have access to the latest and most promising investment opportunities.

In addition to our investment options, we also provide our members with access to a wealth of resources and tools to help them make informed decisions about their investments. Our website features a wealth of information about our investment options, as well as insights and analysis from our team of experts. We also provide educational materials and resources to help our members understand the ins and outs of impact investing, and how to make the most of their investments.

As a member of our community, you will have the opportunity to connect with like-minded investors and share your experiences, insights, and ideas. You will be able to discuss the latest trends and developments in impact investing, and learn from the experiences of other members. You will also have access to a range of exclusive events and networking opportunities, where you can connect with experts and thought leaders in the field of impact investing.

Join us today and start making a positive impact with your investment. Together, we can make a difference and create a better future for us all.
</p>

</div>

</div>
  )
}

export default About