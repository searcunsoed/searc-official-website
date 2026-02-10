"use client";

import { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Image from 'next/image';
import MobileNavLink from './MobileNavLink';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar({ lang }: { lang: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const t = {
    profil: lang === 'en' ? 'Profile' : 'Profil',
      selayang: lang === 'en' ? 'Overview' : 'Selayang Pandang',
      peneliti: lang === 'en' ? 'Researchers' : 'Peneliti',
      asisten: lang === 'en' ? 'Research Assistants' : 'Asisten Peneliti',
      mitra: lang === 'en' ? 'Partners' : 'Mitra',
    publikasi: lang === 'en' ? 'Publications' : 'Publikasi',
      buku: lang === 'en' ? 'Book Chapter' : 'Book Chapter',
      proceedings: lang=== 'en' ? 'Proceedings' : 'Prosiding',
      journal: lang=== 'en' ? 'SEA Insight Journal' : 'Jurnal SEA Insight',
    artikel: lang === 'en' ? 'Articles' : 'Artikel',
    berita: lang === 'en' ? 'SEA Update' : 'SEA Update',
    aktivitas: lang === 'en' ? 'Our Activities' : 'Aktivitas Kami',
    tulis: lang === 'en' ? 'Write for Us' : 'Write for Us',
  };

  const navLinks = [
    { 
      href: '/profil', 
      label: t.profil,
      subMenu: [
        { href: '/selayang-pandang', label: t.selayang },
        { href: '/peneliti', label: t.peneliti },
        { href: '/asisten-peneliti', label: t.asisten },
        { href: '/mitra', label: t.mitra },
      ] 
    },
    { 
      href: '/publikasi',
      label: t.publikasi,
      subMenu: [
        { href: '/buku', label: t.buku },
        { href: '/proceedings', label: t.proceedings },
        { 
          href: 'https://jos.unsoed.ac.id/index.php/sassp/focus_and_scope', 
          label: t.journal, 
          isExternal: true
        },
      ]
    },
    { 
      href: '/artikel', 
      label: t.artikel,
      subMenu: [
        { href: '/artikel/economic-social', label: 'Economic and Social Walfare' },
        { href: '/artikel/law-and-human-rights', label: 'Law and Human Rights' },
        { href: '/artikel/politics-ir', label: 'Politics and International Relations Research' },
        { href: '/artikel/culture-linguistics', label: 'Culture and Linguistics' },
      ]
    },
    { href: '/berita', label: t.berita },
    { href: '/aktivitas', label: t.aktivitas },
    { href: '/submission', label: t.tulis },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-yellow-500 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/searc-logo-white-v1.png" alt="Logo Searc" width={150} height={50} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                link.subMenu ? (
                  <Dropdown key={link.href} item={link} />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:bg-white/75 hover:text-amber-900 px-3 py-2 rounded-md text-sm font-semibold font-sans transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pl-4 ml-2 border-l border-yellow-300/50 h-6 flex items-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-slate-100 inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-slate-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Buka menu utama</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <MobileNavLink 
              key={link.label} 
              item={link} 
              closeMenu={() => setIsOpen(false)} 
            />
          ))}
          <div className="mt-4 pt-4 border-t border-yellow-400/50 flex justify-center pb-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}