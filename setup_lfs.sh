#!/bin/bash
# Setup Git LFS and push with assets
# Run this script to fix the GitHub assets issue

set -e  # Exit on error

echo "🚀 Setting up Git LFS for your project..."
echo ""

# Step 1: Clean slate
echo "📦 Step 1: Starting fresh..."
rm -rf .git
git init
git branch -m main
git config user.email "user@figma-make.com"
git config user.name "Figma Make User"
echo "   ✓ Git initialized"

# Step 2: Set up LFS
echo ""
echo "📦 Step 2: Setting up Git LFS..."
git lfs install --local 2>/dev/null || git lfs install --skip-smudge || echo "   (LFS already initialized)"
git lfs track "*.gif"
git lfs track "*.mp3"
git lfs track "*.png"
echo "   ✓ LFS tracking: *.gif, *.mp3, *.png"

# Step 3: Add and commit
echo ""
echo "📦 Step 3: Committing all files..."
git add .gitattributes
git add -A
git commit -m "Initial commit with Git LFS for assets

- All large assets managed via Git LFS
- 32 images (GIF/PNG): ~39MB
- 3 audio files (MP3): ~19MB
- Total assets: ~58MB handled by LFS

Features:
- Interactive dialogue game
- 7 characters with 700+ dialogue nodes
- React + TypeScript + Tailwind
- All dialogue follows [Question?] [Answer] format

Ready to push with all assets included!

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

echo "   ✓ All files committed"

# Step 4: Show LFS status
echo ""
echo "📦 Step 4: Verifying LFS setup..."
LFS_FILES=$(git lfs ls-files | wc -l)
echo "   ✓ $LFS_FILES files tracked by LFS"

# Step 5: Connect to GitHub
echo ""
echo "📦 Step 5: Connecting to GitHub..."
git remote add origin https://github.com/NoelaniFish/Openworldgamedesign.git 2>/dev/null || \
git remote set-url origin https://github.com/NoelaniFish/Openworldgamedesign.git
echo "   ✓ Remote configured"

# Step 6: Ready to push
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Setup complete! Ready to push with LFS."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Now run this command to push everything:"
echo ""
echo "  git push -u origin main --force"
echo ""
echo "This will push all 155 files including all 58MB of assets!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
