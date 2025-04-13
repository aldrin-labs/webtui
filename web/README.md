# WebTUI Docs

This is the documentation site for WebTUI, built with Astro. The site is automatically deployed to GitHub Pages when changes are pushed to the `master` branch.

## Deployment

The deployment is handled by the GitHub Actions workflow defined in `.github/workflows/web.yml`. The workflow builds the site and deploys it to GitHub Pages.

### Local Development

```bash
# Install dependencies
bun install

# Start the development server
bun run dev

# Build the site
bun run build

# Preview the built site
bun run preview
```

## TODO (later)

- [ ] contribution guidelines / docs
- [ ] framework-specific installations
- [ ] box captions guide (using badges)
- [ ] changelog
- [ ] examples in component doc pages
