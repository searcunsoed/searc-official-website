import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Artikel',
  type: 'document',
  fields: [
    defineField({ 
        name: 'title', 
        title: 'Judul Artikel', 
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
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Economic and Social Warfare', value: 'Economic and Social Warfare'},
          {title: 'Law and Human Rights', value: 'Law and Human Rights'},
          {title: 'Politics and International Relations', value: 'Politics and International Relations'},
          {title: 'Culture and Linguistics', value: 'Culture and Linguistics'},
        ],
      },
      validation: (Rule) => Rule.required(),
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
        type: 'date' 
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
        rows: 3 
    }),
    defineField({
        name: 'body',
        title: 'Isi Artikel Lengkap',
        type: 'blockContent',
    }),
  ],
})