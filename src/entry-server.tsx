import ReactDOMServer from 'react-dom/server'

// 完整的多语言数据，包含 FAQ
const localeDataMap: { [key: string]: any } = {
  'en-US': {
    logo: "Small.im",
    uploadCard: {
      title: "Select files here, supports drag and drop files and folders",
      subTitle: "Open source batch image compression tool, supports %s formats"
    },
    faq: {
      title: "Small.im Image Compression FAQ",
      sections: [
        {
          title: "General Questions",
          items: [
            {
              question: "What is Small.im?",
              answer: "Small.im is an open-source batch image compression tool that supports multiple image formats. It's a fork of PicSmaller (https://github.com/joye61/pic-smaller), available at https://github.com/airyland/pic-smaller, distributed under the MIT license."
            },
            {
              question: "What image formats does Small.im support?",
              answer: "Small.im supports multiple formats including JPEG, WEBP, PNG, GIF, and AVIF."
            },
            {
              question: "Is it safe to use Small.im for processing my images?",
              answer: "Yes, it's completely safe. All image compression and conversion processes are executed locally in your browser. Your images are not uploaded to any server, ensuring your data privacy and security."
            }
          ]
        },
        {
          title: "How to Use",
          items: [
            {
              question: "How do I upload images to Small.im?",
              answer: "You can upload images by clicking the upload area to select files, or by dragging and dropping files and folders into the upload area."
            },
            {
              question: "Can I add multiple images at once?",
              answer: "Yes, you can batch add images or add entire folders at once."
            },
            {
              question: "How do I compare original and compressed images?",
              answer: "Use the preview feature where you can drag the divider to compare the original image (left side) with the compressed image (right side)."
            }
          ]
        }
      ]
    }
  },
  'zh-CN': {
    logo: "Small.im",
    uploadCard: {
      title: "选取文件到这里，支持拖拽文件和文件夹",
      subTitle: "开源的批量图片压缩工具，支持 %s 格式"
    },
    faq: {
      title: "Small.im图片压缩常见问题",
      sections: [
        {
          title: "常规问题",
          items: [
            {
              question: "什么是Small.im？",
              answer: "Small.im是一个开源的批量图片压缩工具，支持多种图片格式。它是 PicSmaller (https://github.com/joye61/pic-smaller) 的分支，可在 https://github.com/airyland/pic-smaller 获取，采用 MIT 许可证分发。"
            },
            {
              question: "Small.im支持哪些图片格式？",
              answer: "Small.im支持多种格式，包括 JPEG、WEBP、PNG、GIF 和 AVIF。"
            },
            {
              question: "使用Small.im处理我的图片安全吗？",
              answer: "是的，完全安全。所有图片压缩和转换过程都在您的浏览器本地执行。您的图片不会上传到任何服务器，确保您的数据隐私和安全。"
            }
          ]
        },
        {
          title: "使用方法", 
          items: [
            {
              question: "如何向Small.im上传图片？",
              answer: "您可以通过点击上传区域选择文件，或将文件和文件夹拖放到上传区域。"
            },
            {
              question: "可以一次添加多张图片吗？",
              answer: "是的，您可以批量添加图片或一次添加整个文件夹。"
            },
            {
              question: "如何比较原始图片和压缩后的图片？",
              answer: "使用预览功能，您可以拖动分割线来比较原始图片（左侧）和压缩后的图片（右侧）。"
            }
          ]
        }
      ]
    }
  },
  'ja-JP': {
    logo: "Small.im",
    uploadCard: {
      title: "ファイルをここに選択してください。ファイルとフォルダのドラッグ＆ドロップをサポート",
      subTitle: "オープンソースのバッチ画像圧縮ツール、%s形式をサポート"
    },
    faq: {
      title: "Small.im画像圧縮よくある質問",
      sections: [
        {
          title: "一般的な質問",
          items: [
            {
              question: "Small.imとは何ですか？",
              answer: "Small.imは、複数の画像形式をサポートするオープンソースのバッチ画像圧縮ツールです。PicSmaller (https://github.com/joye61/pic-smaller) のフォークで、https://github.com/airyland/pic-smaller で入手でき、MITライセンスの下で配布されています。"
            },
            {
              question: "Small.imはどの画像形式をサポートしていますか？",
              answer: "Small.imは、JPEG、WEBP、PNG、GIF、AVIFを含む複数の形式をサポートしています。"
            },
            {
              question: "画像処理にSmall.imを使用するのは安全ですか？",
              answer: "はい、完全に安全です。すべての画像圧縮と変換プロセスは、ブラウザ内でローカルに実行されます。画像はサーバーにアップロードされないため、データのプライバシーとセキュリティが確保されます。"
            }
          ]
        }
      ]
    }
  },
  'ko-KR': {
    logo: "Small.im",
    uploadCard: {
      title: "여기에 파일을 선택하세요. 파일 및 폴더 드래그 앤 드롭 지원",
      subTitle: "오픈 소스 배치 이미지 압축 도구, %s 형식 지원"
    },
    faq: {
      title: "Small.im 이미지 압축 자주 묻는 질문",
      sections: [
        {
          title: "일반적인 질문",
          items: [
            {
              question: "Small.im이 무엇인가요?",
              answer: "Small.im은 여러 이미지 형식을 지원하는 오픈 소스 배치 이미지 압축 도구입니다. PicSmaller (https://github.com/joye61/pic-smaller)의 포크로, https://github.com/airyland/pic-smaller에서 구할 수 있으며, MIT 라이선스 하에 배포됩니다."
            },
            {
              question: "Small.im은 어떤 이미지 형식을 지원하나요?",
              answer: "Small.im은 JPEG, WEBP, PNG, GIF, AVIF를 포함한 여러 형식을 지원합니다."
            },
            {
              question: "이미지 처리에 Small.im을 사용하는 것이 안전한가요?",
              answer: "네, 완전히 안전합니다. 모든 이미지 압축 및 변환 프로세스는 브라우저에서 로컬로 실행됩니다. 이미지가 서버에 업로드되지 않아 데이터 개인정보와 보안이 보장됩니다."
            }
          ]
        }
      ]
    }
  }
}

