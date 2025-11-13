#!/bin/sh
set -e

echo "🔍 Checking database connection..."

# Wait for database to be ready
if [ -n "$DATABASE_URL" ]; then
  echo "✅ Database URL configured"

  # Extract host and port from DATABASE_URL
  DB_HOST=$(echo $DATABASE_URL | sed -e 's|.*@\([^:]*\).*|\1|')
  DB_PORT=$(echo $DATABASE_URL | sed -e 's|.*:\([0-9]*\)/.*|\1|')

  # Default to 5432 if port not found
  if [ -z "$DB_PORT" ] || [ "$DB_PORT" = "$DATABASE_URL" ]; then
    DB_PORT=5432
  fi

  echo "⏳ Waiting for database at $DB_HOST:$DB_PORT..."

  # Wait for database (max 30 seconds)
  for i in $(seq 1 30); do
    if nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; then
      echo "✅ Database is ready!"
      break
    fi
    echo "  Attempt $i/30: Database not ready yet..."
    sleep 1
  done

  # Final check
  if ! nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; then
    echo "⚠️  Warning: Could not connect to database after 30 seconds"
    echo "  Continuing anyway - application will retry connection..."
  fi
else
  echo "⚠️  DATABASE_URL not configured"
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
