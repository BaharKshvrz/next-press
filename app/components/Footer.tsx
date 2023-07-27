import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {footerLinks} from "../data"

const Footer = () => {
  return (
    <footer className='w-full border-t border-gray-300 shadow-sm bg-retrocket-red text-white'>
          <div className='flex sm:px-16 px-10 py-10 sm:flex-row flex-col justify-between items-center p-4'>
              <div className='flex-[1.5] flex flex-col'>
                    <Link href="/">
                        <Image
                          src="/images/logo_white.png"
                          alt="logo"
                          width={118}
                          height={18}
                          className="object-contain"
                      />
                    </Link>
                    <p className='py-5 text-gray-100'>
                      +90 542 851 30 00 (CY)
                    </p>
              </div>
              <div className='footer__links'>
                 {footerLinks.map( link => (
                   <div 
                       key={link.title}
                       className='footer__link'
                       >
                      <h3 className='font-bold'>{link.title}</h3>
                        { link.links.map(item => (
                         <Link
                            key={item.title}
                            href={item.url}
                            className='text-gray-100 hover:text-gray-400'
                          >
                            {item.title}
                       </Link>
                      ))}
                    </div>
                 ))
                 }
              </div>
         </div>
      <div className='footer__copyrights'>
         <p className='text-gray-100'>© 2023 Retrocket Limited. All rights reserved.</p>
         <div className='footer__copyrights-link'>
           <Link href="/" className='text-gray-100'>Privacy & Policy</Link>
           <Link  href="#" className='text-gray-100'>Terms & Condition</Link>
         </div>
      </div>
    </footer>
  )
}

export default Footer
