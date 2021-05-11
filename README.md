# GenePattern JupyterLab Theme

A theme extension for JupyterLab with the GenePattern logo and colors.

## Prerequisites

* JupyterLab >= 3.0.0

## Installation

```bash
jupyter labextension install @genepattern/genepattern-theme-extension
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
jupyter labextension install .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
