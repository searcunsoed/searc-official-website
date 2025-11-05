import Image from 'next/image';
import Link from 'next/link';
import { FaDownload, FaExclamationCircle } from 'react-icons/fa';
import { client, urlFor } from '@/lib/sanityClient';
import Footer from '../components/Footer';

async function getBookChapters() {
  const query = `*[_type == "bookChapter"] | order(year desc)`; 
  const data = await client.fetch(query);
  return data;
}

export default async function BookChapterPage() {
  const bookChapters = await getBookChapters();

  return (
    <main className="bg-gradient-to-t from-white to-yellow-500/10">
        <section className="relative h-[50vh] bg-yellow-500 text-white flex items-center justify-center text-center">
            <Image 
                src="/images/unsoed-2.webp"
                alt="Tentang SEARC"
                fill
                className="object-cover z-0 opacity-50"
            />
            <div className="relative z-10 p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold font-sans">Book Chapter</h1>
                <p className="mt-4 text-lg text-white">
                    Koleksi chapter buku yang ditulis oleh peneliti dan asisten peneliti SEARC Unsoed.
                </p>
            </div>
        </section>
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {bookChapters && bookChapters.length > 0 ? (
                <div className="space-y-12">
                {bookChapters.map((chapter: any) => (
                    <article 
                    key={chapter._id}
                    className="group bg-white p-6 sm:p-8 rounded-xl border hover:border-yellow-700 hover:border-yellow-700/70 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row gap-8"
                    >
                    <div className="flex-shrink-0 w-full sm:w-48">
                        <div className="aspect-[3/4] relative rounded-md overflow-hidden">
                        {chapter.coverImage && (
                            <Image
                            src={urlFor(chapter.coverImage).url()}
                            alt={`Sampul ${chapter.bookTitle}`}
                            fill
                            className="object-cover"
                            />
                        )}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold font-sans text-gray-900 group-hover:text-yellow-700 transition-colors">
                        {chapter.title}
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            oleh <span className="font-medium text-yellow-600">{chapter.authors.join(', ')}</span>
                        </p>
                        <div className="mt-4 text-gray-600">
                        <p>
                            Dalam buku: <em className="font-semibold">{chapter.bookTitle}</em>
                        </p>
                        <p className="text-sm">
                            Penerbit: {chapter.publisher} ({chapter.year})
                        </p>
                        </div>
                        <div className="mt-auto pt-6">
                        <Link 
                            href={chapter.downloadLink || '#'} 
                            target="_blank" 
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white font-bold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105"
                        >
                            <FaDownload className="mr-2" />
                            Unduh/Lihat
                        </Link>
                        </div>
                    </div>
                    </article>
                ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-lg shadow-md">
                    <FaExclamationCircle className="mx-auto h-12 w-12 text-yellow-800" />
                    <h3 className="mt-4 text-2xl font-bold font-sans text-yellow-700">
                        Belum Ada Book Chapter
                    </h3>
                    <p className="mt-2 text-base text-yellow-500">
                        Saat ini belum ada book chapter yang dipublikasikan. Silakan periksa kembali nanti.
                    </p>
                </div>
            )}
        </section>
        <Footer />
    </main>
  );
}