import { 
  FaEnvelope, FaPaperPlane, FaQuestionCircle, 
  FaClipboardList, FaBullseye, FaHourglassHalf 
} from 'react-icons/fa';
import Image from 'next/image';
import Footer from '../components/Footer';

const SUBMISSION_EMAIL = "lppmunsoed58@gmail.com";
const EMAIL_SUBJECT = "Submission Artikel untuk SEARC Unsoed";

const guidelines = [
  { icon: <FaFileWord />, title: "Format", text: "Naskah dalam format Microsoft Word (.doc atau .docx)." },
  { icon: <FaRulerCombined />, title: "Panjang", text: "1000-1500 kata (artikel), 800-1000 kata (resensi buku)." },
  { icon: <FaLanguage />, title: "Bahasa", text: "Bahasa Indonesia atau Bahasa Inggris." },
  { icon: <FaQuoteLeft />, title: "Sitasi", text: "Gunakan gaya sitasi APA (American Psychological Association) edisi ke-7." },
  { icon: <FaCertificate />, title: "Orisinalitas", text: "Karya asli, belum pernah dipublikasikan, tidak sedang direview." },
];

const submissionSteps = [
  { text: "Siapkan file naskah Anda (.doc/.docx)." },
  { text: "Siapkan biodata singkat penulis (maks 100 kata)." },
  { text: `Kirim email ke ${SUBMISSION_EMAIL}.` },
  { text: `Gunakan subjek: "${EMAIL_SUBJECT} - [Nama Anda]".` },
  { text: "Lampirkan file naskah dan sertakan biodata di badan email/lampiran." },
];

import { FaFileWord, FaRulerCombined, FaLanguage, FaQuoteLeft, FaCertificate } from 'react-icons/fa';


export default function WriteForUsPage() {
    return (
        <main>
            <section className="relative h-[50vh] bg-yellow-500 text-white flex items-center justify-center text-center">
                <Image 
                    src="/images/unsoed-2.webp"
                    alt="Tentang SEARC"
                    fill
                    className="object-cover z-0 opacity-50"
                />
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-sans">Tulis untuk SEARC Unsoed</h1>
                    <p className="mt-4 text-lg text-white">
                        Bagikan wawasan, analisis, dan hasil riset Anda tentang Asia Tenggara kepada audiens kami.
                    </p>
                </div>
            </section>
            <section className="bg-gradient-to-t from-white to-yellow-500/10 py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FaQuestionCircle className="mx-auto h-12 w-12 text-yellow-700 mb-4" />
                    <h2 className="text-3xl font-bold font-sans text-yellow-700">Mengapa Berkontribusi?</h2>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        SEARC Unsoed mengundang para akademisi, peneliti, mahasiswa, dan praktisi untuk menyumbangkan tulisan orisinal. Ini adalah kesempatan emas untuk menyebarluaskan gagasan, berkontribusi pada diskursus kebijakan, dan menjangkau audiens yang lebih luas.
                    </p>
                </div>
            </section>
            <section className="bg-gradient-to-t from-white to-yellow-500/10 py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FaBullseye className="mx-auto h-12 w-12 text-yellow-700 mb-4" />
                    <h2 className="text-3xl font-bold font-sans text-yellow-700">Topik yang Kami Cari</h2>
                    <p className="mt-4 text-lg text-gray-700">Kami menerima artikel analisis, opini kebijakan, dan resensi buku terkait fokus riset kami, termasuk:</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {[
                            'Economic and Social Walfare', 
                            'Law and Human Rights', 
                            'Politics and International Relations Research', 
                            'Culture and Linguistics',
                        ].map(topic => (
                        <span key={topic} className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">{topic}</span>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-t from-white to-yellow-500/10 py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <FaClipboardList className="mx-auto h-12 w-12 text-yellow-600 mb-4" />
                        <h2 className="text-3xl font-bold font-sans text-yellow-700">Panduan Penulisan</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {guidelines.map((item) => (
                        <div key={item.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-700 mb-4 text-2xl">
                            {item.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                            <p className="mt-1 text-gray-600 text-sm">{item.text}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-t from-white to-yellow-500/10 py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <FaPaperPlane className="mx-auto h-12 w-12 text-yellow-600 mb-4" />
                        <h2 className="text-3xl font-bold font-sans text-yellow-700">Proses Pengiriman</h2>
                    </div>
                    <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700 mb-10 pl-4">
                        {submissionSteps.map((step, index) => (
                        <li key={index}>{step.text}</li>
                        ))}
                    </ol>
                    <div className="text-center"> 
                        <a 
                            href={`mailto:${SUBMISSION_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 text-white font-bold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105"
                        >
                        <FaEnvelope className="mr-3 h-6 w-6" />
                            Kirim Naskah via Email
                        </a>
                        <p className="mt-4 text-sm text-gray-500">Klik tombol untuk membuka aplikasi email Anda.</p>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-t from-white to-yellow-500/10 py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FaHourglassHalf className="mx-auto h-12 w-12 text-yellow-700 mb-4" />
                    <h2 className="text-3xl font-bold font-sans text-yellow-700">Proses Review</h2>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        Semua naskah akan melalui review oleh tim editor kami. Kami akan berusaha memberikan notifikasi status naskah Anda dalam 2-4 minggu. Naskah yang diterima mungkin akan melalui proses penyuntingan sebelum publikasi.
                    </p>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}