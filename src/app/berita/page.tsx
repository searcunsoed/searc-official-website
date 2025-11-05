import NewsCardPage from '../components/NewsCardPage';
import { client, urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import Footer from '../components/Footer';

async function getNews() {
  const query = `*[_type == "news"] | order(publishedAt desc)`;
  const data = await client.fetch(query);
  return data;
}

export default async function BeritaPage() {
    const newsList = await getNews();

    return (
        <main className="bg-slate-50 min-h-screen">
            <section className="relative h-[50vh] bg-yellow-500 text-white flex items-center justify-center text-center">
                <Image 
                    src="/images/unsoed-2.webp"
                    alt="Tentang SEARC"
                    fill
                    className="object-cover z-0 opacity-50"
                />
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-sans">SEA Update</h1>
                    <p className="mt-4 text-lg text-white">
                        Ikuti perkembangan, kegiatan, dan rilis terbaru dari SEARC Unsoed.
                    </p>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {newsList && newsList.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsList.map((item: any) => (
                        <NewsCardPage
                            key={item._id}
                            href={`/berita/${item.slug?.current || item._id}`}
                            imageSrc={item.mainImage ? urlFor(item.mainImage).url() : '/images/placeholder.jpg'}
                            category={item.category || 'Berita'}
                            date={item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Tanggal tidak tersedia'}
                            title={item.title || 'Judul tidak tersedia'}
                            excerpt={item.excerpt || ''}
                        />
                    ))}
                </div>
                ) : (
                <div className="text-center py-20">
                    <h3 className="text-2xl font-bold text-gray-900">Belum Ada Berita</h3>
                    <p className="mt-2 text-gray-500">Saat ini belum ada berita yang dipublikasikan.</p>
                </div>
                )}
            </section>
            <Footer />
        </main>
    );
}