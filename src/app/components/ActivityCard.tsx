import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import { cookies } from 'next/headers';

interface ActivityCardProps {
    imageSrc: string;
    category: string;
    date: string;
    title: string;
    description: string;
}

export default async function ActivityCard({ imageSrc, category, date, title, description }: ActivityCardProps) {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || 'id';

    const formattedDate = date 
        ? new Date(date).toLocaleDateString(lang === 'en' ? 'en-GB' : 'id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        : '-';

    return (
        <article className="group flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
            <div className="h-48 w-full overflow-hidden relative">
                <Image
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                    <div className="flex justify-between items-center text-sm">
                        <p className="font-medium text-yellow-700">
                            {category || (lang === 'en' ? 'Activity' : 'Kegiatan')}
                        </p>
                        <div className="flex items-center gap-1 text-gray-500">
                            <FaCalendarAlt />
                            <time dateTime={date}>{formattedDate}</time>
                        </div>
                    </div>
                    <h3 className="text-lg font-bold font-sans text-gray-600 group-hover:text-yellow-700 transition-colors line-clamp-2 mt-2">
                        {title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-3">{description}</p>
                </div>
            </div>
        </article>
    );
}