import { client } from '@/lib/sanityClient';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '../../components/Footer';

async function getJournalDetail(slug: string, lang: string) {
  const query = `*[_type == "journalArticle" && slug.current == $slug][0] {
    "title": coalesce(${lang === 'en' ? 'title_en,' : ''} title),
    "abstract": coalesce(${lang === 'en' ? 'abstract_en,' : ''} abstract),
    authors,
    externalLink
  }`;
  return await client.fetch(query, { slug }, { next: { revalidate: 0 } });
}

export default async function JurnalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  
  const resolvedParams = await params;
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';
  const journal = await getJournalDetail(resolvedParams.slug, lang);

  const t = {
    noAuthor: lang === 'en' ? 'Unknown Author' : 'Penulis Tidak Diketahui'
  };

  if (!journal) return <div className="pt-40 text-center">Article not found</div>;

  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        
        <Link href="/jurnal" className="inline-flex items-center text-yellow-600 hover:gap-2 transition-all mb-8 font-semibold">
          <FaArrowLeft className="mr-2" /> {lang === 'en' ? 'Back to List' : 'Kembali ke Daftar'}
        </Link>

        <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
            Journal Article
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4">
            {journal.title}
          </h1>
          
          <div className="flex gap-4 text-slate-500 text-sm mb-10 border-b pb-6">
            <p><strong>Authors : </strong> 
                {journal.authors && journal.authors.length > 0 ? journal.authors.join(', ') : t.noAuthor}</p>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Abstract</h3>
            <p className="text-slate-600 leading-relaxed text-lg italic bg-slate-50 p-6 rounded-2xl border-l-4 border-yellow-500">
              {journal.abstract}
            </p>
          </div>

          {journal.externalLink && (
            <div className="mt-12 pt-8 border-t">
              <a 
                href={journal.externalLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white font-bold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105"
              >
                {lang === 'en' ? 'Read Full Article' : 'Baca Artikel Lengkap'}
                <FaExternalLinkAlt />
              </a>
            </div>
          )}
        </article>
      </div>
      <Footer lang={lang} />
    </main>
  );
}