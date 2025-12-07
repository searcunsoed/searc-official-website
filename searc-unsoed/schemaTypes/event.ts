// searc-unsoed/schemas/event.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Agenda / Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Acara',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'poster',
      title: 'Poster Acara',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'startDate',
      title: 'Tanggal & Jam Mulai',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lokasi (Gedung / Zoom)',
      type: 'string',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Link Pendaftaran (Google Form/Zoom)',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 3,
    }),
  ],
})