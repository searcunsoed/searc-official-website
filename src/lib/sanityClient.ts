// src/lib/sanityClient.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Akan kita ambil dari .env
  dataset: 'production',
  apiVersion: '2025-10-15', // Gunakan tanggal terbaru
  useCdn: true, // `false` jika ingin data terbaru setiap saat, `true` untuk performa lebih cepat
})

// Fungsi untuk mengubah data gambar dari Sanity menjadi URL yang bisa dipakai
const builder = imageUrlBuilder(client)
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}