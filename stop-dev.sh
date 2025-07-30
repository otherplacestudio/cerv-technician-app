#!/bin/bash

echo "🛑 Stopping development server..."

# Kill Next.js processes
pkill -f "next dev" 2>/dev/null || true
pkill -f "next" 2>/dev/null || true

# Kill processes on common dev ports
lsof -ti:3000,3001,3002 | xargs kill -9 2>/dev/null || true

echo "✅ Development server stopped" 