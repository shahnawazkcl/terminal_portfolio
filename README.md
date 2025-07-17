# Terminal Portfolio

![Status](https://img.shields.io/badge/status-work--in--progress-yellow)

This is a terminal-style portfolio website built with Flask and Frozen-Flask, then deployed using GitHub Pages.

## Features

- Terminal interface with custom commands (`help`, `about`, `projects`, `contact`, etc.)
- Static site generated using `Frozen-Flask`
- Hosted on GitHub Pages

## Setup (for development)

```bash
# Create and activate a virtual environment if not already
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Run locally
python run.py
````

## Freeze for GitHub Pages

```bash
python freeze.py
```

This creates a `build/` folder containing the static site.

## Deploy

Push contents of `build/` to the `gh-pages` branch, or move to `/docs` in `master` branch and enable GitHub Pages in repo settings.

## Status

🚧 **Work in Progress** — This project is still under development.

## License

MIT
