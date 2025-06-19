import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    root: process.cwd(),
    configFile: './vite.config.ts'
  })

  app.use(vite.middlewares)

  // Language detection from URL
  const supportedLangs = ["en-US", "tr-TR", "fr-FR", "es-ES", "ko-KR", "ja-JP", "zh-TW", "zh-CN", "fa-IR"]
  const defaultLang = "en-US"

  function extractLangFromPath(url) {
    const segments = url.split('/').filter(Boolean)
    
    if (segments.length > 0 && supportedLangs.includes(segments[0])) {
      return { lang: segments[0], path: segments.slice(1).join('/') || 'home' }
    }
    
    return { lang: defaultLang, path: segments.join('/') || 'home' }
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
    const { lang } = extractLangFromPath(url)

    try {
      // Use hardcoded SEO data instead of dynamic imports to avoid SSR issues
      const seoData = {
        'en-US': {
          title: "Small.im – A free tool to compress and convert JPEG, PNG, WEBP, AVIF, SVG and GIF images",
          description: "Small.im is a free tool to securely compress and convert JPEG, PNG, WEBP, AVIF, SVG and GIF images with zero privacy concerns",
          keywords: "image compression, jpeg, png, webp, avif, gif, svg, compress images, image converter, free tool"
        },
        'zh-CN': {
          title: "Small.im – 免费的在线图片压缩和格式转换工具",
          description: "Small.im是一款免费的在线图片压缩工具，支持JPEG、PNG、WEBP、AVIF、SVG和GIF格式的压缩和转换，保护您的隐私安全",
          keywords: "图片压缩, 图像压缩, jpeg压缩, png压缩, webp转换, avif压缩, gif压缩, svg优化, 在线工具, 免费压缩"
        },
        'zh-TW': {
          title: "圖小小 – 免費的線上圖片壓縮和格式轉換工具",
          description: "圖小小是一款免費的線上圖片壓縮工具，支援JPEG、PNG、WEBP、AVIF、SVG和GIF格式的壓縮和轉換，保護您的隱私安全",
          keywords: "圖片壓縮, 圖像壓縮, jpeg壓縮, png壓縮, webp轉換, avif壓縮, gif壓縮, svg優化, 線上工具, 免費壓縮"
        },
        'ja-JP': {
          title: "Small.im – JPEG、PNG、WEBP、AVIF、SVG、GIF画像を圧縮・変換する無料ツール",
          description: "Small.imは、JPEG、PNG、WEBP、AVIF、SVG、GIF画像を安全に圧縮・変換する無料ツールです。プライバシーを完全に保護します",
          keywords: "画像圧縮, jpeg圧縮, png圧縮, webp変換, avif圧縮, gif圧縮, svg最適化, 無料ツール, 画像変換"
        },
        'ko-KR': {
          title: "Small.im – JPEG, PNG, WEBP, AVIF, SVG, GIF 이미지를 압축하고 변환하는 무료 도구",
          description: "Small.im은 JPEG, PNG, WEBP, AVIF, SVG, GIF 이미지를 안전하게 압축하고 변환하는 무료 도구입니다. 개인정보를 완전히 보호합니다",
          keywords: "이미지 압축, jpeg 압축, png 압축, webp 변환, avif 압축, gif 압축, svg 최적화, 무료 도구, 이미지 변환"
        },
        'fr-FR': {
          title: "Small.im – Un outil gratuit pour compresser et convertir les images JPEG, PNG, WEBP, AVIF, SVG et GIF",
          description: "Small.im est un outil gratuit pour compresser et convertir en toute sécurité les images JPEG, PNG, WEBP, AVIF, SVG et GIF sans aucun souci de confidentialité",
          keywords: "compression d'images, jpeg, png, webp, avif, gif, svg, compresser images, convertisseur d'images, outil gratuit"
        },
        'es-ES': {
          title: "Small.im – Una herramienta gratuita para comprimir y convertir imágenes JPEG, PNG, WEBP, AVIF, SVG y GIF",
          description: "Small.im es una herramienta gratuita para comprimir y convertir de forma segura imágenes JPEG, PNG, WEBP, AVIF, SVG y GIF sin preocupaciones de privacidad",
          keywords: "compresión de imágenes, jpeg, png, webp, avif, gif, svg, comprimir imágenes, conversor de imágenes, herramienta gratuita"
        },
        'tr-TR': {
          title: "Small.im – JPEG, PNG, WEBP, AVIF, SVG ve GIF görüntülerini sıkıştırmak ve dönüştürmek için ücretsiz araç",
          description: "Small.im, JPEG, PNG, WEBP, AVIF, SVG ve GIF görüntülerini güvenli bir şekilde sıkıştırmak ve dönüştürmek için ücretsiz bir araçtır, gizlilik endişesi yaşamadan",
          keywords: "görüntü sıkıştırma, jpeg, png, webp, avif, gif, svg, görüntü sıkıştır, görüntü dönüştürücü, ücretsiz araç"
        },
        'fa-IR': {
          title: "Small.im – ابزار رایگان برای فشرده‌سازی و تبدیل تصاویر JPEG، PNG، WEBP، AVIF، SVG و GIF",
          description: "Small.im ابزار رایگانی برای فشرده‌سازی و تبدیل ایمن تصاویر JPEG، PNG، WEBP، AVIF، SVG و GIF بدون نگرانی حریم خصوصی است",
          keywords: "فشرده‌سازی تصویر, jpeg, png, webp, avif, gif, svg, فشرده کردن تصاویر, مبدل تصویر, ابزار رایگان"
        }
      }
      
      const localeData = seoData[lang] || seoData['en-US']

      // Read template
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      )

      // Transform template through Vite
      template = await vite.transformIndexHtml(url, template)

      // Render app HTML for SSR
      let appHtml = ''
      try {
        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
        appHtml = await render(url, lang)
        console.log(`SSR rendered for ${lang}: ${appHtml.substring(0, 100)}...`)
      } catch (error) {
        console.error('SSR render error:', error)
        // Fallback to client-side rendering
      }

      // Replace meta tags with localized content
      template = template.replace(
        /<title>.*?<\/title>/,
        `<title>${localeData.title}</title>`
      )

      template = template.replace(
        /<meta name="description" content="[^"]*">/,
        `<meta name="description" content="${localeData.description}">`
      )

      // Add keywords meta tag
      template = template.replace(
        '<meta name="viewport"',
        `<meta name="keywords" content="${localeData.keywords}">\n    <meta name="viewport"`
      )

      // Update lang attribute
      template = template.replace(
        /<html lang="[^"]*">/,
        `<html lang="${lang}">`
      )

      // Inject rendered HTML
      if (appHtml) {
        template = template.replace(
          '<div id="root"></div>',
          `<div id="root">${appHtml}</div>`
        )
        
        // Change script to use client entry point for hydration
        template = template.replace(
          '/src/main.tsx',
          '/src/entry-client.tsx'
        )
      }

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  return app
}

createServer().then(app => {
  app.listen(3019, () => {
    console.log('Server running at http://localhost:3019')
  })
})