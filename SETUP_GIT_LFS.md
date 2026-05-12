# Git LFS Setup Guide

Your assets total **58MB** which exceeds GitHub's 50MB push limit. Use Git LFS (Large File Storage) to include them.

## Quick Fix (5 steps)

### 1. Install Git LFS
```bash
# Check if already installed
git lfs version

# If not installed, install it:
# Mac: brew install git-lfs
# Ubuntu/Debian: sudo apt-get install git-lfs
# Windows: Download from https://git-lfs.github.com
```

### 2. Initialize Git LFS in your repo
```bash
git lfs install
```

### 3. Track your large files
```bash
# Track all GIF and MP3 files
git lfs track "*.gif"
git lfs track "*.mp3"
git lfs track "*.png"
```

### 4. Add the .gitattributes file
```bash
git add .gitattributes
git commit -m "Configure Git LFS for large assets"
```

### 5. Remove old history and re-commit assets
```bash
# Remove the files from git cache (not from disk)
git rm --cached -r src/app/imports/*.gif
git rm --cached -r src/app/imports/*.mp3
git rm --cached -r src/imports/*.gif
git rm --cached -r src/imports/*.png

# Re-add them (they'll now use LFS)
git add src/app/imports/
git add src/imports/

# Commit
git commit -m "Add large assets via Git LFS"

# Force push to update GitHub
git push origin main --force
```

## Alternative: Fresh Push with LFS

If you prefer to start fresh:

```bash
# 1. Initialize LFS
git lfs install

# 2. Track large files
git lfs track "*.gif"
git lfs track "*.mp3"  
git lfs track "*.png"

# 3. Add gitattributes
git add .gitattributes

# 4. Commit everything
git add -A
git commit -m "Initial commit with Git LFS for assets"

# 5. Force push
git push origin main --force
```

## What Git LFS Does

- Stores large files on GitHub's LFS servers
- Keeps pointers in your repository
- Free tier: 1GB storage, 1GB bandwidth/month
- Paid: $5/month per 50GB

## Your Large Files

```
19M  - NYC subway audio (MP3)
6.3M - Artwork_41.gif
4.3M - Artwork_46.gif
3.3M - Artwork_44.gif
2.9M - Artwork_40.gif
+ 20+ more GIF files

Total: ~58MB
```

## Verify It Worked

After pushing:

```bash
# Check which files are tracked by LFS
git lfs ls-files

# Should show all your .gif, .mp3, .png files
```

## Troubleshooting

**Error: "git-lfs not found"**
- Install Git LFS first (see step 1)

**Error: "This exceeds GitHub's file size limit"**
- Make sure you ran `git lfs track` BEFORE adding files
- Check .gitattributes exists and has your file types

**Files still too large**
- Run: `git lfs migrate import --include="*.gif,*.mp3,*.png"`
- This converts existing files to LFS

---

After setup, all your assets will be included in the GitHub repository! 🎉
