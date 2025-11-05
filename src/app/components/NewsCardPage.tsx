import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  href: string;
  imageSrc: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

export default function NewsCardPage({ href, imageSrc, category, date, title, excerpt }: NewsCardProps) {
  return (
    <article className="group flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
      <Link href={href} className="flex-shrink-0">
        <div className="h-48 w-full overflow-hidden relative">
          <Image
            className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-yellow-600">
              {category}
          </p>
          <Link href={href} className="mt-2 block">
            <h3 className="text-lg font-bold font-sans text-gray-900 group-hover:text-yellow-700 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="mt-3 text-sm text-gray-600 line-clamp-3">{excerpt}</p>
          </Link>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            <time dateTime={date}>{date}</time>
          </p>
        </div>
      </div>
    </article>
  );
}