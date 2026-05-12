# Fix GitHub Assets - Complete Guide

Your assets were excluded because they total **58MB** (GitHub limit is 50MB). Here's how to fix it using Git LFS.

## Problem
- Total assets: 58MB (32 images + 3 audio files)
- GitHub rejected the push because files > 50MB
- Need to use **Git LFS** (Large File Storage)

## Solution: Use Git LFS (Step-by-Step)

### Step 1: Clean up your current repo

```bash
cd /workspaces/default/code

# Remove the .git folder to start fresh
rm -rf .git

# Initialize new git repo
git init
git branch -m main
git config user.email "your-email@example.com"
git config user.name "Your Name"
```

### Step 2: Set up Git LFS FIRST (before committing)

```bash
# Initialize Git LFS
git lfs install

# Track large file types
git lfs track "*.gif"
git lfs track "*.mp3"
git lfs track "*.png"

# Add the .gitattributes file
git add .gitattributes
```

### Step 3: Commit everything with LFS

```bash
# Add all files (LFS will handle the large ones)
git add -A

# Commit
git commit -m "Initial commit with Git LFS for assets

- All assets managed via Git LFS
- 32 images (GIF/PNG)  
- 3 audio files (MP3)
- Interactive dialogue game
- 7 characters, 700+ dialogue nodes

Total: 155 files, ~58MB assets handled by LFS"
```

### Step 4: Connect to your GitHub repo

```bash
# Add your GitHub repo as remote
git remote add origin https://github.com/NoelaniFish/Openworldgamedesign.git

# Push with force (since we're replacing the history)
git push -u origin main --force
```

### Step 5: Verify assets are included

```bash
# Check which files are tracked by LFS
git lfs ls-files

# Should show all your .gif, .mp3, .png files
```

## Expected Output

When you run `git lfs ls-files`, you should see something like:

```
d4f8bc9a1f * src/app/imports/Untitled_Artwork_17.gif
e2a9bd7f3c * src/app/imports/Untitled_Artwork_18.gif
c3b8ad6e2d * src/app/imports/757583__thel200ster__nyc-subway-sept-24.mp3
... (all your large files)
```

## What Git LFS Does

✓ Stores large files on GitHub's LFS servers  
✓ Keeps small "pointer" files in your repo  
✓ Downloads actual files only when needed  
✓ Free tier: 1GB storage + 1GB bandwidth/month  

Your 58MB fits easily in the free tier!

## Troubleshooting

### "git-lfs: command not found"

Install Git LFS first:
```bash
# Mac
brew install git-lfs

# Ubuntu/Debian  
sudo apt-get install git-lfs

# Windows
# Download from https://git-lfs.github.com
```

### Assets still excluded after push

Make sure you:
1. Ran `git lfs track` BEFORE `git add`
2. The .gitattributes file exists
3. Committed the .gitattributes file

### Files showing as regular files instead of LFS

```bash
# Migrate existing files to LFS
git lfs migrate import --include="*.gif,*.mp3,*.png" --everything

# Push again
git push origin main --force
```

## Alternative: Smaller Approach

If you want to avoid LFS, you could:

1. **Compress the assets** - Reduce GIF quality/size
2. **Host assets externally** - Use a CDN, store on cloud
3. **Reduce asset count** - Remove unused files

But Git LFS is the recommended approach for this project.

## Final Check

After pushing, go to your GitHub repo:
- Click on any .gif or .mp3 file
- If using LFS, you'll see "Stored with Git LFS" at the top
- The file will display/play normally

---

**Need help?** See GITHUB_SETUP.md for more details.

Your assets: 
- 19MB - NYC subway audio
- 6.3MB - Artwork_41.gif  
- 4.3MB - Artwork_46.gif
- + 30 more files
- Total: ~58MB
