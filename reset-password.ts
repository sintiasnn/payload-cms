import { getPayload } from 'payload'
import config from './src/payload.config'

async function resetPassword() {
  const payload = await getPayload({ config })

  console.log('🔄 Resetting admin password...')

  try {
    // Find the first user
    const users = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (users.docs.length === 0) {
      console.log('❌ No users found in database!')
      process.exit(1)
    }

    const user = users.docs[0]

    // Update password
    await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        password: 'admin123',
      },
    })

    console.log('✅ Password reset successfully!')
    console.log('')
    console.log('📧 Email:', user.email)
    console.log('🔑 New Password: admin123')
    console.log('')
    console.log('🌐 Login at: http://localhost:3000/admin')
    console.log('')
    console.log('⚠️  IMPORTANT: Please change your password after login!')
  } catch (error) {
    console.error('❌ Error resetting password:', error)
    throw error
  }

  process.exit(0)
}

resetPassword()
