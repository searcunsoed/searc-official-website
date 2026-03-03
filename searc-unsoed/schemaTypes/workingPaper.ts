import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'workingPaper',
    title: 'Working Paper',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Judul (Indonesia)',
            type: 'string',
            validation: (Rule: any) => Rule.required().error('Judul bahasa Indonesia wajib diisi'),
        }),
        defineField({
            name: 'title_en',
            title: 'Judul (English)',
            type: 'string',
            description: 'Kosongkan jika tidak ada terjemahan',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Klik Generate untuk membuat link otomatis dari judul',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Penulis',
            type: 'array',
            of: [{ 
                type: 'reference', 
                to: [{type: 'researcher'}] 
            }],
            description: 'Pilih penulis dari daftar Author',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Tanggal Publikasi',
            type: 'datetime',
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'abstract',
            title: 'Abstrak (Indonesia)',
            type: 'text',
            rows: 4,
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'abstract_en',
            title: 'Abstrak (English)',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'coverImage',
            title: 'Gambar Sampul (Cover)',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Gambar opsional untuk thumbnail di halaman daftar',
        }),
        defineField({
            name: 'pdfFile',
            title: 'File Dokumen (PDF)',
            type: 'file',
            options: {
                accept: '.pdf' // Memaksa admin hanya bisa upload file PDF
        },
            description: 'Upload file PDF Working Paper di sini',
            validation: (Rule: any) => Rule.required().error('File PDF wajib diupload!'),
        }),
    ],
    
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'coverImage',
        },
        prepare(selection: any) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `oleh ${author}`,
            });
        },
    },
});