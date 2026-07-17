# zankowitch

Personal landing page for [zankowitch.com](https://zankowitch.com).

A single static `index.html` — no build step, no dependencies. It renders a
centered heading over an animated soft-blob background, with automatic
light/dark theming (`prefers-color-scheme`) and reduced-motion support
(`prefers-reduced-motion`).

## Structure

| File         | Purpose                                             |
| ------------ | --------------------------------------------------- |
| `index.html` | The whole site — markup and inline CSS.             |
| `CNAME`      | Custom domain for GitHub Pages (`zankowitch.com`).  |

## Develop

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server
```

## Deploy

Hosted on GitHub Pages from the `main` branch. Pushing to `main` publishes to
`zankowitch.com`.
