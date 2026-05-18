import { client } from '@/lib/sanityClient';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';
import { FaUserEdit, FaArrowRight } from 'react-icons/fa';
import Footer from '../components/Footer';

async function getJournals(lang: string) {
    const query = `*[_type == "journalArticle"] | order(publishedYear desc) {
        _id,
        "title": coalesce(${lang === 'en' ? 'title_en,' : ''} title),
        slug,
        authors, 
        publishedYear
    }`;
    return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function JurnalListPage() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || 'id';
    const journals = await getJournals(lang);

    const t = {
            title: lang === 'en' ? 'Journal Articles' : 'Artikel Jurnal',
            subtitle: lang === 'en' 
                ? 'Collection of scientific publications by SEARC Unsoed researchers' 
                : 'Collection of scientific publications by SEARC Unsoed researchers',
            readMore: lang === 'en' ? 'Read & Download' : 'Baca & Unduh',
            noData: lang === 'en' ? 'No working papers available yet.' : 'Belum ada working paper.',
            by: lang === 'en' ? 'By' : 'Oleh',
            readAbstract: lang === 'en' ? 'Read Abstract' : 'Baca Abstrak',
            unknownAuthor: lang === 'en' ? 'Unknown Author' : 'Penulis Tidak Diketahui',
            unknownYear: lang === 'en' ? 'Unknown Year' : 'Tahun Tidak Diketahui',
        };

    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] bg-yellow-500 text-white flex items-center justify-center text-center">
                <Image 
                    src="/images/unsoed-2.webp"
                    alt="Tentang SEARC"
                    fill
                    className="object-cover z-0 opacity-50"
                />
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-sans">{t.title}</h1>
                    <p className="mt-4 text-lg text-white">
                        {t.subtitle}
                    </p>
                </div>
            </section>
            <section className="space-y-6 p-16">
                {journals.map((j: any) => (
                    <Link 
                    key={j._id} 
                    href={`/jurnal/${j.slug.current}`}
                    className="group relative bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-yellow-400 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden"
                    >
                    {/* Efek Garis Kuning di Kiri saat Hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>

                    <div className="flex-1">
                        {/* Badge Tahun */}
                        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold tracking-wider rounded-full mb-4 border border-slate-200">
                        {j.publishedYear || t.unknownYear}
                        </div>

                        {/* Judul Artikel */}
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-yellow-600 transition-colors leading-snug">
                        {j.title}
                        </h2>

                        {/* Penulis (Sudah mendukung Array lebih dari 1 orang) */}
                        <div className="flex items-center gap-2 text-slate-500 mt-4 text-sm font-medium">
                        <FaUserEdit className="text-slate-400" />
                        <span>
                            {j.authors && j.authors.length > 0 ? j.authors.join(', ') : t.unknownAuthor}
                        </span>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <div className="flex-shrink-0 flex items-center gap-3 text-yellow-600 font-bold group-hover:translate-x-2 transition-transform">
                        <span className="hidden md:inline-block text-sm uppercase tracking-wider">{t.readAbstract}</span>
                        <div className="h-12 w-12 rounded-full bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-white transition-colors shadow-sm">
                        <FaArrowRight />
                        </div>
                    </div>
                    </Link>
                ))}
            </section>
            
            {journals.length === 0 && (
                <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl">
                    <p className="text-slate-500 text-lg">Belum ada artikel jurnal yang dipublikasikan.</p>
                </div>
            )}
        <Footer lang={lang} />
        </main>
    );
}