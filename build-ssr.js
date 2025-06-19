import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// SEO and content data for each language
const languages = {
  'en-US': {
    title: "Small.im – A free tool to compress and convert JPEG, PNG, WEBP, AVIF, SVG and GIF images",
    description: "Small.im is a free tool to securely compress and convert JPEG, PNG, WEBP, AVIF, SVG and GIF images with zero privacy concerns",
    keywords: "image compression, jpeg, png, webp, avif, gif, svg, compress images, image converter, free tool",
    content: {
      heading: "Small.im – Free Image Compression Tool",
      subheading: "Compress and convert images securely in your browser",
      uploadText: "Click to select or drop files",
      supportedFormats: "Supports JPEG, PNG, WEBP, AVIF, SVG and GIF formats",
      privacyNote: "All processing happens locally in your browser - your images never leave your device"
    }
  },
  'zh-CN': {
    title: "Small.im – 免费的在线图片压缩和格式转换工具",
    description: "Small.im是一款免费的在线图片压缩工具，支持JPEG、PNG、WEBP、AVIF、SVG和GIF格式的压缩和转换，保护您的隐私安全",
    keywords: "图片压缩, 图像压缩, jpeg压缩, png压缩, webp转换, avif压缩, gif压缩, svg优化, 在线工具, 免费压缩",
    content: {
      heading: "Small.im – 免费图片压缩工具",
      subheading: "在浏览器中安全地压缩和转换图片",
      uploadText: "点击选择或拖拽文件到此处",
      supportedFormats: "支持 JPEG、PNG、WEBP、AVIF、SVG 和 GIF 格式",
      privacyNote: "所有处理都在您的浏览器本地完成 - 您的图片不会离开您的设备"
    }
  },
  'ja-JP': {
    title: "Small.im – JPEG、PNG、WEBP、AVIF、SVG、GIF画像を圧縮・変換する無料ツール",
    description: "Small.imは、JPEG、PNG、WEBP、AVIF、SVG、GIF画像を安全に圧縮・変換する無料ツールです。プライバシーを完全に保護します",
    keywords: "画像圧縮, jpeg圧縮, png圧縮, webp変換, avif圧縮, gif圧縮, svg最適化, 無料ツール, 画像変換",
    content: {
      heading: "Small.im – 無料画像圧縮ツール",
      subheading: "ブラウザで安全に画像を圧縮・変換",
      uploadText: "クリックして選択またはファイルをドロップ",
      supportedFormats: "JPEG、PNG、WEBP、AVIF、SVG、GIF形式をサポート",
      privacyNote: "すべての処理はブラウザ内でローカルに実行されます - 画像がデバイスから離れることはありません"
    }
  },
  'ko-KR': {
    title: "Small.im – JPEG, PNG, WEBP, AVIF, SVG, GIF 이미지를 압축하고 변환하는 무료 도구",
    description: "Small.im은 JPEG, PNG, WEBP, AVIF, SVG, GIF 이미지를 안전하게 압축하고 변환하는 무료 도구입니다. 개인정보를 완전히 보호합니다",
    keywords: "이미지 압축, jpeg 압축, png 압축, webp 변환, avif 압축, gif 압축, svg 최적화, 무료 도구, 이미지 변환",
    content: {
      heading: "Small.im – 무료 이미지 압축 도구",
      subheading: "브라우저에서 안전하게 이미지를 압축하고 변환하세요",
      uploadText: "클릭하여 선택하거나 파일을 드래그하세요",
      supportedFormats: "JPEG, PNG, WEBP, AVIF, SVG, GIF 형식을 지원합니다",
      privacyNote: "모든 처리는 브라우저에서 로컬로 수행됩니다 - 이미지가 기기를 떠나지 않습니다"
    }
  },
  'fr-FR': {
    title: "Small.im – Un outil gratuit pour compresser et convertir les images JPEG, PNG, WEBP, AVIF, SVG et GIF",
    description: "Small.im est un outil gratuit pour compresser et convertir en toute sécurité les images JPEG, PNG, WEBP, AVIF, SVG et GIF sans aucun souci de confidentialité",
    keywords: "compression d'images, jpeg, png, webp, avif, gif, svg, compresser images, convertisseur d'images, outil gratuit",
    content: {
      heading: "Small.im – Outil gratuit de compression d'images",
      subheading: "Compressez et convertissez des images en toute sécurité dans votre navigateur",
      uploadText: "Cliquez pour sélectionner ou déposez les fichiers",
      supportedFormats: "Supporte les formats JPEG, PNG, WEBP, AVIF, SVG et GIF",
      privacyNote: "Tout le traitement se fait localement dans votre navigateur - vos images ne quittent jamais votre appareil"
    }
  },
  'es-ES': {
    title: "Small.im – Una herramienta gratuita para comprimir y convertir imágenes JPEG, PNG, WEBP, AVIF, SVG y GIF",
    description: "Small.im es una herramienta gratuita para comprimir y convertir de forma segura imágenes JPEG, PNG, WEBP, AVIF, SVG y GIF sin preocupaciones de privacidad",
    keywords: "compresión de imágenes, jpeg, png, webp, avif, gif, svg, comprimir imágenes, conversor de imágenes, herramienta gratuita",
    content: {
      heading: "Small.im – Herramienta gratuita de compresión de imágenes",
      subheading: "Comprime y convierte imágenes de forma segura en tu navegador",
      uploadText: "Haz clic para seleccionar o arrastra archivos",
      supportedFormats: "Compatible con formatos JPEG, PNG, WEBP, AVIF, SVG y GIF",
      privacyNote: "Todo el procesamiento ocurre localmente en tu navegador - tus imágenes nunca salen de tu dispositivo"
    }
  },
  'tr-TR': {
    title: "Small.im – JPEG, PNG, WEBP, AVIF, SVG ve GIF görüntülerini sıkıştırmak ve dönüştürmek için ücretsiz araç",
    description: "Small.im, JPEG, PNG, WEBP, AVIF, SVG ve GIF görüntülerini güvenli bir şekilde sıkıştırmak ve dönüştürmek için ücretsiz bir araçtır, gizlilik endişesi yaşamadan",
    keywords: "görüntü sıkıştırma, jpeg, png, webp, avif, gif, svg, görüntü sıkıştır, görüntü dönüştürücü, ücretsiz araç",
    content: {
      heading: "Small.im – Ücretsiz görüntü sıkıştırma aracı",
      subheading: "Tarayıcınızda güvenli bir şekilde görüntüleri sıkıştırın ve dönüştürün",
      uploadText: "Seçmek için tıklayın veya dosyaları sürükleyin",
      supportedFormats: "JPEG, PNG, WEBP, AVIF, SVG ve GIF formatlarını destekler",
      privacyNote: "Tüm işlemler tarayıcınızda yerel olarak gerçekleşir - görüntüleriniz cihazınızdan ayrılmaz"
    }
  },
  'zh-TW': {
    title: "圖小小 – 免費的線上圖片壓縮和格式轉換工具",
    description: "圖小小是一款免費的線上圖片壓縮工具，支援JPEG、PNG、WEBP、AVIF、SVG和GIF格式的壓縮和轉換，保護您的隱私安全",
    keywords: "圖片壓縮, 圖像壓縮, jpeg壓縮, png壓縮, webp轉換, avif壓縮, gif壓縮, svg優化, 線上工具, 免費壓縮",
    content: {
      heading: "圖小小 – 免費圖片壓縮工具",
      subheading: "在瀏覽器中安全地壓縮和轉換圖片",
      uploadText: "點擊選擇或拖曳檔案到此處",
      supportedFormats: "支援 JPEG、PNG、WEBP、AVIF、SVG 和 GIF 格式",
      privacyNote: "所有處理都在您的瀏覽器本機完成 - 您的圖片不會離開您的裝置"
    }
  },
  'fa-IR': {
    title: "Small.im – ابزار رایگان برای فشرده‌سازی و تبدیل تصاویر JPEG، PNG، WEBP، AVIF، SVG و GIF",
    description: "Small.im ابزار رایگانی برای فشرده‌سازی و تبدیل ایمن تصاویر JPEG، PNG، WEBP، AVIF، SVG و GIF بدون نگرانی حریم خصوصی است",
    keywords: "فشرده‌سازی تصویر, jpeg, png, webp, avif, gif, svg, فشرده کردن تصاویر, مبدل تصویر, ابزار رایگان",
    content: {
      heading: "Small.im – ابزار رایگان فشرده‌سازی تصویر",
      subheading: "تصاویر را در مرورگر خود به طور ایمن فشرده و تبدیل کنید",
      uploadText: "کلیک کنید تا انتخاب کنید یا فایل‌ها را بکشید",
      supportedFormats: "از فرمت‌های JPEG، PNG، WEBP، AVIF، SVG و GIF پشتیبانی می‌کند",
      privacyNote: "تمام پردازش به صورت محلی در مرورگر شما انجام می‌شود - تصاویر شما هرگز دستگاه شما را ترک نمی‌کنند"
    }
  }
}

