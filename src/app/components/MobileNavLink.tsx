"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

interface NavLink {
    href?: string;
    label: string;
    subMenu?: NavLink[];
    isExternal?: boolean;
}

interface MobileNavLinkProps {
    item: NavLink;
    closeMenu: () => void;
}

export default function MobileNavLink({ item, closeMenu }: MobileNavLinkProps) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    if (!item.subMenu) {
        return item.isExternal ? (
        <a
            href={item.href || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200"
            onClick={closeMenu}
        >
            {item.label}
        </a>
        ) : (
        <Link
            href={item.href || '#'}
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200"
            onClick={closeMenu}
        >
            {item.label}
        </Link>
        );
    }

    return (
        <div>
            <button
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                className="w-full flex justify-between items-center text-white px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200"
            >
                <span>{item.label}</span>
                <FaChevronDown 
                    className={`transform transition-transform duration-200 ${
                        isSubMenuOpen ? 'rotate-180' : 'rotate-0'
                    }`} 
                />
            </button>
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isSubMenuOpen ? 'max-h-96' : 'max-h-0'
                }`}
            >
                <div className="pl-4 py-2 space-y-1 bg-slate-100 rounded-b-md">
                    {item.subMenu.map((subItem) => (
                        subItem.isExternal ? (
                        <a
                            key={subItem.label}
                            href={subItem.href || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 block px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200"
                            onClick={closeMenu}
                        >
                            {subItem.label}
                        </a>
                        ) : (
                        <Link
                            key={subItem.label}
                            href={subItem.href || '#'}
                            className="text-slate-600 block px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200"
                            onClick={closeMenu}
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