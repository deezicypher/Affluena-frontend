import { useState } from 'react'
import {Dialog} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import affluena from '../assets/img/fly.png';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Product', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Have an issue?', href: '/contact' }
]





const Hero = () => {
   
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
      <div className="isolate  bg-white">
    
            <div className="absolute inset-x-0 top-[-20rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-15rem] ">
        <svg width="331" height="334" viewBox="0 0 331 334" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="165.5" cy="167" rx="165.5" ry="167" fill="url(#paint0_radial_0_3)"/>
<defs>
<radialGradient id="paint0_radial_0_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(165.5 167) rotate(90) scale(167 165.5)">
<stop stopColor="#ABFAEB" stopOpacity="0.54"/>
<stop offset="1" stopColor="#BCF8ED" stopOpacity="0.1"/>
</radialGradient>
</defs>
</svg>
        </div>
        <div className="absolute left-[10] -z-10 overflow-hidden blur-3xl opacity-40 ">
        <svg width="331" height="334" viewBox="0 0 331 334" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="165.5" cy="167" rx="165.5" ry="167" fill="url(#paint0_radial_0_3)"/>
<defs>
<radialGradient id="paint0_radial_0_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(165.5 167) rotate(90) scale(167 165.5)">
<stop stopColor="#ABFAEB" stopOpacity="0.54"/>
<stop offset="1" stopColor="#BCF8ED" stopOpacity="0.1"/>
</radialGradient>
</defs>
</svg>



        </div>
        <div className="absolute  right-10 -z-10 md:top-0 md:right-0 opacity-70 ">
        <svg width="331" height="334" viewBox="0 0 331 334" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="165.5" cy="167" rx="165.5" ry="167" fill="url(#paint0_radial_0_3)"/>
<defs>
<radialGradient id="paint0_radial_0_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(165.5 167) rotate(90) scale(167 165.5)">
<stop stopColor="#ABFAEB" stopOpacity="0.54"/>
<stop offset="1" stopColor="#BCF8ED" stopOpacity="0.1"/>
</radialGradient>
</defs>
</svg>



        </div>
      
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav className="flex h-9 items-center justify-between" aria-label="Global">
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Affluena</span>
                  <img className="h-10" src={affluena} alt="" />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                {navigation.map((item) => (
                  
                  <Link key={item.name} to={item.href} className="font-semibold text-gray-900 hover:text-gray-900 z-10">
                    {item.name}
                  </Link>
                  
                ))}
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <Link to="/login"
                  className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Log in
                </Link>
              </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Affluena</span>
                      <img className="h-8" src={affluena} alt="" />
                    </a>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <Link to="/login"
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </div>
    
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
                      <Link
                       to="/register"
                        className="inline-block rounded-lg bg-secondary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-[#00d5a0] hover:bg-[#00d5a0]-700 hover:ring-[#00d5a0]-700"
                      >
                        Get started
                        <span className="text-white-200" aria-hidden="true">
                          &rarr;
                        </span>
                      </Link>
                      <Link
                        to="/About"
                        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-[#00d5a0] hover:ring-[#00d5a0]"
                      >
                        Learn More
                        <span className="text-gray-400" aria-hidden="true">
                          &rarr;
                        </span>
                      </Link>
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