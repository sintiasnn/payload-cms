import { getPayload } from 'payload'
import config from './src/payload.config'

async function createAdmin() {
  const payload = await getPayload({ config })

  console.log('👤 Creating admin user...')

  try {
    // Check if user already exists
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length > 0) {
      console.log('⚠️  User already exists!')
      console.log('Email:', existingUsers.docs[0].email)
      console.log('\nIf you forgot your password, you can reset it through the admin panel.')
      process.exit(0)
    }

    // Create admin user
    const user = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@example.com',
        password: 'admin123',
      },
    })

    console.log('✅ Admin user created successfully!')
    console.log('')
    console.log('📧 Email: admin@example.com')
    console.log('🔑 Password: admin123')
    console.log('')
    console.log('🌐 Login at: http://localhost:3000/admin')
    console.log('')
    console.log('⚠️  IMPORTANT: Please change your password after first login!')
  } catch (error) {
    console.error('❌ Error creating admin user:', error)
    throw error
  }

  process.exit(0)
}

createAdmin()
