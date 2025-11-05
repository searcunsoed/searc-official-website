"use client";

import { useState } from 'react';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
  subMenu?: NavLink[];
  isExternal?: boolean;
}

interface DropdownProps {
  item: NavLink;
}

export default function Dropdown({ item }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="text-white hover:bg-white/75 hover:text-amber-900 px-3 py-2 rounded-md text-sm font-sans font-semibold transition-colors flex items-center">
        {item.label}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      <div 
        className={`
          absolute top-full left-0 w-56 rounded-md shadow-lg bg-yellow-50 backdrop-blur ring-1 ring-amber-500 ring-opacity-5
          transition-all duration-200 ease-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <div className="py-1">
          {item.subMenu?.map((subItem) => (
            subItem.isExternal ? (
              <a
                key={subItem.label}
                href={subItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 block px-4 py-2 text-sm hover:bg-yellow-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {subItem.label}
              </a>
            ) : (
              <Link
                key={subItem.href}
                href={subItem.href}
                className="text-slate-700 block px-4 py-2 text-sm hover:bg-yellow-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {subItem.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
}