// Dynamic import and render function for SSR
async function renderSSRContent(langCode) {
  try {
    // Try to import the compiled entry-server from dist first
    let render
    try {
      const distServerPath = path.resolve(__dirname, 'dist/entry-server.js')
      if (fs.existsSync(distServerPath)) {
        const module = await import(distServerPath)
        render = module.render
      } else {
        // Fallback to source file (won't work without compilation)
        throw new Error('Compiled entry-server.js not found')
      }
    } catch (importError) {
      console.log(`Could not import compiled SSR module for ${langCode}, using fallback`)
      // Return enhanced fallback content instead
      const data = languages[langCode]
      return `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:20px;border-bottom:1px solid #e8e8e8">
          <h1 style="font-size:1.5rem;font-weight:600;color:#1da565;margin:0">${langCode === 'zh-CN' ? '图小小' : langCode === 'ja-JP' ? 'Small.im' : 'Small.im'}</h1>
          <div style="font-size:0.9rem;color:#666">${langCode}</div>
        </div>
        <div style="min-height:40vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 20px">
          <div style="border:2px dashed #ccc;border-radius:8px;padding:60px 40px;text-align:center;background-color:#fafafa;max-width:600px;width:100%">
            <h2 style="font-size:1.2rem;font-weight:500;margin-bottom:16px;color:#333">${data.content.heading}</h2>
            <p style="font-size:0.9rem;color:#888;margin:0">${data.content.subheading}</p>
          </div>
        </div>
        <div style="background:#f5f5f5;padding:20px;text-align:center;border-top:1px solid #e8e8e8">
          <p style="font-size:0.9rem;color:#666;margin:0">© 2025 Small.im - Open Source Image Compression Tool</p>
        </div>
      </div>`
    }
    
    // Use the full SSR render function
    const html = await render('/', langCode)
    return html
  } catch (error) {
    console.error(`Error rendering SSR content for ${langCode}:`, error)
    
    // Enhanced fallback content
    const data = languages[langCode]
    return `<div style="min-height:60vh;display:flex;align-items:center;justify-content:center;padding:40px;text-align:center">
      <div>
        <h1 style="color:#1da565;font-size:2rem;margin-bottom:16px">${data?.content?.heading || 'Small.im'}</h1>
        <p style="color:#666;font-size:1.1rem">${data?.content?.subheading || 'Image Compression Tool'}</p>
      </div>
    </div>`
  }
}

