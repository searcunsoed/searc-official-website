import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers'; // 1. Import Cookies

interface ArticleCardProps {
  href: string;
  imageSrc: string;
  category: string;
  date: string;
  title: string;
  author: string[];
  excerpt: string;
}

export default async function ArticleCard({ href, imageSrc, category, date, author, title, excerpt }: ArticleCardProps) {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';

  return (
    <article className="group flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden">
      
      <Link href={href} className="flex-shrink-0 block h-48 w-full overflow-hidden relative">
        <Image
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-yellow-600">
            {category}
          </p>
          <Link href={href} className="mt-2 block">
            <h3 className="text-xl font-bold font-sans text-gray-900 group-hover:text-yellow-700 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="mt-3 text-sm text-gray-600 line-clamp-3">{excerpt}</p>
          </Link>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">
            {lang === 'en' ? 'By ' : 'Oleh '} 
            <span className="font-medium text-gray-700">
               {author && author.length > 0 ? author.join(', ') : (lang === 'en' ? 'Unknown' : 'Admin')}
            </span> 
            {' • '} 
            <time dateTime={date}>{date}</time>
          </p>
        </div>
      </div>
    </article>
  );
}