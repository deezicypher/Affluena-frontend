


const Hero = () => {
   

    return (
      <div className="isolate  bg-white">
    
          <main>
            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                <div>
                  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                 
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold  sm:text-center sm:text-6xl">
                    Grow your wealth and make a positive impact.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    Join our community of like-minded investors and make a lasting impact on the world with your contribution.
                    Invest in positive change.
                    </p>
                    <div className="mt-8 flex gap-x-4 sm:justify-center">
                      <a
                        href="#"
                        className="inline-block rounded-lg bg-secondary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#00d5a0] hover:bg-[#00d5a0]-700 hover:ring-[#00d5a0]-700"
                      >
                        Get started
                        <span className="text-white-200" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                      <a
                        href="#"
                        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-[#00d5a0] hover:ring-[#00d5a0]"
                      >
                        Learn More
                        <span className="text-gray-400" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg width="331" height="334" viewBox="0 0 331 334" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="165.5" cy="167" rx="165.5" ry="167" fill="url(#paint0_radial_0_3)"/>
<defs>
<radialGradient id="paint0_radial_0_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(165.5 167) rotate(90) scale(167 165.5)">
<stop stopColor="#7AF2DD"/>
<stop offset="1" stopColor="#BCF8ED" stopOpacity="0.1"/>
</radialGradient>
</defs>
</svg>


                  </div>
               
                </div>
              </div>
            </div>
          </main>
        </div>
      )
    }
export default Hero