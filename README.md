# SWIFTSELL Documentation

User-facing documentation site for [SwiftSell](https://swiftsell.com), a B2B CPQ (Configure, Price, Quote) web application. Built with [Docusaurus 3](https://docusaurus.io/).

## Structure

```
docs/
├── getting-started/     Logging in, navigation, user roles
├── user-guide/          Catalog, configurator, quotes, orders
└── admin-guide/         Users, groups, customers, platforms, products, configuration
src/
├── components/          Custom React components (homepage features, etc.)
├── css/custom.css       Brand theming (SwiftSell colors, fonts)
└── pages/index.js       Homepage
static/img/              Static assets (logo, favicon)
```

## Local Development

```bash
yarn
yarn start
```

Opens a dev server at `http://localhost:3000`. Most changes hot-reload without a restart.

## Build

```bash
yarn build
```

Outputs the static site to `build/`. This is what gets deployed to the SwiftSell server.

## Images

Screenshots and documentation images are served directly from the SwiftSell server so they can be updated without rebuilding the site. The base URL is configured in `docusaurus.config.js` under `customFields.mediaBase`. Reference images in docs using the `DocImg` component:

```mdx
import DocImg from '@site/src/components/DocImg';

<DocImg src="admin/users-list.png" alt="Users list" />
```

Drop updated image files into the configured media folder on the SwiftSell server — no rebuild required.

## TODO Admonitions

Sections awaiting screenshots or content from the team are marked with visible `:::caution[TODO]` admonitions in the rendered docs. Search for `:::caution[TODO]` across the `docs/` directory to find all outstanding items.

## Content Source

All documented behavior is derived from the SwiftSell source at `C:\Users\MarkDonahue\Documents\SwiftSell`. Do not document behavior from memory — read the source. When behavior cannot be confirmed from source alone, use a `:::caution[TODO]` admonition.
