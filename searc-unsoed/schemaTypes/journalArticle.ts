// file: schemas/journalArticle.ts
export default {
  name: 'journalArticle',
  title: 'Artikel Jurnal',
  type: 'document',
  fields: [
    { 
        name: 'title', 
        title: 'Judul (ID)', 
        type: 'string', 
        validation: (Rule: any) => Rule.required() 
    },
    { 
        name: 'title_en', 
        title: 'Judul (EN)', 
        type: 'string' 
    },
    { 
        name: 'slug', 
        title: 'Slug', 
        type: 'slug', 
        options: { 
            source: 'title' 
        } 
    },
    { 
        name: 'authors',
        title: 'Penulis', 
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Klik "Add item" untuk menambah penulis lebih dari satu' 
    },
    { 
        name: 'publishedYear', 
        title: 'Tahun Terbit', 
        type: 'string' 
    },
    { 
        name: 'abstract', 
        title: 'Abstrak (ID)', 
        type: 'text' 
    },
    { 
        name: 'abstract_en', 
        title: 'Abstrak (EN)', 
        type: 'text' 
    },
    { 
        name: 'externalLink', 
        title: 'Link Artikel Penuh (URL)', 
        type: 'url', 
        description: 'Link ke OJS atau PDF luar' 
    },
  ],
};