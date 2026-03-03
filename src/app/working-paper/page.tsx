import { client, urlFor } from '@/lib/sanityClient';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';
import { FaFilePdf, FaCalendarAlt } from 'react-icons/fa';
import Footer from '../components/Footer';

async function getWorkingPapers(lang: string) {
  const query = `*[_type == "workingPaper"] | order(publishedAt desc) {
    _id,
    "title": coalesce(${lang === 'en' ? 'title_en,' : ''} title),
    "abstract": coalesce(${lang === 'en' ? 'abstract_en,' : ''} abstract),
    slug,
    publishedAt,
    coverImage,
    "authorName": author->name
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function WorkingPaperList() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || 'id';
    const papers = await getWorkingPapers(lang);

    const t = {
        title: lang === 'en' ? 'Working Papers' : 'Working Paper',
        subtitle: lang === 'en' 
            ? 'Explore our latest research and working papers.' 
            : 'Explore our latest research and working papers',
        readMore: lang === 'en' ? 'Read & Download' : 'Baca & Unduh',
        noData: lang === 'en' ? 'No working papers available yet.' : 'Belum ada working paper.',
        by: lang === 'en' ? 'By' : 'Oleh'
    };

    return (
        <main className="min-h-screen bg-slate-50">
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
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {papers.length > 0 ? (
                        papers.map((paper: any) => (
                            <div key={paper._id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border overflow-hidden flex flex-col">
                                <div className="h-48 relative bg-slate-200 flex items-center justify-center">
                                    {paper.coverImage ? (
                                        <Image 
                                        src={urlFor(paper.coverImage).url()} 
                                        alt={paper.title} 
                                        fill 
                                        className="object-cover"
                                        />
                                    ) : (
                                        <FaFilePdf className="text-6xl text-slate-400" />
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-sm text-yellow-600 mb-3">
                                        <FaCalendarAlt />
                                        <span>
                                        {new Date(paper.publishedAt).toLocaleDateString(lang === 'en' ? 'en-GB' : 'id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-800 line-clamp-2 mb-2">
                                        {paper.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                                        {paper.abstract}
                                    </p>
                                    <p className="text-sm text-slate-500 mb-4 font-medium">
                                        {t.by} {paper.authorName || 'SEARC Unsoed'}
                                    </p>
                                    <Link 
                                        href={`/working-paper/${paper.slug.current}`}
                                        className="inline-block text-center w-full py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
                                    >
                                        {t.readMore}
                                    </Link>
                                </div>
                            </div>
                            ))
                        ) : (
                        <p className="text-center text-slate-500 col-span-full py-10">{t.noData}</p>
                    )}
                </div>
            </section>
            <Footer lang={lang} />
        </main>
    );
}