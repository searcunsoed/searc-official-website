import { client } from '@/lib/sanityClient';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import Footer from '@/app/components/Footer'

async function getWorkingPaper(slug: string, lang: string) {
  const isEn = lang === 'en';
  const query = `*[_type == "workingPaper" && slug.current == $slug][0] {
    "title": coalesce(${isEn ? 'title_en,' : ''}title),
    "abstract": coalesce(${isEn ? 'abstract_en,' : ''}abstract),
    publishedAt,
    "authorName": author->name,
    "fileUrl": pdfFile.asset->url
  }`;
  return await client.fetch(query, { slug }, { next: { revalidate: 0 } });
}

export default async function WorkingPaperDetail({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';
  const paper = await getWorkingPaper(slug, lang);

  const t = {
    back: lang === 'en' ? 'Back to List' : 'Kembali ke Daftar',
    download: lang === 'en' ? 'Download PDF' : 'Unduh PDF',
    previewNotSupported: lang === 'en' 
      ? 'Your browser does not support PDF preview. Please download to read.' 
      : 'Browser Anda tidak mendukung pratinjau PDF. Silakan unduh untuk membaca.',
    by: lang === 'en' ? 'By' : 'Oleh'
  };

  if (!paper) {
    return <div className="min-h-screen flex items-center justify-center">Data tidak ditemukan.</div>;
  }

  return (
    <main className="bg-slate-50 min-h-screen pt-8">
      <div className="max-w-5xl mx-auto px-4 py-16">
        
        {/* Tombol Kembali */}
        <Link href="/working-paper" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold mb-8">
          <FaArrowLeft className="mr-2" /> {t.back}
        </Link>

        {/* Judul & Info */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-sans text-slate-900 mb-4">
            {paper.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-slate-600 mb-6 border-b pb-6">
            <span className="font-medium">{t.by} {paper.authorName || 'SEARC Unsoed'}</span>
            <span>•</span>
            <span>{new Date(paper.publishedAt).toLocaleDateString(lang === 'en' ? 'en-GB' : 'id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          
          <h3 className="font-bold text-lg mb-2">Abstract:</h3>
          <p className="text-slate-700 leading-relaxed mb-8">
            {paper.abstract}
          </p>

          {/* Tombol Download */}
          {paper.fileUrl && (
            <a 
              // Tambahkan ?dl= untuk memaksa browser mengunduh file, bukan membukanya di tab baru
              href={`${paper.fileUrl}?dl=`} 
              className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg transition-colors shadow-md"
            >
              <FaDownload className="mr-3" />
              {t.download}
            </a>
          )}
        </div>

        {/* PDF PREVIEW VIEWER */}
        {paper.fileUrl ? (
          <div className="bg-white p-4 rounded-2xl shadow-sm border h-[800px] flex flex-col">
            <div className="bg-slate-100 p-3 rounded-t-lg border-b text-center font-semibold text-slate-600">
              Document Preview
            </div>
            {/* Menggunakan iframe untuk render PDF */}
            <iframe 
              src={paper.fileUrl} 
              className="w-full h-full rounded-b-lg border-none"
              title="PDF Preview"
            >
              <p>{t.previewNotSupported}</p>
            </iframe>
          </div>
        ) : (
          <div className="bg-red-50 p-6 rounded-xl text-red-600 text-center border border-red-200">
            File PDF belum diunggah untuk dokumen ini.
          </div>
        )}

      </div>
      <Footer lang={lang} />
    </main>
  );
}