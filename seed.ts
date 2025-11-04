import { getPayload } from 'payload'
import config from './src/payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting to seed database...')

  try {
    // 1. Seed Settings (Global)
    console.log('📝 Creating Site Settings...')
    await payload.updateGlobal({
      slug: 'settings',
      data: {
        siteName: 'My Awesome Website',
        siteDescription: 'Selamat datang di website kami. Kami menyediakan solusi terbaik untuk kebutuhan digital Anda.',
        email: 'info@mywebsite.com',
        phone: '+62 812-3456-7890',
        address: 'Jl. Sudirman No. 123, Jakarta 12345',
        socialMedia: {
          facebook: 'https://facebook.com/mywebsite',
          twitter: 'https://twitter.com/mywebsite',
          instagram: 'https://instagram.com/mywebsite',
          linkedin: 'https://linkedin.com/company/mywebsite',
          youtube: 'https://youtube.com/@mywebsite',
        },
        defaultMetaTitle: 'My Awesome Website - Digital Solutions',
        defaultMetaDescription: 'Platform digital terpercaya untuk solusi bisnis modern Anda. Kami menyediakan layanan terbaik dengan teknologi terkini.',
      },
    })
    console.log('✅ Settings created!')

    // 2. Seed Pages
    console.log('📄 Creating Pages...')

    const homePage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Home',
        slug: 'home',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Selamat Datang di Website Kami' }],
                tag: 'h1',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Kami adalah platform digital yang menyediakan solusi terbaik untuk kebutuhan bisnis modern Anda. Dengan teknologi terkini dan tim profesional, kami siap membantu Anda mencapai kesuksesan.',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Layanan Kami' }],
                tag: 'h2',
              },
              {
                type: 'list',
                listType: 'bullet',
                children: [
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: 'Web Development' }],
                  },
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: 'Mobile App Development' }],
                  },
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: 'Digital Marketing' }],
                  },
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: 'Cloud Solutions' }],
                  },
                ],
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        metaTitle: 'Home - My Awesome Website',
        metaDescription: 'Platform digital terpercaya untuk solusi bisnis Anda',
        status: 'published',
      },
    })

    const aboutPage = await payload.create({
      collection: 'pages',
      data: {
        title: 'About Us',
        slug: 'about',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Tentang Kami' }],
                tag: 'h1',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Kami adalah tim profesional yang berdedikasi untuk memberikan solusi digital terbaik. Dengan pengalaman lebih dari 10 tahun di industri teknologi, kami telah membantu ratusan perusahaan mencapai transformasi digital mereka.',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Visi Kami' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Menjadi mitra terpercaya dalam transformasi digital untuk bisnis di Indonesia dan Asia Tenggara.',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Misi Kami' }],
                tag: 'h2',
              },
              {
                type: 'list',
                listType: 'bullet',
                children: [
                  {
                    type: 'listitem',
                    children: [
                      { type: 'text', text: 'Memberikan solusi teknologi berkualitas tinggi' },
                    ],
                  },
                  {
                    type: 'listitem',
                    children: [
                      { type: 'text', text: 'Mengutamakan kepuasan pelanggan' },
                    ],
                  },
                  {
                    type: 'listitem',
                    children: [
                      { type: 'text', text: 'Terus berinovasi mengikuti perkembangan teknologi' },
                    ],
                  },
                ],
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        metaTitle: 'About Us - My Awesome Website',
        metaDescription: 'Kenali lebih dalam tentang tim dan visi misi kami',
        status: 'published',
      },
    })

    const contactPage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Contact Us',
        slug: 'contact',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Hubungi Kami' }],
                tag: 'h1',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Kami siap membantu Anda! Jangan ragu untuk menghubungi kami melalui informasi kontak di bawah ini:',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Informasi Kontak' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  { type: 'text', text: 'Email: info@mywebsite.com', format: 'bold' },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  { type: 'text', text: 'Telepon: +62 812-3456-7890', format: 'bold' },
                ],
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Alamat: Jl. Sudirman No. 123, Jakarta 12345',
                    format: 'bold',
                  },
                ],
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        metaTitle: 'Contact Us - My Awesome Website',
        metaDescription: 'Hubungi kami untuk konsultasi dan informasi lebih lanjut',
        status: 'published',
      },
    })

    console.log('✅ Pages created!')

    // 3. Seed Posts
    console.log('📰 Creating Blog Posts...')

    // Get admin user ID for author
    const users = await payload.find({
      collection: 'users',
      limit: 1,
    })
    const adminUserId = users.docs[0]?.id

    await payload.create({
      collection: 'posts',
      data: {
        title: 'Mengenal Teknologi Cloud Computing',
        slug: 'mengenal-cloud-computing',
        excerpt:
          'Cloud computing telah mengubah cara bisnis beroperasi di era digital. Pelajari lebih lanjut tentang teknologi ini.',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Apa itu Cloud Computing?' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Cloud computing adalah penyampaian layanan komputasi melalui internet, termasuk server, storage, database, networking, software, dan analytics.',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Keuntungan Cloud Computing' }],
                tag: 'h2',
              },
              {
                type: 'list',
                listType: 'bullet',
                children: [
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: 'Skalabilitas yang fleksibel' }],
                  },
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: 'Hemat biaya operasional' }],
                  },
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: 'Akses dari mana saja' }],
                  },
                  {
                    type: 'listitem',
                    children: [{ type: 'text', text: 'Keamanan data yang terjamin' }],
                  },
                ],
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        author: adminUserId,
        category: 'technology',
        tags: 'cloud, technology, business',
        publishedAt: new Date().toISOString(),
        metaTitle: 'Mengenal Cloud Computing - My Awesome Website',
        metaDescription:
          'Panduan lengkap tentang cloud computing dan manfaatnya untuk bisnis',
        status: 'published',
      },
    })

    await payload.create({
      collection: 'posts',
      data: {
        title: '5 Tips Membangun Website yang Efektif',
        slug: '5-tips-membangun-website-efektif',
        excerpt:
          'Website yang baik adalah aset penting untuk bisnis modern. Berikut 5 tips untuk membangun website yang efektif.',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [{ type: 'text', text: '1. Tentukan Tujuan Website' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Sebelum mulai membangun website, tentukan terlebih dahulu tujuan utama website Anda. Apakah untuk branding, e-commerce, atau informasi?',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: '2. Desain yang User-Friendly' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Pastikan website Anda mudah dinavigasi dan memiliki desain yang menarik namun tidak berlebihan.',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: '3. Optimasi untuk Mobile' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Lebih dari 60% pengunjung website menggunakan mobile. Pastikan website Anda responsive.',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: '4. Kecepatan Loading' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Website yang lambat akan membuat pengunjung pergi. Optimasi gambar dan code untuk loading yang cepat.',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: '5. SEO Optimization' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Gunakan meta tags, keywords yang tepat, dan struktur URL yang SEO-friendly.',
                  },
                ],
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        author: adminUserId,
        category: 'tutorial',
        tags: 'web development, tutorial, tips',
        publishedAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        metaTitle: '5 Tips Membangun Website Efektif - My Awesome Website',
        metaDescription: 'Tips praktis untuk membuat website yang efektif dan menarik',
        status: 'published',
      },
    })

    await payload.create({
      collection: 'posts',
      data: {
        title: 'Tren Digital Marketing 2025',
        slug: 'tren-digital-marketing-2025',
        excerpt:
          'Digital marketing terus berkembang. Simak tren yang akan mendominasi di tahun 2025.',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [{ type: 'text', text: 'AI dan Personalisasi' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Kecerdasan buatan akan semakin berperan dalam memberikan pengalaman yang dipersonalisasi untuk setiap customer.',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Video Marketing' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Konten video, terutama short-form video, akan terus menjadi raja dalam strategi marketing.',
                  },
                ],
              },
              {
                type: 'heading',
                children: [{ type: 'text', text: 'Voice Search Optimization' }],
                tag: 'h2',
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Dengan meningkatnya penggunaan voice assistant, optimasi untuk voice search menjadi semakin penting.',
                  },
                ],
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        author: adminUserId,
        category: 'news',
        tags: 'digital marketing, trends, 2025',
        publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        metaTitle: 'Tren Digital Marketing 2025 - My Awesome Website',
        metaDescription: 'Pelajari tren digital marketing yang akan mendominasi tahun 2025',
        status: 'published',
      },
    })

    console.log('✅ Blog posts created!')

    console.log('🎉 Seeding completed successfully!')
    console.log('')
    console.log('📊 Summary:')
    console.log('- Site Settings: Created')
    console.log('- Pages: 3 (Home, About, Contact)')
    console.log('- Blog Posts: 3')
    console.log('')
    console.log('🌐 You can now visit http://localhost:3000/admin to see your content!')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error
  }

  process.exit(0)
}

seed()
