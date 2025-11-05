// src/components/FooterUGM.tsx
import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaMedium, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const socialLinks = [
  { href: '#', icon: <FaMedium /> },
  { href: '#', icon: <FaInstagram /> },
  { href: '#', icon: <FaLinkedinIn /> },
];

const importantLinks = [
    { href: 'https://unsoed.ac.id/', label: 'Universitas Jenderal Soedirman' },
    { href: 'https://fisip.unsoed.ac.id/', label: 'Fakultas Ilmu Sosial dan Ilmu Politik Unsoed' },
    { href: 'https://hi.fisip.unsoed.ac.id/', label: 'Jurusan Hubungan Internasional Unsoed' },
    { href: 'https://lppm.unsoed.ac.id/', label: 'Lembaga Penelitian dan Pengabdian Masyarakat Unsoed' },
    { href: 'https://iro.unsoed.ac.id/', label: 'Unsoed International Relations Office' },
];

export default function Footer() {
  return (
    <footer className="bg-yellow-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-extrabold font-sans">Kontak</h2>
            <div className="mt-6 space-y-4 text-white">
              <p className="flex items-center gap-3">
                <MdEmail className="text-2xl flex-shrink-0" />
                <span>lppmunsoed58@gmail.com</span>
              </p>
              <div className="flex items-start gap-3">
                <MdPhone className="text-2xl flex-shrink-0 mt-1" />
                <div>
                  <span>(0281) 62573</span><br/>
                </div>
              </div>
              <p className="flex items-start gap-3">
                <MdLocationOn className="text-2xl flex-shrink-0 mt-1" />
                <span>Gedung LPPM Unsoed <br/> Jl. Dr. Soeparno, Grendeng, Purwokerto, Kabupaten Banyumas, Jawa Tengah 53122, Indonesia</span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold font-sans">Situs Penting</h2>
            <ul className="mt-6 space-y-2">
              {importantLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image 
          src="/images/unsoed-2.webp" 
          alt="Campus background" 
          fill 
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-yellow-600/50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center py-12 px-4 text-center">
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="my-8">
            <Image 
              src="/images/logo-unsoed.png"
              alt="Logo Universitas"
              width={275}
              height={125}
              className="h-auto"
            />
          </div>

          {/* Copyright */}
          <p className="text-sm text-white">Copyright © {new Date().getFullYear()} - Southeast Asia Strategic Policies Research Center</p>
        </div>
      </div>
    </footer>
  );
}