import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// SEO configurations for each language
const languages = {
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

async function buildHTMLFiles() {
  // Read the base template
  const templatePath = path.resolve(__dirname, 'index.html')
  const template = fs.readFileSync(templatePath, 'utf-8')

  // Create dist directory if it doesn't exist
  const distDir = path.resolve(__dirname, 'dist')
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }

  for (const [langCode, seoData] of Object.entries(languages)) {
    try {
      // Create localized HTML
      let localizedHTML = template
        .replace(
          '<html lang="zh-CN">',
          `<html lang="${langCode}">`
        )
        .replace(
          /<title>.*?<\/title>/,
          `<title>${seoData.title}</title>`
        )
        .replace(
          /<meta name="description" content="[^"]*">/,
          `<meta name="description" content="${seoData.description}">`
        )
        .replace(
          '<meta name="viewport"',
          `<meta name="keywords" content="${seoData.keywords}">\n    <meta name="viewport"`
        )

      // Write files
      if (langCode === 'en-US') {
        // Root index.html for default language
        fs.writeFileSync(path.resolve(distDir, 'index.html'), localizedHTML)
        console.log(`✓ Generated index.html (${langCode})`)
      }
      
      // Language-specific directory
      const langDir = path.resolve(distDir, langCode)
      if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true })
      }
      fs.writeFileSync(path.resolve(langDir, 'index.html'), localizedHTML)
      console.log(`✓ Generated ${langCode}/index.html`)

    } catch (error) {
      console.error(`Error generating HTML for ${langCode}:`, error)
    }
  }

  console.log('\n🎉 Multi-language HTML generation completed!')
}

buildHTMLFiles().catch(console.error)