#!/bin/bash

echo "🚀 Starting deployment process..."

# Clean up any existing processes
echo "🧹 Cleaning up processes..."
pkill -f "next dev" 2>/dev/null || true

# Clean cache
echo "🗑️  Cleaning cache..."
rm -rf .next
rm -rf node_modules/.cache

# Install dependencies if needed
echo "📦 Checking dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!" 