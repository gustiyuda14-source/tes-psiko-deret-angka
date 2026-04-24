# GitHub Pages Deployment Guide - Tes Psiko Deret Angka

## Current Status
- ✅ Application code is built and ready
- ✅ GitHub Actions workflow is configured correctly
- ✅ Build process with GitHub Pages base path is set up
- ⚠️ GitHub Pages source needs to be configured to use "GitHub Actions"

## Critical Step: Configure GitHub Pages Settings

GitHub Pages deployment requires ONE manual configuration step in the GitHub web interface:

### Step-by-Step Instructions

1. **Open GitHub Pages Settings**
   - Go to: https://github.com/gustiyuda14-source/tes-psiko-deret-angka/settings/pages
   - Or: Repository → Settings → Pages (in left sidebar)

2. **Change Deployment Source**
   - Look for "Source" dropdown at the top of the Pages settings
   - **Current value**: Likely shows "Deploy from a branch" 
   - **Change to**: "GitHub Actions"
   - Click "Save"

3. **Wait for Deployment**
   - GitHub Actions workflow will automatically trigger
   - Check https://github.com/gustiyuda14-source/tes-psiko-deret-angka/actions
   - Wait for the "Deploy to GitHub Pages" workflow to complete (2-3 minutes)
   - Look for a green checkmark ✅

4. **Test the Application**
   - Visit: https://gustiyuda14-source.github.io/tes-psiko-deret-angka/
   - Application should now load completely
   - Start the test to verify timer, questions, and navigation work

## What the Workflow Does

When properly configured, the GitHub Actions workflow:
1. Checks out the latest code from main branch
2. Installs dependencies
3. Builds the React app with `GITHUB_PAGES=true` environment variable
4. Sets the base path to `/tes-psiko-deret-angka/` for correct asset loading
5. Uploads the `dist/` folder as a GitHub Pages artifact
6. Deploys it to `https://gustiyuda14-source.github.io/tes-psiko-deret-angka/`

## Troubleshooting

### Application shows "my-first-project" but no content
- **Cause**: GitHub Pages source is not set to "GitHub Actions"
- **Fix**: Complete Step 2 above - change source to "GitHub Actions"

### Assets 404 or page partially loads  
- **Cause**: Base path configuration issue
- **Fix**: Already fixed in `vite.config.ts` - should work after Pages config is set

### Workflow status shows red X
- **Check**: Go to Actions tab, click on the failed run
- **Look for**: Error messages in the "Build" or "Deploy" steps
- **Common issues**: Missing environment variables, permission issues

## File Configuration Reference

### vite.config.ts
```typescript
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const base = isGitHubPages ? '/tes-psiko-deret-angka/' : '/'
```
✅ Correctly sets base path when GITHUB_PAGES environment variable is true

### .github/workflows/deploy.yml
✅ Configured to:
- Run on push to main branch
- Set GITHUB_PAGES='true' during build
- Upload dist/ as artifact
- Deploy via GitHub Actions

### package.json
```json
{
  "scripts": {
    "build": "tsc -b && vite build"
  }
}
```
✅ Builds both TypeScript and Vite bundle

## After Deployment

Once the application is live at https://gustiyuda14-source.github.io/tes-psiko-deret-angka/, verify:

- [ ] Start page loads
- [ ] Timer counts down (60 minutes)
- [ ] Questions display correctly
- [ ] Can navigate between questions
- [ ] Can select answers
- [ ] Submit button works
- [ ] Results page shows score and answers
- [ ] Can review explanations

## For Future Updates

After completing the GitHub Pages configuration setup, future updates are automatic:
1. Make changes to code
2. Push to main branch
3. GitHub Actions automatically builds and deploys
4. Changes visible within 2-3 minutes at the GitHub Pages URL

No additional manual steps are needed for future deployments.
