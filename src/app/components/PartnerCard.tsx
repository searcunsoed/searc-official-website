import Image from 'next/image';
import Link from 'next/link';

interface PartnerCardProps {
  name: string;
  logoSrc: string;
  websiteUrl: string;
}

export default function PartnerCard({ name, logoSrc, websiteUrl }: PartnerCardProps) {
  return (
    <Link
      href={websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <div className="relative h-20 w-full flex items-center justify-center">
        <Image
          src={logoSrc}
          alt={`Logo ${name}`}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h4 className="mt-4 text-center text-sm font-semibold text-gray-600 group-hover:text-yellow-700 transition-colors">
        {name}
      </h4>
    </Link>
  );
}