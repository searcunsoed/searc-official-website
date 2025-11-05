import Link from 'next/link';
import { FaDownload, FaCalendarAlt, FaFilePdf, FaExclamationCircle } from 'react-icons/fa';
import { client } from '@/lib/sanityClient';
import Image from 'next/image';
import { Proceedings } from '@/lib/types';
import Footer from '../components/Footer';

async function getProceedings() {
  const query = `*[_type == "proceedings"] | order(_createdAt desc)`;
  const data = await client.fetch(query);
  return data;
}

export default async function ProceedingsPage() {
    const proceedingsList = await getProceedings();

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
                    <h1 className="text-4xl md:text-6xl font-extrabold font-sans">Proceedings</h1>
                    <p className="mt-4 text-lg text-white">
                        Arsip dokumen dan hasil diskusi dari berbagai konferensi dan seminar yang diselenggarakan atau diikuti oleh SEARC.
                    </p>
                </div>
            </section>
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {proceedingsList && proceedingsList.length > 0 ? (
                    <div className="space-y-12">
                    {proceedingsList.map((proceeding: Proceedings) => (
                        <article 
                            key={proceeding._id} 
                            className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row items-start gap-8"
                        >
                            <div className="flex-shrink-0 w-full sm:w-48">
                                <div className="aspect-[3/4] relative rounded-lg bg-yellow-100/50 flex items-center justify-center">
                                    <FaFilePdf className="h-16 w-16 text-yellow-300" />
                                </div>
                            </div>
                            <div className="flex flex-col h-full flex-grow">
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                                    <FaCalendarAlt />
                                <time dateTime={proceeding.date}>{proceeding.date}</time>
                                </div>
                                <h2 className="text-2xl font-bold font-sans text-gray-900 group-hover:text-yellow-700 transition-colors">
                                    {proceeding.eventTitle}
                                </h2>
                                <p className="mt-2 text-base font-semibold text-gray-600">
                                    Tema: <em className="font-normal">{proceeding.theme}</em>
                                </p>
                                <p className="mt-4 text-gray-700 leading-relaxed flex-grow">
                                    {proceeding.description}
                                </p>
                                <div className="mt-6">
                                    <Link 
                                        href={proceeding.downloadLink || '#'} 
                                        target="_blank" 
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white font-bold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105"
                                    >
                                        <FaDownload className="mr-2" />
                                        Unduh Dokumen
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
                            Belum Ada Prosiding
                        </h3>
                        <p className="mt-2 text-base text-yellow-500">
                            Saat ini belum ada prosiding yang dipublikasikan. Silakan periksa kembali nanti.
                        </p>
                    </div>
                )}
            </section>
            <Footer />
        </main>
    );
}