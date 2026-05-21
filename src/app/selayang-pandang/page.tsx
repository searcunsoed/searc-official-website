import Image from 'next/image';
import { FaBook, FaUsers, FaLandmark, FaBookReader, FaShieldAlt, FaGlobeAsia, FaHandshake, FaLightbulb, FaUniversity } from 'react-icons/fa';
import Footer from '../components/Footer';
import { cookies } from 'next/headers';
import React from 'react';

export default async function SelayangPandang() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';

  const t = {
    subtitle: lang === 'en' 
      ? 'Learn more about our vision, mission, and journey in International.' 
      : 'Mengenal lebih dalam visi, misi, dan perjalanan kami dalam kajian Internasional.',

    visi: lang === 'en' ? 'Our Vision' : 'Visi Kami',
    p1visi: lang === 'en' 
      ? 'To become a leading strategic research center in Indonesia for the analysis of security and development policies in the Southeast Asian and Indo-Pacific regions, making tangible contributions to national and international academic discourse.' 
      : 'Menjadi pusat kajian strategis terkemuka di Indonesia dalam analisis kebijakan keamanan dan pembangunan di kawasan Asia Tenggara dan Indo-Pasifik, dengan kontribusi nyata pada wacana akademik nasional dan internasional.',

    fokus: lang === 'en' ? 'Focus and Scope' : 'Fokus dan Ruang Lingkup Kajian',
    p1fokus: lang === 'en' 
      ? 'Focusing on security dynamics and strategic policy in the Southeast Asian and Indo-Pacific regions, using an interdisciplinary approach grounded in International Relations.'
      : 'Berfokus pada dinamika keamanan dan kebijakan strategis di kawasan Asia Tenggara dan Indo-Pasifik, dengan pendekatan interdisipliner berbasis Hubungan Internasional.',
    
    judulmisi1: lang === 'en' ? 'Research Publication' : 'Publikasi Riset',
    description1: lang === 'en' 
      ? 'Producing high-quality research on the strategic dynamics of the Southeast Asian and Indo-Pacific regions.' 
      : 'Menghasilkan riset berkualitas tinggi tentang dinamika strategis kawasan Asia Tenggara dan Indo-Pasifik.',

    judulmisi2: lang === 'en' ? 'Building Collaborative Networks' : 'Membangun Jejaring Kolaborasi',
    description2: lang === 'en' 
      ? 'Building a network of research collaborations with partner universities and international research institutions.' 
      : 'Membangun jejaring kolaborasi penelitian dengan mitra perguruan tinggi dan lembaga kajian internasional.',
    
    judulmisi3: lang === 'en' ? 'Formulation of Policy Briefs' : 'Perumusan Rekomendasi Kebijakan',
    description3: lang === 'en' 
      ? 'Contribute to policy formulation through academic publications, policy briefs, and public engagement.' 
      : 'Berkontribusi pada perumusan kebijakan melalui publikasi akademik, policy brief, dan keterlibatan publik.',

    judulmisi4: lang === 'en' ? 'Research Capacity Building' : 'Pengembangan Kapasitas Riset',
    description4: lang === 'en' 
      ? 'Supporting the development of research capacity among the UNSOED academic community in the field of international strategic studies.' 
      : 'Mendukung pengembangan kapasitas riset civitas akademika UNSOED di bidang studi strategis internasional.',

    judulfokus1: lang === 'en' ? 'Regional Security and Strategies' : 'Keamanan dan Strategi Kawasan',
    descriptionfokus1: lang === 'en' 
      ? [
          'Security in the ASEAN and Indo-Pacific regions.',
          'Strategic rivalry among major powers in Southeast Asia',
          'Regional security architecture: ASEAN, AUKUS, Quad.',
          'Maritime security and the South China Sea conflict.'
        ] 
      : 
        [
          'Keamanan kawasan ASEAN dan Indo-Pasifik.',
          'Rivalitas strategis kekuatan besar di Asia Tenggara.',
          'Arsitektur keamanan regional: ASEAN, AUKUS, Quad.',
          'Keamanan maritim dan konflik Laut China Selatan.'
        ],

    judulfokus2: lang === 'en' ? 'Foreign Policy' : 'Kebijakan Luar Negeri',
    descriptionfokus2: lang === 'en' 
      ? [
          'Indonesia\'s foreign policy: independent and active, and strategic pragmatism.',
          'Diplomacy among ASEAN countries.',
          'Indonesia and governance in the Global South.',
          'Indonesia\'s involvement in multilateral forums.'
        ] 
      : 
        [
          'Politik luar negeri Indonesia: bebas-aktif dan pragmatisme strategis.',
          'Diplomasi negara-negara ASEAN.',
          'Indonesia dan tata kelola Global South.',
          'Keterlibatan Indonesia dalam forum multilateral.'
        ],

    judulfokus3: lang === 'en' ? 'Development and Sustainability' : 'Pembangunan dan Keberlanjutan',
    descriptionfokus3: lang === 'en' 
      ? [
          'International development and the SDGs in the Global South',
          'Ecological civilization and environmental resilience',
          'SDG localization at the local level (Banyumas)',
          'Circular economy and national resilience.'
        ] 
      : 
        [
          'Pembangunan internasional dan SDGs di Global South.',
          'Ecological civilization dan ketahanan lingkungan.',
          'SDG localization di tingkat daerah (Banyumas).',
          'Circular economy dan ketahanan nasional.'
        ],

    judulfokus4: lang === 'en' ? 'Cross-border Issues' : 'Isu-isu Lintas Batas',
    descriptionfokus4: lang === 'en' 
      ? [
          'Diaspora studies and international migration',
          'Popular culture and representation in international relations.',
          'Technology, AI, and their implications for global security',
          'Digital governance and cybersecurity.'
        ] 
      : 
        [
          'Studi diaspora dan migrasi internasional.',
          'Budaya populer dan representasi dalam HI.',
          'Teknologi, AI, dan implikasinya dalam keamanan global.',
          'Tata kelola digital dan keamanan siber.'
        ],

    pubtitle: lang === 'en' ? 'Featured Publications' : 'Publikasi Unggulan',
    pubdownload: lang === 'en' ? 'Download here' : 'Unduh Publikasi',
    descriptionpub: lang === 'en' 
      ? 'The recent protests in Indonesia, initiated by the younger generation, have given rise to cross-border solidarity in Southeast Asia among netizens...' 
      : 'Unjuk rasa yang baru-baru ini terjadi di Indonesia, yang diprakarsai oleh generasi muda, telah melahirkan solidaritas lintas batas di Asia Tenggara dengan warganet...',

    title_table: lang === 'en' ? 'Our Work Programs' : 'Program Kerja',
    subtitle_table: lang === 'en' 
      ? 'Strategic initiatives and activities planned to achieve CISS Unsoed objectives.' 
      : 'Inisiatif strategis dan kegiatan yang direncanakan untuk mencapai tujuan CISS Unsoed.',
    colNo: lang === 'en' ? 'No.' : 'No.',
    colProgram: lang === 'en' ? 'Program Name' : 'Nama Program',
    colDesc: lang === 'en' ? 'Target' : 'Target Luaran',
    colTimeline: lang === 'en' ? 'Timeline' : 'Waktu',

    titleNational: lang === 'en' ? 'National Research Agenda Alignment' : 'Sinergi Agenda Riset Nasional',
    intro: lang === 'en' 
      ? 'The work programs of CISS are aligned with several national research priorities, as outlined in the National Research Master Plan (RIRN) and the research roadmap of the Ministry of Education, Culture, Research, and Technology:' 
      : 'Program kerja CISS selaras dengan beberapa prioritas riset nasional, sebagaimana tertuang dalam Rencana Induk Riset Nasional (RIRN) dan peta jalan riset Kemendikbudristek:',
    outro: lang === 'en'
      ? 'At the institutional level, CISS contributes to strengthening the social-humanities research cluster of LPPM UNSOED and supports the achievement of the university\'s Key Performance Indicators (IKU) in international publications and foreign cooperation.'
      : 'Di tingkat institusional, CISS berkontribusi pada penguatan kluster riset sosial-humaniora LPPM UNSOED dan mendukung capaian Indikator Kinerja Utama (IKU) universitas di bidang publikasi internasional dan kerjasama luar negeri.',
  }

  const programClusters = [
    {
      clusterName: lang === 'en' ? 'Research & Publication' : 'Riset & Publikasi',
      items: [
        {
          id: 1,
          name: lang === 'en' ? 'Completion of the SINTA 2 Article on the ASEAN Vision Beyond 2025' : 'Penyelesaian Artikel SINTA 2 tentang ASEAN Vision Beyond 2025',
          desc: lang === 'en' 
            ? 'Publication in the journal Politicos (SINTA 2)' 
            : 'Publikasi di jurnal Politicos (SINTA 2)',
          timeline: '2026'
        },
        {
          id: 2,
          name: lang === 'en' ? 'Completion of the manuscript \'Ecological Civilization and the Global South\'' : 'Penyelesaian manuskrip \'Ecological Civilization dan Global South\'',
          desc: lang === 'en' 
            ? 'Publication in Global South Review (SINTA 2/Scopus)' 
            : 'Publikasi di Global South Review (SINTA 2/Scopus)',
          timeline: '2026-2027'
        },
        {
          id: 3,
          name: lang === 'en' ? 'Research on Indonesia\'s Foreign Policy During President Prabowo\'s Administration' : 'Riset tentang Politik Luar Negeri Indonesia di Era Kepemimpinan Presiden Prabowo',
          desc: lang === 'en' 
            ? 'Publication in Journal Article and Policy Brief' 
            : 'Artikel jurnal + Policy Prief',
          timeline: '2026-2027'
        },
        {
          id: 4,
          name: lang === 'en' ? 'Collaborative Research with GIFT Hong Kong and the Ocean Center UK' : 'Riset Kolaboratif dengan GIFT Hong Kong dan Ocean Center UK',
          desc: lang === 'en' 
            ? 'Joint paper / Internasional Working Paper' 
            : 'Joint paper / Working Paper internasional',
          timeline: '2026-2027'
        },
        {
          id: 5,
          name: lang === 'en' ? 'Policy Brief Series: Indonesia and the Indo-Pacific Order' : 'Policy Brief Seri: Indonesia dan Tatanan Indo-Pasifik',
          desc: lang === 'en' 
            ? 'At least two policy briefs per year' 
            : 'Minimal 2 policy brief per tahun',
          timeline: '2026-2027'
        }
      ]
    },
    {
      clusterName: lang === 'en' ? 'Collaboration & Networking' : 'Kolaborasi & Jaringan',
      items: [
        {
          id: 6,
          name: lang === 'en' ? 'Expanding of a Memorandum of Understanding (MoU) or Memorandum of Agreement (MoA) with GIFT Hong Kong' : 'Pengembangan MoU/MoA dengan GIFT Hong Kong',
          desc: lang === 'en' 
            ? 'Active cooperation agreement' 
            : 'Dokumen perjanjian kerjasama aktif',
          timeline: '2026'
        },
        {
          id: 7,
          name: lang === 'en' ? 'Expanding Cooperation with Ocean Center UK' : 'Pengembangan Kerjasama dengan Ocean Center UK',
          desc: lang === 'en' 
            ? 'Research Collaboration Framework' 
            : 'Research Collaboration Framework',
          timeline: '2026'
        },
        {
          id: 8,
          name: lang === 'en' ? 'Involvement in the AIHII and FPCI Networks' : 'Keterlibatan dalam Jaringan AIHII dan FPCI',
          desc: lang === 'en' 
            ? 'Participation in at least two events per year' 
            : 'Partisipasi minimal 2 event per tahun',
          timeline: '2026-2027'
        },
        {
          id: 9,
          name: lang === 'en' ? 'Expanding Cooperation with ASEAN Universities' : 'Pengembangan Kerjasama dengan Perguruan Tinggi ASEAN',
          desc: lang === 'en' 
            ? 'Letter of Intent / New MoU' 
            : 'Letter of Intent / MoU baru',
          timeline: '2027'
        }
      ]
    },
    {
      clusterName: lang === 'en' ? 'Public Outreach and Engagement' : 'Diseminasi dan Keterlibatan Publik',
      items: [
        {
          id: 10,
          name: lang === 'en' ? 'Regional Strategic Analysis Seminar/Webinar (SEARAC Series)' : 'Seminar/Webinar Kajian Strategis Kawasan (SEARAC Series)',
          desc: lang === 'en' 
            ? 'At least two seminars per year' 
            : 'Minimal 2 seminar per tahun',
          timeline: '2026-2027'
        },
        {
          id: 11,
          name: lang === 'en' ? 'Op-ed Articles in National Media (Kompas, etc.)' : 'Publikasi Op-ed di Media Nasional (Kompas, dll.)',
          desc: lang === 'en' 
            ? 'At least 4 articles per year' 
            : 'Minimal 4 artikel per tahun',
          timeline: '2026-2027'
        },
        {
          id: 12,
          name: lang === 'en' ? 'Management of Public Academic Content' : 'Pengelolaan Konten Akademik Publik',
          desc: lang === 'en' 
            ? 'Regular Content Based on Center Research' 
            : 'Konten Reguler berbasis Riset Pusat',
          timeline: '2026-2027'
        },
        {
          id: 13,
          name: lang === 'en' ? 'Contribution to ICMA-SURE at the UNSOED Research and Community Service Institute' : 'Kontribusi pada ICMA-SURE LPPM UNSOED',
          desc: lang === 'en' 
            ? 'Panel/Track on International Strategic Studies' 
            : 'Panel/Track Studi Strategis Internasional',
          timeline: '2026'
        },
      ]
    },
    {
      clusterName: lang === 'en' ? 'Capacity Building' : 'Peningkatan Kapasitas',
      items: [
        {
          id: 14,
          name: lang === 'en' ? 'Research Methodology Training for Young Researchers in International Relations' : 'Pelatihan Metodologi Riset untuk Peneliti Muda Hubungan Internasional',
          desc: lang === 'en' 
            ? 'Methodology workshop (at least once a year)' 
            : 'Workshop metodologi (min. 1x/tahun)',
          timeline: '2026-2027'
        },
        {
          id: 15,
          name: lang === 'en' ? 'International Publication Mentoring for UNSOED International Relations Faculty Members' : 'Mentoring Publikasi Internasional bagi Dosen HI UNSOED',
          desc: lang === 'en' 
            ? 'At least 2 supervised articles per year' 
            : 'Min. 2 artikel terbimbing per tahun',
          timeline: '2026-2027'
        },
        {
          id: 16,
          name: lang === 'en' ? 'Development of a Strategic Research Database for the ASEAN Region' : 'Pengembangan Database Riset Strategis Kawasan ASEAN',
          desc: lang === 'en' 
            ? 'Internal Repository' 
            : 'Repository Internal',
          timeline: '2027'
        }
      ]
    }
  ];

  const missionItems = [
    {
      icon: <FaBook />,
      title: t.judulmisi1,
      description: t.description1,
    },
    {
      icon: <FaUsers />,
      title: t.judulmisi2,
      description: t.description2,
    },
    {
      icon: <FaLandmark />,
      title: t.judulmisi3,
      description: t.description3,
    },
    {
      icon: <FaBookReader />,
      title: t.judulmisi4,
      description: t.description4,
    },
  ];

  const focusAreas = [
    {
      icon: <FaShieldAlt className="h-8 w-8" />,
      title: t.judulfokus1,
      description: t.descriptionfokus1,
    },
    {
      icon: <FaBook className="h-8 w-8" />,
      title: t.judulfokus2,
      description: t.descriptionfokus2,
    },
    {
      icon: <FaLandmark className="h-8 w-8" />,
      title: t.judulfokus3,
      description: t.descriptionfokus3,
    },
    {
      icon: <FaGlobeAsia className="h-8 w-8" />,
      title: t.judulfokus4,
      description: t.descriptionfokus4,
    },
  ];

  const nationalPriorities = [
    {
      id: 1,
      icon: <FaShieldAlt className="h-7 w-7" />,
      text: lang === 'en' 
        ? 'National resilience and regional geopolitics.' 
        : 'Ketahanan nasional dan geopolitik kawasan.',
    },
    {
      id: 2,
      icon: <FaHandshake className="h-7 w-7" />,
      text: lang === 'en' 
        ? 'Sustainable development and SDGs (Goals 16 and 17: peace, institutions, and global partnerships).' 
        : 'Pembangunan berkelanjutan dan SDGs (tujuan 16 dan 17: perdamaian, kelembagaan, dan kemitraan global).',
    },
    {
      id: 3,
      icon: <FaLightbulb className="h-7 w-7" />,
      text: lang === 'en' 
        ? 'Innovation-based economic development and global competitiveness.' 
        : 'Pengembangan ekonomi berbasis inovasi dan daya saing global.',
    },
    {
      id: 4,
      icon: <FaGlobeAsia className="h-7 w-7" />,
      text: lang === 'en' 
        ? 'Strengthening international relations and Indonesian diplomacy.' 
        : 'Penguatan hubungan internasional dan diplomasi Indonesia.',
    }
  ];

  return (
    <main>
      <section className="relative h-[50vh] bg-yellow-500 text-white flex items-center justify-center text-center">
        <Image 
          src="/images/unsoed-2.webp"
          alt="Tentang CISS"
          fill
          className="object-cover z-0 opacity-50"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-sans">CISS Unsoed</h1>
          <p className="mt-4 max-w-2xl text-lg text-white">
            {t.subtitle}
          </p>
        </div>
      </section>
      <section className="relative bg-gradient-to-t from-white to-yellow-500/10 py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold font-sans sm:text-4xl text-yellow-700">
                  {t.visi}
                </h2>
                <p className="mt-4 text-lg text-yellow-600 leading-relaxed">
                  {t.p1visi}
                </p>
            </div>
            <div className="mx-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {missionItems.map((item) => (
                    <div 
                      key={item.title} 
                      className="bg-white p-8 rounded-xl shadow-lg border hover:border-yellow-700 hover:border-yellow-700/70 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="text-yellow-700 mb-4 text-3xl">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold font-heading text-yellow-700">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-yellow-600">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-white to-yellow-500/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold font-sans text-yellow-700 sm:text-4xl">
              {t.fokus}
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-lg text-yellow-600">
              {t.p1fokus}
            </p>
          </div>
          <div className="mt-16 mx-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-white p-8 rounded-xl shadow-lg border hover:border-yellow-700 hover:border-yellow-700/70 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-700 mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold font-sans text-yellow-700">{area.title}</h3>
                <ul className="list-disc pl-5 mt-2 text-base text-yellow-600 space-y-1 text-left">
                  {area.description.map((poin, index) => (
                    <li key={index}>{poin}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-white to-yellow-500/10 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 font-sans tracking-tight">
              {t.title_table}
            </h2>
            <p className="mt-4 text-lg text-yellow-600 max-w-3xl mx-auto">
              {t.subtitle_table}
            </p>
          </div>
          
          {/* Table Section */}
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-5 font-bold text-slate-800 w-16 text-center">{t.colNo}</th>
                  <th className="p-5 font-bold text-slate-800 w-2/4">{t.colProgram}</th>
                  <th className="p-5 font-bold text-slate-800 w-2/4">{t.colDesc}</th>
                  <th className="p-5 font-bold text-slate-800 whitespace-nowrap">{t.colTimeline}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {/* Loop pertama: Memutar Klaster (Kategori) */}
                {programClusters.map((cluster, clusterIndex) => (
                  <React.Fragment key={clusterIndex}>
                    
                    {/* Baris Pemisah Kategori / Judul Klaster */}
                    <tr className="bg-slate-50/80 border-y border-slate-200">
                      <td colSpan={4} className="p-4 pl-6 font-extrabold text-slate-800 text-lg border-l-4 border-yellow-500 tracking-wide uppercase">
                        {cluster.clusterName}
                      </td>
                    </tr>

                    {/* Loop kedua: Memutar item program di dalam klaster tersebut */}
                    {cluster.items.map((prog, index) => (
                      <tr key={prog.id} className="border-b border-slate-100 hover:bg-yellow-50/50 transition-colors duration-200">
                        {/* Nomor akan di-reset jadi 1, 2, 3 di setiap kategori baru */}
                        <td className="p-5 text-center font-semibold text-slate-400">{index + 1}</td>
                        <td className="p-5 font-bold text-slate-700">{prog.name}</td>
                        <td className="p-5 text-slate-600 text-sm leading-relaxed">{prog.desc}</td>
                        <td className="p-5 text-slate-500 text-sm font-medium whitespace-nowrap">{prog.timeline}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-white to-yellow-500/10 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 font-sans tracking-tight">
              {t.titleNational}
            </h2>
            <p className="mt-6 text-base md:text-lg text-yellow-600 max-w-3xl mx-auto leading-relaxed">
              {t.intro}
            </p>
          </div>

          {/* Grid Cards Section for the 4 Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {nationalPriorities.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-400 transition-all duration-300 flex items-center gap-5 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-14 w-14 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold text-lg leading-snug group-hover:text-yellow-700 transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Contribution Box (Outro) */}
          <div className="bg-yellow-50/50 border border-yellow-200/60 p-8 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 text-yellow-500/10">
              <FaUniversity className="h-40 w-40 transform rotate-12" />
            </div>
            
            <div className="flex-shrink-0 relative z-10 hidden md:block">
              <div className="h-12 w-12 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow-md">
                <FaUniversity className="h-6 w-6" />
              </div>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-sm font-bold text-yellow-700 uppercase tracking-widest mb-2">
                {lang === 'en' ? 'Institutional Contribution' : 'Kontribusi Institusional'}
              </h4>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                {t.outro}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer lang={lang} />
    </main>
  );
}