"use client";
import { useState } from 'react';
import Link from 'next/link';
import ChevronRight from "../../public/icons/ChevronRight"
import { navLinks } from "../data"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='w-full bg-retrocket-red border-gray-200'>
    <nav>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="items-center md:block hidden">
              <Link href="/" className="flex items-center">
                 <img 
                     src="/images/logo_white.png"
                     className="h-10 mr-3"
                     alt="Retrocket Logo"
                  />
                </Link>
          </div>

          <div className="hidden md:block w-full">
            <div className="ml-4 flex items-center md:ml-6">
                {navLinks.map((item) => {
                   return item.links ?
                       (
                          <HoverDropdownMenuHover
                                key={item.name}
                                label={item.name}>
                                {item.links.map((link) =>
                                    <HoverDropdownMenuItem 
                                        key={link.name}
                                        href={link.path}
                                     > 
                                      {link.name}
                                    </HoverDropdownMenuItem>
                                )}     
                         </HoverDropdownMenuHover>
                         ) 
                         : 
                         (
                            <HoverDropdownMenu
                               key={item.name}
                               href={item.path}>
                              {item.name} 
                            </HoverDropdownMenu>
                        )
                      }
                    )
                }
            </div>
          </div>

          <div className="-mr-2 flex justify-between w-full md:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link href="/" className="flex items-center">
                 <img 
                     src="/images/logo_white.png"
                     className="h-10 mr-3"
                     alt="Retrocket Logo"
                  />
           </Link>
          </div>
        </div>
      </div>
      { isMenuOpen && (
        <div className="md:hidden">
           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
           {navLinks.map((item) => {
                   return item.links ?
                       (
                          <MobileDropdownMenu
                                key={item.name}
                                label={item.name}>
                                {item.links.map((link) =>
                                    <MobileDropdownMenuItem 
                                        key={link.name}
                                        href={link.path}
                                     > 
                                      {link.name}
                                    </MobileDropdownMenuItem>
                                )}     
                         </MobileDropdownMenu>
                         ) 
                         : 
                         (
                            <MobileMenu
                               key={item.name}
                               href={item.path}>
                              {item.name} 
                            </MobileMenu>
                        )
                      }
                    )
                }
           </div>
        </div>
      )}
    </nav>
    </header>
  );
}

interface HoverDropdownMenuHoverProps {
    label: string,
    children: React.ReactNode,
}

interface HoverDropdownMenuItemProps {
    href: string,
    children: React.ReactNode,
}

interface HoverDropdownMenuProps {
    href: string,
    classes?: string,
    children: React.ReactNode,
}
function HoverDropdownMenuHover({label, children}:HoverDropdownMenuHoverProps) {
  return (
    <div className="relative group">
      <button
       className="text-white hover:bg-blue-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
        {label}
      </button>
      <div className="absolute left-0 z-10 text-left mt-2 max-w-max rounded-md shadow-lg ring-1 bg-white ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
       {children}
      </div>
    </div>
  );
}

function HoverDropdownMenuItem({ href, children }: HoverDropdownMenuItemProps) {
  return (
    <Link href={href}>
      <span className="block whitespace-nowrap px-3 py-3 text-sm text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900">
        {children}
      </span>
    </Link>
  );
}

function HoverDropdownMenu({ href, classes, children }: HoverDropdownMenuProps) {
  return (
    <Link href={href}>
       <span className={`${classes 
                        ? classes 
                        : 'px-3 py-2 text-base text-white rounded-md hover:bg-blue-100 hover:text-gray-900'}`}>
        {children}
      </span>
    </Link>
  );
}

function MobileDropdownMenu({ label, children }: HoverDropdownMenuHoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="w-full flex text-left text-gray-300 hover:bg-gray-700 hover:text-white py-2 text-base font-medium focus:outline-none"
      >
      <ChevronRight classes="text-white w-6 h-6"/>
      {label}
      </button>
      {isOpen && (
        <div className="pl-4">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileDropdownMenuItem({ href, children }: HoverDropdownMenuItemProps) {
  return (
    <Link href={href}>
      <span className="flex  items-center text-left px-5 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
       {children}
      </span>
    </Link>
  );
}

function MobileMenu({ href, children }: HoverDropdownMenuItemProps) {
  return (
    <Link href={href}>
      <span className="block text-left px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
        {children}
      </span>
    </Link>
  );
}

export default Navbar;
