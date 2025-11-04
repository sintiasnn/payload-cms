# Payload CMS with PostgreSQL

This template comes configured with PayloadCMS 3.x using PostgreSQL database and Next.js 15.

## Quick Start - Local Setup

To spin up this template locally, follow these steps:

### Prerequisites

- Node.js 18+ or 20+
- pnpm 9+
- PostgreSQL database (local or remote)

### Development

1. Clone this repository
2. `cp .env.example .env` to copy the example environment variables
3. Update the `DATABASE_URL` in your `.env` file with your PostgreSQL connection string:
   ```
   DATABASE_URL=postgres://username:password@localhost:5432/database_name
   ```
4. `pnpm install` to install dependencies
5. `pnpm dev` to start the dev server
6. Open `http://localhost:3000/admin` in your browser
7. Create your first admin user

That's it! Changes made in `./src` will be reflected in your app.

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm seed` - Seed database with sample data
- `npx tsx create-admin.ts` - Create admin user
- `npx tsx reset-password.ts` - Reset admin password

### Docker (Optional)

If you prefer to use Docker for local development with PostgreSQL, the provided docker-compose.yml file can be used.

To do so, follow these steps:

1. Make sure your `.env` file has the correct `DATABASE_URL`:
   ```
   DATABASE_URL=postgres://postgres:password123@localhost:5432/payload
   ```
2. Run `docker-compose up -d` to start PostgreSQL in the background
3. Follow the development steps above

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

## Docker Deployment

This project includes a production-ready Dockerfile for deployment.

### Building Docker Image

```bash
docker build -t payload-cms:latest .
```

### Running with Docker

```bash
docker run -d \
  --name payload-cms \
  -p 3000:3000 \
  -e DATABASE_URL="postgres://user:pass@host:5432/db" \
  -e PAYLOAD_SECRET="your-secret-key" \
  -e NODE_ENV=production \
  payload-cms:latest
```

### Using Docker Compose

```bash
docker-compose up -d
```

This will start both the application and PostgreSQL database.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
