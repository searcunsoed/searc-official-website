import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bookChapter',
  title: 'Book Chapter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Chapter',
      type: 'string',
    }),
    defineField({
      name: 'authors',
      title: 'Penulis',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'bookTitle',
      title: 'Judul Buku Induk',
      type: 'string',
    }),
    defineField({
      name: 'publisher',
      title: 'Penerbit',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Tahun',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Gambar Sampul',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'downloadLink',
      title: 'Link Download (URL)',
      type: 'url',
    }),
  ],
})