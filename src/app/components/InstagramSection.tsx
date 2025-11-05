// src/components/InstagramSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import AnimateOnScroll from './AnimateOnScroll';

const instagramPosts = [
    { id: 1, src: '/images/sound.webp', width: 1080, height: 1440, alt: 'Postingan Instagram 1' },
    { id: 4, src: '/images/gift3.webp', width: 1080, height: 1440, alt: 'Postingan Instagram 4' },
    { id: 2, src: '/images/palestine.webp', width: 1080, height: 1440, alt: 'Postingan Instagram 2' },
    { id: 5, src: '/images/gift1.webp', width: 1080, height: 1440, alt: 'Postingan Instagram 5' },
    { id: 3, src: '/images/tppo.webp', width: 1080, height: 1440, alt: 'Postingan Instagram 3' },
    { id: 6, src: '/images/gift2.webp', width: 1080, height: 1440, alt: 'Postingan Instagram 6' },
];

export default function InstagramSection() {
  const instagramUrl = "https://www.instagram.com/searc.unsoed";

  return (
    <section className="bg-gradient-to-t from-white to-yellow-500/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mb-16">
            <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
                <h2 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">Social Media</h2>
                <p className="mt-2 text-3xl font-extrabold font-sans text-yellow-900 sm:text-4xl">
                    Follow Us for More Informations
                </p>
                <Link 
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white font-bold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105 mt-8"
                >
                    <FaInstagram className="mr-3 h-5 w-5" />
                        Follow @SEARC_Unsoed
                </Link>
            </AnimateOnScroll>
        </div>
      </div>
      <div className="columns-2 md:columns-3 gap-4 space-y-4 items-center justify-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {instagramPosts.map((post) => (
            <div key={post.id} className="break-inside-avoid group relative rounded-lg overflow-hidden">
              <Link 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  width={post.width}
                  height={post.height}
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-4xl" />
                </div>
              </Link>
            </div>
          ))}
        </div>
    </section>
  );
}