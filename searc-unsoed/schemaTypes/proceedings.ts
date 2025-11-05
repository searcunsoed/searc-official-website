import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proceedings',
  title: 'Prosiding',
  type: 'document',
  fields: [
    defineField({
      name: 'eventTitle',
      title: 'Judul Acara (Konferensi/Seminar)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Tanggal Acara',
      type: 'string',
    }),
    defineField({
      name: 'theme',
      title: 'Tema Acara',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
    }),
    defineField({
      name: 'downloadLink',
      title: 'Link Download Dokumen (URL)',
      type: 'url',
    }),
  ],
})