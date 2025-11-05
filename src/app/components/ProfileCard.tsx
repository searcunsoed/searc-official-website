// src/components/ProfileCard.tsx
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  links: {
    linkedin?: string;
    scholar?: string;
  };
}

export default function ProfileCard({ name, role, image, links }: ProfileCardProps) {
  return (
        <div className="bg-white text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-8">
            <Image
                src={image}
                alt={`Foto ${name}`}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto shadow-md"
            />
            <h3 className="mt-6 text-xl font-bold font-sans text-yellow-700">{name}</h3>
            <p className="mt-1 text-yellow-600 font-semibold">{role}</p>
            <div className="mt-6 flex justify-center space-x-4 text-slate-500">
                {links.linkedin && (
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-700 transition-colors text-2xl" title={`LinkedIn Profile of ${name}`}><FaLinkedin /></a>
                )}
                {links.scholar && (
                    <a href={links.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-700 transition-colors text-2xl" title={`Google Scholar Profile of ${name}`}><SiGooglescholar /></a>
                )}
            </div>
        </div>
    );
}