async function buildSSRFiles() {
  const templatePath = path.resolve(__dirname, 'index.html')
  const template = fs.readFileSync(templatePath, 'utf-8')

  const distDir = path.resolve(__dirname, 'dist')
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }

  for (const [langCode, data] of Object.entries(languages)) {
    try {
      // Render full SSR content including FAQ
      const serverHtml = await renderSSRContent(langCode)

      // Create localized HTML with server-rendered content
      let localizedHTML = template
        .replace(
          /<html lang="[^"]*">/,
          `<html lang="${langCode}">`
        )
        .replace(
          /<title>.*?<\/title>/,
          `<title>${data.title}</title>`
        )
        .replace(
          /<meta name="description" content="[^"]*">/,
          `<meta name="description" content="${data.description}">`
        )
        .replace(
          '<meta name="viewport"',
          `<meta name="keywords" content="${data.keywords}">\n    <meta name="viewport"`
        )
        .replace(
          '<div id="root"></div>',
          `<div id="root">${serverHtml}</div><noscript>Please enable JavaScript to use this application.</noscript>`
        )

      // Write files
      if (langCode === 'en-US') {
        fs.writeFileSync(path.resolve(distDir, 'index.html'), localizedHTML)
        console.log(`✓ Generated index.html (${langCode}) with SSR content`)
      }
      
      const langDir = path.resolve(distDir, langCode)
      if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true })
      }
      fs.writeFileSync(path.resolve(langDir, 'index.html'), localizedHTML)
      console.log(`✓ Generated ${langCode}/index.html with SSR content`)

    } catch (error) {
      console.error(`Error generating SSR HTML for ${langCode}:`, error)
    }
  }

  console.log('\n🎉 SSR multi-language HTML generation completed!')
}

buildSSRFiles().catch(console.error)