// SSR App component with full content including FAQ
function SSRApp({ lang }: { lang: string }) {
  const localeData = localeDataMap[lang] || localeDataMap['en-US']
  
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        borderBottom: '1px solid #e8e8e8'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#1da565',
          margin: 0
        }}>
          {localeData.logo}
        </h1>
        <div style={{
          fontSize: '0.9rem',
          color: '#666'
        }}>
          {lang}
        </div>
      </div>

      {/* Upload Area */}
      <div style={{
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}>
        <div style={{
          border: '2px dashed #ccc',
          borderRadius: '8px',
          padding: '60px 40px',
          textAlign: 'center',
          backgroundColor: '#fafafa',
          maxWidth: '600px',
          width: '100%'
        }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 500,
            marginBottom: '16px',
            color: '#333'
          }}>
            {localeData.uploadCard.title}
          </h2>
          <p style={{
            fontSize: '0.9rem',
            color: '#888',
            margin: 0
          }}>
            {localeData.uploadCard.subTitle.replace('%s', 'JPEG, PNG, WEBP, AVIF, SVG, GIF')}
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 600,
          color: '#333',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          {localeData.faq.title}
        </h1>

        {localeData.faq.sections.map((section: any, sectionIndex: number) => (
          <div key={sectionIndex} style={{
            marginBottom: '40px'
          }}>
            <h2 style={{
              fontSize: '1.4rem',
              fontWeight: 500,
              color: '#1da565',
              marginBottom: '20px',
              borderBottom: '2px solid #1da565',
              paddingBottom: '10px'
            }}>
              {section.title}
            </h2>
            
            <div style={{
              background: '#f9f9f9',
              borderRadius: '8px',
              padding: '20px'
            }}>
              {section.items.map((item: any, itemIndex: number) => (
                <div key={itemIndex} style={{
                  marginBottom: itemIndex < section.items.length - 1 ? '24px' : '0',
                  paddingBottom: itemIndex < section.items.length - 1 ? '24px' : '0',
                  borderBottom: itemIndex < section.items.length - 1 ? '1px solid #e8e8e8' : 'none'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: '#333',
                    marginBottom: '8px',
                    cursor: 'pointer'
                  }}>
                    {item.question}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#666',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        background: '#f5f5f5',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #e8e8e8'
      }}>
        <p style={{
          fontSize: '0.9rem',
          color: '#666',
          margin: 0
        }}>
          © 2025 {localeData.logo} - Open Source Image Compression Tool
        </p>
      </div>
    </div>
  )
}

// SSR render function with proper signature
export async function render(_url: string, lang: string) {
  const html = ReactDOMServer.renderToString(
    <SSRApp lang={lang} />
  )
  
  return html
}