import ArticleCard from '@/app/components/ArticleCard';
import { client, urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import { Article } from '@/lib/types';
import { categoryMappings } from '@/lib/categoryMappings';
import Footer from '@/app/components/Footer';

async function getArticlesByCategory(categorySlug: string) {
    const mapping = categoryMappings[categorySlug] || {};
    const sanityCategory = mapping.sanityCategory;

    if (!sanityCategory) return [];

    const query = `*[_type == "article" && category == $sanityCategory] | order(publishedAt desc) {
        ...,
        "authorNames": author[]->name
    }`;
    
    const params = { sanityCategory: sanityCategory };

    const data = await client.fetch(query, params);
    return data;
}

export default async function CategoryPage({ params }: { params: { kategori: string } }) {
    const categorySlug = params.kategori;
    
    const mapping = categoryMappings[categorySlug] || { pageTitle: "Kategori Tidak Ditemukan" };
    const categoryName = mapping.pageTitle;
    
    const articles = await getArticlesByCategory(categorySlug);

  return (
    <main className="bg-gradient-to-t from-white to-yellow-500/10 min-h-screen">
        <section className="relative h-[50vh] bg-yellow-500 text-white flex items-center justify-center text-center">
            <Image 
                src="/images/unsoed-2.webp"
                alt="Tentang SEARC"
                fill
                className="object-cover z-0 opacity-50"
            />
            <div className="relative z-10 p-4">
                <p className="text-base font-semibold text-white">Kategori Artikel</p>
                <h1 className="mt-2 text-4xl font-extrabold font-sans text-white sm:text-5xl">
                    {categoryName}
                </h1>
            </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {articles && articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {articles.map((item: Article) => (
                <ArticleCard
                    key={item._id}
                    href={`/artikel/${params.kategori}/${item.slug.current}`}
                    imageSrc={urlFor(item.mainImage).url()}
                    category={item.category}
                    author={item.authorNames}
                    date={item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Tanggal tidak tersedia'}
                    title={item.title}
                    excerpt={item.excerpt}
                />
                ))}
            </div>
            ) : (
            <div className="text-center py-16">
                <h3 className="text-2xl font-bold font-sans text-yellow-700">
                    Belum Ada Artikel
                </h3>
                <p className="mt-2 text-gray-600">
                    Saat ini belum ada artikel yang dipublikasikan dalam kategori ini.
                </p>
            </div>
            )}
        </section>
        <Footer />
    </main>
  );
}