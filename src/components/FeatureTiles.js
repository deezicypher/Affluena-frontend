import React from 'react'
import styles,{layout} from '../style'

const {heading4, paragraph, flexCenter,flexBetween}  = styles;
const {section} = layout;


const FeatureTiles = () => {
  return (
    <div className={`${section} ${flexCenter} gap-10`}>
      
            <div className={`${flexBetween} md:w-80`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-[#fabe14]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg>

<h3 className={`text-primary ${heading4}`} >
    50% APY
</h3>

<p className={` text-primary text-center text-[14px] md:text-md`}>
50% APY returns on Simple Interest Plan.<br/>
N200K Minimum Contribution.
Fixed Deposit
</p>

            </div>
            <div className={`${flexBetween} md:w-80`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-[#fabe14] ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
</svg>

<h3 className={`text-primary ${heading4}`} >
80% APY
</h3>

<p className={` text-primary text-center text-[14px] md:text-md`}>50% APY returns on Compound Interest Plan.<br/>
N500K Minimum Contribution.
</p>

            </div>
            <div className={`${flexBetween} md:w-80` } >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-[#fabe14]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>

<h3 className={`text-primary ${heading4}`} >
   -10%
</h3>
<p className={` text-primary text-center text-[14px] md:text-md`}>
Compound Interest members for at least 3 Months.
can apply for loan.30% of Expected Profit at 10% Interest.
</p>
            </div>
      
        </div>

  )
}

export default FeatureTiles