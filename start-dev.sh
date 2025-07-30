#!/bin/bash

echo "🚀 Starting development server..."

# Kill any processes using port 3000
echo "🧹 Clearing port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Clean cache
echo "🗑️  Cleaning cache..."
rm -rf .next

# Start dev server
echo "⚡ Starting Next.js dev server..."
npm run dev 