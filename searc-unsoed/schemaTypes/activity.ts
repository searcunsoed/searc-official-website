import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'activity',
    title: 'Aktivitas Kami',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nama Aktivitas',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Tanggal Aktivitas',
            type: 'date',
            options: {
                dateFormat: 'DD MMMM YYYY',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Kategori Aktivitas',
            type: 'string',
            options: {
                list: [
                    {title: 'Seminar', value: 'Seminar'},
                    {title: 'Konferensi', value: 'Konferensi'},
                    {title: 'Workshop', value: 'Workshop'},
                    {title: 'Diskusi Publik', value: 'Diskusi Publik'},
                    {title: 'Peluncuran Riset', value: 'Peluncuran Riset'},
                ],
            },
        }),
        defineField({
            name: 'mainImage',
            title: 'Gambar Utama',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi Singkat',
            type: 'text',
            rows: 4,
        }),
    ],
    orderings: [
        {
            title: 'Tanggal Aktivitas, Terbaru Dulu',
            name: 'dateDesc',
            by: [{field: 'date', direction: 'desc'}]
        }
    ]
})