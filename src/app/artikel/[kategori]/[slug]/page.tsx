import { client, urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

async function getArticleDetail(slug: string) {
    const query = `*[_type == "article" && slug.current == $slug][0] {
        _id,
        title,
        category,
        publishedAt,
        mainImage,
        excerpt,
        "authorNames": author->name,
        "authorImage": author->profileImage,
        body
    }`;
    const params = { slug: slug };
    const data = await client.fetch(query, params);
    return data;
}

export default async function ArticleDetailPage({ params }: { params: { kategori: string; slug: string } }) {
    const article = await getArticleDetail(params.slug);
    if (!article) {
        return (
        <main className="flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Artikel Tidak Ditemukan</h1>
            <p className="mt-4 text-gray-600">Maaf, kami tidak dapat menemukan artikel yang Anda cari.</p>
            <Link href="/artikel" className="mt-6 inline-block text-blue-600 hover:underline">Kembali ke daftar artikel</Link>
            </div>
        </main>
        );
    }

    return (
        <main className="bg-white">
            <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <article>
                    <header className="mb-12 text-center">
                        <Link href={`/artikel/${params.kategori}`} className="text-base font-semibold text-yellow-600 hover:underline">
                            {article.category || 'Artikel'}
                        </Link>
                        <h1 className="mt-2 text-3xl font-extrabold font-sans text-gray-900 sm:text-4xl md:text-5xl">
                            {article.title || 'Judul Tidak Tersedia'}
                        </h1>
                        <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
                            {article.authorImage && (
                                <Image
                                src={urlFor(article.authorImage).width(40).height(40).url()}
                                alt={article.authorNames || 'Penulis'}
                                width={40}
                                height={40}
                                className="rounded-full"
                                />
                            )}
                            <span>Oleh {article.authorNames || 'Penulis Tidak Diketahui'}</span>
                            <span>•</span>
                            <time dateTime={article.publishedAt}>
                                {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Tanggal tidak tersedia'}
                            </time>
                        </div>
                    </header>
                {article.mainImage && (
                    <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={urlFor(article.mainImage).url()}
                            alt={article.title || 'Gambar Artikel'}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
                {article.body ? (
                    <div className="prose prose-lg lg:prose-xl mx-auto mt-12 text-gray-700">
                        <PortableText value={article.body} />
                    </div>
                ) : article.excerpt ? (
                    <div className="prose prose-lg lg:prose-xl mx-auto mt-12 text-gray-700">
                        <p>{article.excerpt}</p>
                    </div>
                ) : (
                    <div className="text-center text-gray-500 mt-12">Isi artikel belum tersedia.</div>
                )}
                </article>
            </div>
            <Footer />
        </main>
    );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleDetail(params.slug);
  if (!article) return { title: 'Artikel Tidak Ditemukan' }
  return {
    title: `${article.title} | SEARC Unsoed`,
    description: article.excerpt,
  }
}