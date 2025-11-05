import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'news',
    title: 'Berita',
    type: 'document',
    fields: [
        defineField({ 
            name: 'title', 
            title: 'Judul Berita', 
            type: 'string', 
            validation: (Rule) => Rule.required() 
        }),
        defineField({ 
            name: 'slug', 
            title: 'Slug (URL)', 
            type: 'slug', 
            options: { source: 'title' }, 
            validation: (Rule) => Rule.required() 
        }),
        defineField({ 
            name: 'category', 
            title: 'Kategori Berita', 
            type: 'string', 
            options: { 
                list: [
                    'Kegiatan', 
                    'Rilis Pers', 
                    'Opini', 
                    'Kolaborasi',
                    'Politics and International Relations',
                    'Economic and Social Walfare',
                    'Culture and Linguistics',
                    'Law and Human Rights'
                ] 
            } 
        }),
        defineField({
            name: 'author',
            title: 'Penulis',
            type: 'array',
            of: [{ 
                type: 'reference', 
                to: [{type: 'researcher'}] 
            }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({ 
            name: 'publishedAt', 
            title: 'Tanggal Publikasi', 
            type: 'date', 
            validation: (Rule) => Rule.required() 
        }),
        defineField({ 
            name: 'mainImage', 
            title: 'Gambar Utama', 
            type: 'image', 
            options: { hotspot: true } 
        }),
        defineField({ 
            name: 'excerpt', 
            title: 'Kutipan Singkat (Excerpt)', 
            type: 'text', 
            rows: 4 
        }),
        defineField({
            name: 'body',
            title: 'Isi Artikel Lengkap',
            type: 'blockContent',
        }),
    ],
    orderings: [
        {
            title: 'Tanggal Publikasi, Terbaru Dulu',
            name: 'publishedAtDesc',
            by: [{field: 'publishedAt', direction: 'desc'}]
        }
    ]
})