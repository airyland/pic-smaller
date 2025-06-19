# Multi-language SSR Deployment Guide

## Overview

This project now supports Server-Side Rendering (SSR) for SEO-optimized multi-language support. Each language gets its own HTML file with localized title, description, and keywords.

## Build Process

### Development
```bash
# Original SPA development
npm run dev:spa

# SSR development (with Express server)
npm run dev
```

### Production Build
```bash
# Build with multi-language HTML generation
npm run build

# This will:
# 1. Run TypeScript compilation
# 2. Build Vite bundle
# 3. Generate language-specific HTML files
```

## Generated Files Structure

```
dist/
├── index.html          # Default (English)
├── en-US/index.html    # English
├── zh-CN/index.html    # Simplified Chinese
├── zh-TW/index.html    # Traditional Chinese
├── ja-JP/index.html    # Japanese
├── ko-KR/index.html    # Korean
├── fr-FR/index.html    # French
├── es-ES/index.html    # Spanish
├── tr-TR/index.html    # Turkish
├── fa-IR/index.html    # Persian
└── assets/             # Static assets
```

## Nginx Configuration

Use the provided `nginx-multilang.conf` for routing:

```nginx
# Language detection and routing
location ~ ^/(en-US|zh-CN|zh-TW|ja-JP|ko-KR|fr-FR|es-ES|tr-TR|fa-IR)(/.*)?$ {
    set $lang $1;
    try_files /$lang/index.html /index.html;
}

# Root path serves default language
location = / {
    try_files /index.html =404;
}
```

## SEO Benefits

### Each Language Gets:
- **Localized Title**: Optimized for search engines
- **Meta Description**: Language-specific descriptions
- **Keywords**: Relevant keywords in each language
- **Lang Attribute**: Proper `html lang` attribute
- **URL Structure**: Clean language paths (e.g., `/zh-CN/`, `/ja-JP/`)

### Search Engine Support:
- Google: Detects language from URL structure and meta tags
- Baidu: Optimized Chinese content
- Yandex: Multi-language support
- Local search engines: Language-specific optimization

## URL Structure

- **English (Default)**: `/` or `/en-US/`
- **Chinese**: `/zh-CN/`
- **Japanese**: `/ja-JP/`
- **Korean**: `/ko-KR/`
- **French**: `/fr-FR/`
- **Spanish**: `/es-ES/`
- **Turkish**: `/tr-TR/`
- **Persian**: `/fa-IR/`
- **Traditional Chinese**: `/zh-TW/`

## Client-Side Routing

The React app still handles client-side routing after initial load:
- Language switching updates URL
- SPA navigation works within each language
- Browser back/forward buttons work correctly

## Performance

- **Initial Load**: Optimized HTML with proper meta tags
- **Subsequent Navigation**: Fast SPA routing
- **SEO Crawling**: Search engines see static HTML
- **CDN Friendly**: Static files can be cached

## Deployment Options

### 1. Static Hosting (Recommended)
Deploy `dist/` folder to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### 2. Express Server
```bash
npm run build:ssr
npm run serve
```

### 3. Docker
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx-multilang.conf /etc/nginx/conf.d/default.conf
```

## Monitoring

Track language-specific metrics:
- Page views per language
- Conversion rates by language
- Search engine ranking per language
- User engagement by locale