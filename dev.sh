#!/bin/bash

echo "🚀 Starting development server..."

# Kill ALL Next.js processes
echo "🧹 Killing all Next.js processes..."
pkill -f "next dev" 2>/dev/null || true
pkill -f "next" 2>/dev/null || true

# Kill processes on common dev ports
echo "🔌 Clearing ports 3000, 3001, 3002..."
lsof -ti:3000,3001,3002 | xargs kill -9 2>/dev/null || true

# Wait a moment for processes to fully terminate
sleep 2

# Clean cache
echo "🗑️  Cleaning cache..."
rm -rf .next
rm -rf node_modules/.cache

# Verify port 3000 is free
echo "✅ Verifying port 3000 is available..."
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "❌ Port 3000 is still in use. Killing again..."
    lsof -ti:3000 | xargs kill -9
    sleep 1
fi

# Start dev server in background
echo "⚡ Starting Next.js dev server on port 3000..."
nohup npm run dev > /dev/null 2>&1 &

# Wait for server to start
echo "⏳ Waiting for server to start..."
for i in {1..30}; do
    if curl -s http://localhost:3000 > /dev/null 2>&1; then
        echo "✅ Server is running at http://localhost:3000"
        echo "📝 Logs are being written to the background"
        echo "🛑 To stop the server, run: pkill -f 'next dev'"
        exit 0
    fi
    sleep 1
done

echo "❌ Server failed to start within 30 seconds"
exit 1 