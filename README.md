
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9c9284fa-0a5c-4b25-ae4d-cd1fab62b731

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9c9284fa-0a5c-4b25-ae4d-cd1fab62b731) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9c9284fa-0a5c-4b25-ae4d-cd1fab62b731) and click on Share -> Publish.

## Deploying to GitHub Pages

You can deploy this portfolio website to GitHub Pages for free hosting. Follow these steps:

### Step 1: Prepare Your Repository

1. Make sure your code is pushed to a GitHub repository
2. Ensure your repository is public (GitHub Pages is free for public repos)

### Step 2: Configure Vite for GitHub Pages

1. Open `vite.config.ts` and add the base path configuration:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

export default defineConfig({
  base: '/your-repository-name/', // Replace with your actual repository name
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

**Important**: Replace `your-repository-name` with the actual name of your GitHub repository.

### Step 3: Set Up GitHub Actions for Automatic Deployment

1. In your repository, create the directory `.github/workflows/`
2. Create a file called `deploy.yml` in that directory with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Save the settings

### Step 5: Deploy

1. Push your changes to the main branch:
```sh
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

2. Go to the "Actions" tab in your GitHub repository to monitor the deployment
3. Once the action completes successfully, your site will be available at:
   `https://yourusername.github.io/your-repository-name/`

### Step 6: Update Links (Optional)

If you have any hardcoded links in your application that point to the root domain, you may need to update them to work with the GitHub Pages subdirectory structure.

### Troubleshooting

- **404 errors**: Make sure the `base` path in `vite.config.ts` matches your repository name exactly
- **Blank page**: Check the browser console for errors and ensure all asset paths are correct
- **Build failures**: Check the Actions tab for detailed error logs

Your portfolio will automatically redeploy whenever you push changes to the main branch!

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
