# Vine Solutions website

This repository contains the complete Vine Solutions marketing website and an automated GitHub Pages deployment workflow.

## Publish on GitHub Pages

1. Create a new **public** repository on GitHub. A suggested name is `vine-solutions-website`.
2. Extract the supplied ZIP file on your computer.
3. Upload **all contents inside the extracted folder** to the root of the new repository. Include the hidden `.github` folder.
4. Commit the upload to the `main` branch.
5. Open **Settings → Pages** in the repository.
6. Under **Build and deployment**, select **GitHub Actions** as the source.
7. Open the **Actions** tab and run “Deploy Vine Solutions to GitHub Pages” if it did not start automatically.

After the workflow completes, GitHub will show the public URL in the deployment summary. Visitors will not need a login.

## Edit locally

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Contact detail to confirm

The current call-to-action uses `hello@vinesolutions.com`. Update that address in `src/App.tsx` if your company email is different.
