import { client, urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

async function getNewsDetail(slug: string) {
  const query = `*[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    category,
    publishedAt,
    mainImage,
    excerpt,
    "authorName": author->name,
    body
  }`;
  const params = { slug: slug };
  const data = await client.fetch(query, params);
  return data;
}

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
    const newsItem = await getNewsDetail(params.slug);
    if (!newsItem) {
        return (
            <main className="flex items-center justify-center min-h-[50vh]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Berita Tidak Ditemukan</h1>
                    <p className="mt-4 text-gray-600">Maaf, kami tidak dapat menemukan berita yang Anda cari.</p>
                    <Link href="/berita" className="mt-6 inline-block text-blue-600 hover:underline">
                        Kembali ke daftar berita
                    </Link>
                </div>
            </main>
        );
    }
    return (
        <main className="bg-white">
            <article className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {newsItem.mainImage && (
                    <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={urlFor(newsItem.mainImage).url()}
                            alt={newsItem.title || 'Gambar Berita'}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
                <header className="mb-12 text-center">
                    <p className="text-base font-semibold text-yellow-700">{newsItem.category || 'Berita'}</p>
                    <h1 className="mt-2 text-3xl font-extrabold font-sans text-gray-900 sm:text-4xl md:text-5xl">
                        {newsItem.title || 'Judul Tidak Tersedia'}
                    </h1>
                    <p className="mt-4 text-sm text-gray-500">
                        Dipublikasikan pada {newsItem.publishedAt ? new Date(newsItem.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Tanggal tidak tersedia'}
                    </p>
                </header>
                {newsItem.body ? (
                  <div className="prose prose-lg lg:prose-xl mx-auto mt-12 text-gray-700">
                    <PortableText value={newsItem.body} />
                  </div>
                ) : newsItem.excerpt ? (
                  <div className="prose prose-lg lg:prose-xl mx-auto mt-12 text-gray-700">
                    <p>{newsItem.excerpt}</p>
                  </div>
                ) : (
                   <div className="text-center text-gray-500 mt-12">Isi berita belum tersedia.</div>
                )}

            </article>
            <Footer />
        </main>
    );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const newsItem = await getNewsDetail(params.slug);
    if (!newsItem) return { title: 'Berita Tidak Ditemukan' }
    return {
        title: `${newsItem.title} | SEARC Unsoed`,
        description: newsItem.excerpt,
    }
}