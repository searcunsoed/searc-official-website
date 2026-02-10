import { client, urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import { Activity } from '@/lib/types';
import { FaCalendarAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import { cookies } from 'next/headers';

export const revalidate = 60;

async function getActivities() {
    const query = `*[_type == "activity"] | order(publishedAt desc) {
        _id,
        title,
        date,
        category,
        mainImage,
        description
    }`;
    return await client.fetch(query);
}

export default async function ActivitiesPage() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || 'id';
    const activities: Activity[] = await getActivities();
    const categoriesToCheck = [
        'Diseminasi Riset dan Seminar', 
        'Pengabdian Masyarakat', 
        'Podcast'
    ];

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
                        Jelajahi berbagai seminar, riset, pengabdian masyarakat, dan kegiatan lainnya yang kami selenggarakan.
                    </p>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-gradient-to-t from-white to-yellow-500/10">
                {categoriesToCheck.map((categoryName) => {
                    const filteredActivities = activities.filter(
                        (item) => item.category === categoryName
                    );
                    return (
                        <section key={categoryName}>
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-yellow-800">
                                <h2 className="text-3xl font-bold font-sans text-yellow-700">
                                    {categoryName}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredActivities.length > 0 ? (
                                    filteredActivities.map((activity) => (
                                        <div key={activity._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
                                            <div className="relative h-48 bg-slate-200">
                                                {activity.mainImage && (
                                                    <Image 
                                                        src={urlFor(activity.mainImage).url()} 
                                                        alt={activity.title} 
                                                        fill 
                                                        className="object-cover" 
                                                    />
                                                )}
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-center text-sm mb-2">
                                                    <p className="font-medium text-yellow-700">
                                                        {categoryName || 'Kegiatan'}
                                                    </p>
                                                </div>
                                                <h3 className="text-xl font-sans font-bold text-yellow-800 mb-2 line-clamp-2">
                                                    {activity.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm line-clamp-3">
                                                    {activity.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-gray-500 mt-4">
                                                    <FaCalendarAlt />
                                                    <p className='text-sm'>{activity.date ? new Date(activity.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Tanggal tidak tersedia'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center text-gray-500 italic col-span-full">Belum ada aktivitas dalam kategori ini.</p>
                                )}
                            </div>
                        </section>
                    );
                })}
            </div>
            <Footer lang={lang} />
        </main>
    );
}