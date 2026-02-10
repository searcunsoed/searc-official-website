'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [lang, setLang] = useState('id');

  // 1. Cek bahasa apa yang sedang aktif saat halaman dimuat
  useEffect(() => {
    const cookies = document.cookie.split('; ');
    const langCookie = cookies.find(row => row.startsWith('lang='));
    if (langCookie) {
      setLang(langCookie.split('=')[1]);
    }
  }, []);

  // 2. Fungsi saat tombol diklik
  const switchLanguage = (newLang: string) => {
    // Simpan pilihan ke Cookie browser (biar diingat selama 1 tahun)
    document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
    
    // Update tampilan tombol
    setLang(newLang);
    
    // Refresh halaman otomatis agar tulisan berubah
    router.refresh();
    window.location.reload(); 
  };

  return (
    <div className="flex items-center gap-1 border border-yellow-300/50 bg-yellow-600/20 rounded-full p-1">
      {/* Tombol Indonesia */}
      <button
        onClick={() => switchLanguage('id')}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
          lang === 'id' 
            ? 'bg-white text-yellow-600 shadow-sm' 
            : 'text-white/80 hover:bg-white/10'
        }`}
      >
        ID
      </button>

      {/* Tombol Inggris */}
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
          lang === 'en' 
            ? 'bg-white text-yellow-600 shadow-sm' 
            : 'text-white/80 hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
}