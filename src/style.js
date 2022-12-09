const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading:'text-3xl font-bold  sm:text-center sm:text-6xl',
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-primary xs:leading-[76.8px] leading-[66.8px] w-full",
    headingSub: "font-poppins font-semibold xs:text-[48px] text-[30px] text-primary  w-full",
    heading3: "font-poppins font-semibold xs:text-[32px] text-[25px] text-primary xs:leading-[76.8px] leading-[66.8px] w-full",
    heading4: "font-poppins font-semibold text-xl font-bold  sm:text-center sm:text-2xl",
    paragraph: "font-poppins font-normal text-primary text-[18px] leading-[30.8px]",

    flexBetween: "flex  items-center flex-col gap-5",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    hr: 'w-[50px] h-[3px] my-[20px] border-none bg-secondary',
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;