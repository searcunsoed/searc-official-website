import { client, urlFor } from '@/lib/sanityClient';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

interface Event {
    _id: string;
    title: string;
    slug: { current: string };
    poster: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
    startDate: string;
    location: string;
    registrationLink?: string;
    description: string;
}

async function getUpcomingEvents() {
    const query = `*[_type == "event" && startDate >= now()] | order(startDate asc)[0...3] {
        _id,
        title,
        slug,
        poster,
        startDate,
        location,
        registrationLink,
        description
    }`;

    const data = await client.fetch(query);
    return data;
}

export default async function EventPage() {
    const upcomingEvents = await getUpcomingEvents();

    return (
        <main>
            <section className="bg-gradient-to-t from-white to-yellow-500/10 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
                            <h2 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">Event</h2>
                            <p className="mt-2 text-3xl font-extrabold font-sans text-yellow-900 sm:text-4xl">
                                Agenda Kami
                            </p>
                        </AnimateOnScroll>
                    </div>
                    {upcomingEvents.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {upcomingEvents.map((event: Event) => {
                                const dateObj = new Date(event.startDate);
                                const date = dateObj.getDate();
                                const month = dateObj.toLocaleDateString('id-ID', { month: 'short' });
                                const time = dateObj.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

                                return (
                                <div key={event._id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col">
                                    <div className="relative h-48 bg-gray-200">
                                        {event.poster && (
                                            <Image
                                            src={urlFor(event.poster).url()}
                                            alt={event.title}
                                            fill
                                            className="object-cover"
                                            />
                                        )}
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-xl p-2 text-center min-w-[60px] shadow-lg">
                                            <span className="block text-red-600 font-bold text-xl">{date}</span>
                                            <span className="block text-gray-600 text-xs uppercase font-semibold">{month}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-yellow-600 transition-colors">
                                                {event.title}
                                            </h3>
                                            <div className="mt-3 flex items-center text-sm text-gray-500 gap-4">
                                                <span className="flex items-center gap-1">
                                                    🕒 {time} WIB
                                                </span>
                                                <span className="flex items-center gap-1 truncate max-w-[150px]">
                                                    📍 {event.location}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-gray-100">
                                            {event.registrationLink ? (
                                                <a 
                                                    href={event.registrationLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white font-bold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105"
                                                >
                                                    Daftar Sekarang
                                                </a>
                                            ) : (
                                            <span className="block w-full text-center text-gray-400 bg-gray-100 py-2 px-4 rounded-lg cursor-not-allowed">
                                                Pendaftaran Tutup
                                            </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl p-10 text-center border border-dashed border-gray-300">
                            <p className="text-gray-500 text-lg">Belum ada agenda mendatang saat ini.</p>
                            <p className="text-sm text-gray-400">Pantau terus sosial media kami untuk update terbaru.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}