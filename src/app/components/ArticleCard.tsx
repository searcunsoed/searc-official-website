import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  href: string;
  imageSrc: string;
  category: string;
  date: string;
  title: string;
  author: string[];
  excerpt: string;
}

export default function ArticleCard({ href, imageSrc, category, date, author, title, excerpt }: ArticleCardProps) {
    return (
        <article className="group flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden">
        <Link href={href} className="flex-shrink-0">
            <div className="h-48 w-full overflow-hidden">
            <Image
                className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                src={imageSrc}
                alt={title}
                width={400}
                height={192}
            />
            </div>
        </Link>
        <div className="flex flex-1 flex-col justify-between p-6">
            <div className="flex-1">
            <p className="text-sm font-medium text-yellow-600">
                {category}
            </p>
            <Link href={href} className="mt-2 block" target="_blank">
                <h3 className="text-xl font-bold font-sans text-grey-900 group-hover:text-yellow-700 transition-colors">
                {title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 line-clamp-3">{excerpt}</p>
            </Link>
            </div>
            <div className="mt-6">
            <p className="text-sm text-gray-500">
                Oleh <span className="font-medium text-gray-700">{author.join(', ')}</span> • <time dateTime={date}>{date}</time>
            </p>
            </div>
        </div>
        </article>
    );
}