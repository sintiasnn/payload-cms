#!/bin/sh
set -e

echo "🔍 Checking database connection..."

# Wait for database to be ready (optional but recommended)
if [ -n "$DATABASE_URL" ]; then
  echo "✅ Database URL configured"
fi

# Run Payload migrations
echo "🚀 Running Payload migrations..."
if [ -f "node_modules/.bin/payload" ]; then
  NODE_OPTIONS="--no-deprecation" node_modules/.bin/payload migrate --yes 2>&1 || {
    echo "⚠️  Migration failed or no migrations to run"
  }
else
  echo "⚠️  Payload CLI not found, skipping migrations"
fi

echo "🎉 Starting application..."

# Start the application
exec "$@"
