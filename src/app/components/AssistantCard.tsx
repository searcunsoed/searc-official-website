// src/components/AssistantCard.tsx
import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';

interface AssistantCardProps {
  name: string;
  major: string;
  image: string;
  email?: string;
}

export default function AssistantCard({ name, major, image, email }: AssistantCardProps) {
  return (
    <div className="bg-white text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-6">
      <Image
        src={image}
        alt={`Foto ${name}`}
        width={96}
        height={96}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h4 className="mt-4 text-lg font-bold font-sans text-yellow-700">{name}</h4>
      <p className="mt-1 text-sm text-yellow-600">{major}</p>
      {email && (
        <div className="mt-4 flex justify-center">
          <a href={email} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-600 transition-colors text-xl" title={`LinkedIn Profil dari ${name}`}>
            <FaEnvelope />
          </a>
        </div>
      )}
    </div>
  );
}