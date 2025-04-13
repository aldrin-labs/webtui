# Deployment Guide

## GitHub Pages Deployment

The WebTUI documentation site is automatically deployed to GitHub Pages using GitHub Actions. The deployment process is triggered whenever changes are pushed to the `master` branch.

### How It Works

1. The GitHub Actions workflow (`.github/workflows/web.yml`) is triggered on pushes to the `master` branch.
2. The workflow builds the project using Bun and Turbo.
3. The built site (from `./web/dist`) is uploaded as a GitHub Pages artifact.
4. GitHub Pages deploys the site automatically.

### Manual Deployment

You can also manually trigger the deployment from the GitHub Actions tab by selecting the "Deploy Website to Pages" workflow and clicking "Run workflow".

### Local Testing

To test the build locally before pushing changes:

```bash
# Install dependencies
bun install

# Build the site
bun run build

# Preview the built site
cd web && bun run preview
```

### Troubleshooting

If the deployment fails, check the GitHub Actions logs for error messages. Common issues include:

- Build failures due to code errors
- Missing dependencies
- Configuration issues

For more help, please open an issue on the repository.