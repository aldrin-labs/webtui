# WebTUI

Modular CSS Terminal-like UI library

Read the docs at https://webtui.ironclad.sh

[![Deploy Website to Pages](https://github.com/aldrin-labs/webtui/actions/workflows/web.yml/badge.svg)](https://github.com/aldrin-labs/webtui/actions/workflows/web.yml)

1. Clone the repo
2. `cd` into the repo
3. Run `bun i`
5. Run `bun run dev` to start the dev server

For feature requests please open an issue.

## Deployment

The documentation site is automatically deployed to GitHub Pages when changes are pushed to the `master` branch. The deployment is handled by the GitHub Actions workflow defined in `.github/workflows/web.yml`.

## TODO

- [x] Publish to NPM
- [ ] Contribution guidelines
- [x] Add descriptive READMEs to each package, docs
- [ ] Multiple catppuccin flavors in catppuccin theme
- [x] Nord theme
- [ ] Rose Pine theme
- [ ] Gruvbox theme
- [x] Landing page
  - [ ] Examples / Demos
- [ ] SEO / accessibility
- [ ] Refactor some things to use web components

## Roadmap

- [x] button
  - [ ] radio
- [x] input
- [ ] input[type="radio"]
- [ ] input[type="range"]
- [ ] checkbox
  - [ ] switch variant
- [ ] textarea
- [ ] pre
- [ ] label
- [ ] table
- [ ] dialog
  - [ ] popover (backdrop? + pointer events)
  - [ ] drawer / sheet
- [ ] select
- [ ] details (accordion)
- [x] typography
- [ ] separator / hr
- [ ] tooltip (hover)
- [ ] misc
  - [x] badge ([is-="badge"])
    - [x] variants for catppuccin theme
    - [x] caps
  - [ ] avatar ([is-="avatar"])
  - [ ] card ([is-="card"])
