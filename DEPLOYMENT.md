# Deployment Guide - Dokploy & Coolify

Panduan lengkap deploy Payload CMS ke Dokploy atau Coolify dengan PostgreSQL database.

## 🚀 Deployment Steps

### 1. Setup Database PostgreSQL

Di Dokploy/Coolify, buat PostgreSQL database terlebih dahulu:

**Dokploy:**
- Go to your project → Add Resource → PostgreSQL
- Catat credentials yang diberikan (host, port, username, password, database name)

**Coolify:**
- Go to your project → New Database → PostgreSQL
- Catat connection string yang diberikan

### 2. Environment Variables

Set environment variables berikut di Dokploy/Coolify:

```bash
# Database Connection
DATABASE_URL=postgres://username:password@host:port/database_name

# Payload Secret (generate dengan: openssl rand -base64 32)
PAYLOAD_SECRET=your-super-secret-key-here

# Node Environment
NODE_ENV=production

# Optional: Port (default 3000)
PORT=3000

# Optional: Disable telemetry
NEXT_TELEMETRY_DISABLED=1
```

### 3. Deploy Configuration

#### **Opsi A: Deploy dari GitHub (Recommended)**

1. Push repository ke GitHub
2. Di Dokploy/Coolify, pilih "Deploy from Git"
3. Connect repository Anda
4. Set **Build Command**: `pnpm install && pnpm build`
5. Set **Start Command**: (kosongkan, akan pakai Dockerfile)
6. Set **Dockerfile path**: `./Dockerfile`
7. Set environment variables seperti di atas
8. Deploy!

#### **Opsi B: Deploy dengan Docker Image Manual**

```bash
# Build image locally
docker build -t payload-cms:latest .

# Tag untuk registry
docker tag payload-cms:latest your-registry.com/payload-cms:latest

# Push ke registry
docker push your-registry.com/payload-cms:latest

# Deploy di Dokploy/Coolify menggunakan image tersebut
```

### 4. Automatic Database Migration

✅ **Good News:** Dockerfile sudah dikonfigurasi untuk menjalankan migrasi otomatis!

Setiap kali container start, script akan:
1. Check koneksi database
2. Run `payload migrate` otomatis
3. Baru kemudian start aplikasi

Anda **TIDAK perlu** menjalankan migration manual.

### 5. Verify Deployment

Setelah deploy berhasil:

1. Akses `https://your-domain.com/admin`
2. Anda akan diarahkan ke halaman create first admin
3. Create admin user pertama
4. Login dan mulai gunakan CMS!

---

## 🔧 Troubleshooting

### Database Connection Error

**Error:** `connection refused` atau `ECONNREFUSED`

**Solution:**
- Pastikan `DATABASE_URL` format benar: `postgres://user:pass@host:port/db`
- Jika database di service terpisah, pastikan keduanya di network yang sama
- Check database sudah running dan healthy

### Migration Fails

**Error:** Migration error saat startup

**Solution:**
```bash
# Option 1: Access container dan run migration manual
docker exec -it <container-name> sh
NODE_OPTIONS="--no-deprecation" node_modules/.bin/payload migrate

# Option 2: Check logs
docker logs <container-name>
```

### Build Fails - Out of Memory

**Solution:**
- Increase build resources di Dokploy/Coolify settings
- Atau build locally dan push image

### Cannot Create Admin User

**Error:** Database tables not found

**Solution:**
- Check migration berhasil dengan melihat container logs
- Restart container untuk trigger migration lagi

---

## 📊 Post-Deployment Checklist

- [ ] Database connected successfully
- [ ] Migrations ran successfully
- [ ] Admin panel accessible at `/admin`
- [ ] First admin user created
- [ ] File uploads working (check media collection)
- [ ] SSL/HTTPS configured (Dokploy/Coolify auto-handles this)
- [ ] Backup strategy configured for PostgreSQL

---

## 🔐 Security Recommendations

1. **Strong PAYLOAD_SECRET**: Use minimal 32-character random string
2. **Database Credentials**: Never commit to git, use environment variables
3. **Regular Backups**: Setup automated PostgreSQL backups
4. **Update Dependencies**: Keep Payload and Next.js updated
5. **SSL/HTTPS**: Ensure enabled (Dokploy/Coolify provides this automatically)

---

## 🎯 Quick Deploy Commands

### Generate Secure PAYLOAD_SECRET
```bash
openssl rand -base64 32
```

### Test Build Locally
```bash
docker build -t payload-test .
docker run -p 3000:3000 \
  -e DATABASE_URL="postgres://user:pass@host:5432/db" \
  -e PAYLOAD_SECRET="your-secret" \
  -e NODE_ENV=production \
  payload-test
```

### Check Migration Status (in running container)
```bash
docker exec -it <container-name> sh
NODE_OPTIONS="--no-deprecation" node_modules/.bin/payload migrate:status
```

---

## 📚 Additional Resources

- [Payload CMS Docs](https://payloadcms.com/docs)
- [Dokploy Documentation](https://dokploy.com/docs)
- [Coolify Documentation](https://coolify.io/docs)
- [Next.js Docker Deployment](https://nextjs.org/docs/deployment#docker-image)

---

## ✅ Success Indicators

Deployment berhasil jika:
- Container running dan healthy
- Logs menunjukkan "Running Payload migrations..." ✓
- Logs menunjukkan "Starting application..." ✓
- Admin panel accessible
- Dapat create dan login admin user

Happy deploying! 🚀
