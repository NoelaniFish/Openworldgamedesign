# GitHub Setup Guide

This repository is ready to push to GitHub! Follow these steps:

## Quick Start

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name: `butch-identity-game` (or your preferred name)
   - Description: "Interactive narrative game exploring butch and transmasc identities"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

2. **Connect your local repository to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

3. **Push to GitHub**
   ```bash
   git push -u origin main
   ```

## What's Included

✅ **153 files committed** including:
- All source code (React/TypeScript)
- 7 character dialogue files (700+ dialogue nodes)
- 33 images and audio files
- Complete UI components
- Configuration files
- README.md with project documentation

✅ **Branch**: `main` (GitHub standard)

✅ **Commit hash**: `471a9f5`

✅ **.gitignore**: Properly configured to exclude:
- node_modules/
- build artifacts
- environment variables
- IDE files
- OS files

## Repository Structure

```
.
├── README.md                    # Project documentation
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies
├── vite.config.ts              # Build configuration
├── src/
│   ├── app/
│   │   ├── components/         # React components
│   │   │   ├── *Dialogue.ts   # Character dialogue (A, R, J, D, F, P, S)
│   │   │   └── ui/            # Reusable UI components
│   │   ├── pages/             # Page components
│   │   ├── hooks/             # Custom hooks
│   │   └── imports/           # Assets (images, audio)
│   └── styles/                # CSS files
└── guidelines/                # Project guidelines
```

## Asset Summary

**Images**: 26 files
- Character sprites (GIF animations)
- Background images (PNG)
- Screenshots

**Audio**: 3 files
- NYC subway ambient sound
- Environmental audio tracks

**Total media assets**: ~33 files

## After Pushing to GitHub

### Recommended Next Steps:

1. **Add Topics** (on GitHub repo page):
   - `interactive-fiction`
   - `dialogue-system`
   - `react`
   - `typescript`
   - `game`
   - `narrative`

2. **Enable GitHub Pages** (optional):
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `dist` folder
   - Run `npm run build` first to generate dist/

3. **Add a License** (optional):
   - MIT, Apache 2.0, or Creative Commons
   - Add via GitHub interface or create LICENSE file

4. **Protect main branch** (optional):
   - Settings → Branches → Add rule
   - Require pull request reviews
   - Require status checks

## Troubleshooting

**Issue**: "Repository already exists"
- You may have initialized the GitHub repo with files
- Either delete and recreate, or force push: `git push -f origin main`

**Issue**: "Large files detected"
- Check file sizes: `find . -type f -size +50M`
- Consider using Git LFS for large assets
- Our largest files are audio/images, all under GitHub's limits

**Issue**: "Authentication failed"
- Use a Personal Access Token instead of password
- Generate at: https://github.com/settings/tokens
- Use token as password when prompted

## Collaboration

To allow others to contribute:
1. Add them as collaborators (Settings → Collaborators)
2. Or accept pull requests from forks
3. Set up branch protection rules
4. Consider adding CONTRIBUTING.md

## Deployment Options

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Enable in settings
- **Cloudflare Pages**: Connect GitHub repo

---

**Ready to push!** 🚀

Your repository is fully configured and ready to push to GitHub.
All dialogue files follow the [Question?] [Answer] format.
All images and assets are committed.
