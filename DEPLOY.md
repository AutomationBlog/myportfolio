# Deploy to GitHub Pages

## Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

2. **If using a project site (not username.github.io):**
   - Uncomment the `basePath` line in `next.config.ts`:
     ```typescript
     basePath: "/myportfolio",
     ```

3. **Configure repository name in next.config.ts if needed:**
   - Replace `myportfolio` with your actual repository name

## Deployment Options

### Option 1: Automatic Deployment (Recommended)
Push to `master` or `main` branch - GitHub Actions will automatically build and deploy.

### Option 2: Manual Deployment
```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Build and deploy
npm run deploy
```

### Option 3: Manual Build and Deploy
```bash
# Build the project
npm run build

# The output is in the 'out' directory
# Deploy the 'out' directory to your hosting service
```

## Configuration

- **next.config.ts**: Contains export settings and basePath configuration
- **.github/workflows/deploy.yml**: Automated deployment workflow
- **public/.nojekyll**: Tells GitHub Pages to not process with Jekyll

## Troubleshooting

1. **Build fails**: Ensure all dependencies are installed with `npm install`
2. **Pages not updating**: Check that the `gh-pages` branch exists and is selected in Settings → Pages
3. **Images not showing**: Verify that `images.unoptimized` is set to `true` in next.config.ts
4. **Links broken**: If using a project site, ensure `basePath` is configured correctly

## Notes

- Next.js 16 with static export (`output: "export"`) generates a fully static site
- The `out/` directory contains the static HTML files
- Automatic deployment triggers on push to master/main branches
