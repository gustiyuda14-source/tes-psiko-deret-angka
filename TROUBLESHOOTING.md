# GitHub Pages Deployment Troubleshooting

## Status Check

### Current Configuration ✅
- GitHub Pages **Source**: Set to "GitHub Actions" (verified in repository settings)
- Repository: `gustiyuda14-source/tes-psiko-deret-angka`
- URL: `https://gustiyuda14-source.github.io/tes-psiko-deret-angka/`
- Base path: `/tes-psiko-deret-angka/` (configured in vite.config.ts)

### Latest Workflow Changes
- **Improved workflow** (commit 78670f6): Better Node setup, package manager detection, improved error handling
- **Environment variable**: `GITHUB_PAGES=true` set during build step
- **Artifact upload**: Uploading `./dist` folder to GitHub Pages

## If Application Still Shows Old Version

### Step 1: Check Workflow Status
1. Go to: https://github.com/gustiyuda14-source/tes-psiko-deret-angka/actions
2. Look for "Deploy to GitHub Pages" workflows
3. Click on the most recent run
4. Check if it shows a green ✅ (success) or red ✗ (failure)

### Step 2: If Workflow Failed
Click the failed workflow run and look for:
- **Build step**: Did `npm run build` succeed?
- **Artifact upload**: Did upload-pages-artifact work?
- **Deploy step**: Did deploy-pages work?

### Step 3: Common Solutions

**If build failed:**
```bash
# Test locally with:
GITHUB_PAGES=true npm run build
npm run build  # Without the env var
```

**If artifact upload failed:**
- Check that dist/ folder exists and contains files
- Verify path is `./dist` not `./dist/` or other

**If deploy failed:**
- Verify GitHub Pages source is still set to "GitHub Actions"
- Check if another workflow is interfering
- Try clearing GitHub Pages cache (Settings → Pages → Unpublish)

## Manual Deployment Alternative

If GitHub Actions keeps failing, you can manually deploy:

```bash
# Build locally
npm run build

# This creates optimized files in ./dist/
# These files would need to be pushed to gh-pages branch manually
```

## Verification Checklist

Once deployment succeeds, verify at the URL:
- [ ] Page loads (not showing error)
- [ ] React app renders (not showing "my-first-project" title only)
- [ ] Timer visible (60:00 countdown)
- [ ] Questions display
- [ ] Can click to select answers
- [ ] Can navigate between questions
- [ ] Can submit test
- [ ] Results page displays correctly
- [ ] Explanations/review shows answers

## Network Debugging

Check what files are actually being served:

```bash
# Check HTML:
curl https://gustiyuda14-source.github.io/tes-psiko-deret-angka/

# Check if assets exist:
curl -I https://gustiyuda14-source.github.io/tes-psiko-deret-angka/assets/index-*.js
curl -I https://gustiyuda14-source.github.io/tes-psiko-deret-angka/assets/index-*.css
```

## Recent Changes Made

1. Fixed vite.config.ts to set correct base path
2. Configured GitHub Actions workflow with GITHUB_PAGES environment variable
3. Removed conflicting Jekyll workflows
4. Updated workflow with improved Node setup and package manager detection
5. All code pushed to main branch

## Next Steps if Deployment Still Fails

1. Check GitHub Actions logs for specific error messages
2. Verify all files are committed and pushed
3. Manually clear GitHub Pages cache and retry
4. Consider creating issue in repository for further investigation
