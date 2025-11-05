import ActivityCard from '@/app/components/ActivityCard';
import { client, urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import { Activity } from '@/lib/types';
import Footer from '../components/Footer';

async function getActivities() {
    const query = `*[_type == "activity"] | order(date desc)`;
    const data = await client.fetch(query);
    return data;
}

export default async function AktivitasPage() {
    const activities = await getActivities();
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
                    <h1 className="text-4xl md:text-6xl font-extrabold font-sans">Aktivitas Kami</h1>
                    <p className="mt-4 text-lg text-white">
                        Jelajahi berbagai seminar, konferensi, workshop, dan kegiatan lainnya yang kami selenggarakan.
                    </p>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {activities && activities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((item: Activity) => (
                    <ActivityCard
                        key={item._id}
                        imageSrc={item.mainImage ? urlFor(item.mainImage).url() : '/images/placeholder.jpg'} // Fallback image
                        category={item.category || 'Kegiatan'}
                        date={item.date ? new Date(item.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Tanggal tidak tersedia'}
                        title={item.title || 'Judul tidak tersedia'}
                        description={item.description || ''}
                    />
                    ))}
                </div>
                ) : (
                <div className="text-center py-20 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold font-sans text-gray-900">Belum Ada Aktivitas</h3>
                    <p className="mt-2 text-gray-500">Saat ini belum ada jadwal aktivitas yang dipublikasikan.</p>
                </div>
                )}
            </section>
            <Footer />
        </main>
    );
}