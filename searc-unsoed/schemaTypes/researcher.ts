import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'researcher',
  title: 'Peneliti',
  type: 'document',
  fields: [
    defineField({ 
        name: 'name', 
        title: 'Nama Lengkap', 
        type: 'string' 
    }),
    defineField({ 
        name: 'role', 
        title: 'Jabatan/Peran', 
        type: 'string' 
    }),
    defineField({ 
        name: 'profileImage', 
        title: 'Foto Profil', 
        type: 'image', 
        options: {hotspot: true} 
    }),
  ],
})