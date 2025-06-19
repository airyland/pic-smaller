import { LocaleData } from "@/type";
import zhCN from "antd/locale/zh_CN";

const localeData: LocaleData = {
  antLocale: zhCN,
  seo: {
    title: "Small.im – 免费的在线图片压缩和格式转换工具",
    description: "Small.im是一款免费的在线图片压缩工具，支持JPEG、PNG、WEBP、AVIF、SVG和GIF格式的压缩和转换，保护您的隐私安全",
    keywords: "图片压缩, 图像压缩, jpeg压缩, png压缩, webp转换, avif压缩, gif压缩, svg优化, 在线工具, 免费压缩"
  },
  logo: "Small.im",
  initial: "初始化中",
  previewHelp: "拖动分割线对比压缩效果：左边是原始图，右边是压缩图",
  uploadCard: {
    title: "选取文件到这里，支持拖拽文件和文件夹",
    subTitle: "开源的批量图片压缩工具，支持 %s 格式",
  },
  listAction: {
    batchAppend: "批量添加",
    addFolder: "添加文件夹",
    clear: "清空列表",
    downloadAll: "保存全部",
    downloadOne: "保存图片",
    removeOne: "移除图片",
    reCompress: "重新压缩",
  },
  columnTitle: {
    status: "状态",
    name: "文件名",
    preview: "预览",
    size: "大小",
    dimension: "尺寸",
    decrease: "压缩率",
    action: "操作",
    newSize: "新大小",
    newDimension: "新尺寸",
  },
  optionPannel: {
    failTip: "无法更小，请调整参数后重试",
    help: "Small.im是一款批量图片压缩应用程序，对选项的修改将应用到所有图片上",
    resizeLable: "调整图片尺寸",
    jpegLable: "JPEG/WEBP参数",
    pngLable: "PNG参数",
    gifLable: "GIF参数",
    avifLable: "AVIF参数",
    resizePlaceholder: "选择调整模式",
    fitWidth: "设置宽度，高度自动缩放",
    fitHeight: "设置高度，宽度自动缩放",
    setShort: "设置短边，长边自动缩放",
    setLong: "设置长边，短边自动缩放",
    setCropRatio: "裁剪模式，设置裁剪比例",
    setCropSize: "裁剪模式，设置裁剪尺寸",
    cwRatioPlaceholder: "设置宽度比例",
    chRatioPlaceholder: "设置高度比例",
    cwSizePlaceholder: "设置裁剪宽度",
    chSizePlaceholder: "设置裁剪高度",
    widthPlaceholder: "设置输出图片宽度",
    heightPlaceholder: "设置输出图片高度",
    shortPlaceholder: "设置输出图片短边长度",
    longPlaceholder: "设置输出图片长边长度",
    resetBtn: "重置选项",
    confirmBtn: "应用选项",
    qualityTitle: "设置输出图片质量（0-1）",
    colorsDesc: "设置输出颜色数量（2-256）",
    pngDithering: "设置抖色系数（0-1）",
    gifDithering: "开启抖色",
    avifQuality: "设置输出图片质量（1-100）",
    avifSpeed: "设置压缩速度（1-10）",
    outputFormat: "设置输出格式",
    outputFormatPlaceholder: "选择输出图片格式",
    transparentFillDesc: "选择透明填充色",
    cropCompareWarning: "裁剪模式不支持对比预览",
  },
  error404: {
    backHome: "返回首页",
    description: "抱歉，你访问的页面不存在~",
  },
  progress: {
    before: "压缩前",
    after: "压缩后",
    rate: "压缩率",
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
      },
      {
        title: "压缩选项",
        items: [
          {
            question: "可以在压缩时调整图片尺寸吗？",
            answer: "是的，您可以使用多种模式调整图片尺寸：设置宽度（高度自动缩放）、设置高度（宽度自动缩放）、设置短边（长边自动缩放）、设置长边（短边自动缩放）。"
          },
          {
            question: "不同图片格式可以调整哪些参数？",
            answer: "您可以调整：JPEG/WEBP：输出图片质量（0-1）、PNG：输出颜色数量（2-256）和抖色系数（0-1）、GIF：抖色选项、AVIF：输出图片质量（1-100）和压缩速度（1-10）。"
          }
        ]
      },
      {
        title: "管理压缩后的图片",
        items: [
          {
            question: "如何下载压缩后的图片？",
            answer: "您可以下载单张图片或一次保存所有压缩后的图片。"
          },
          {
            question: "可以从列表中移除图片吗？",
            answer: "是的，您可以移除单张图片或清空列表中的所有图片。"
          }
        ]
      },
      {
        title: "故障排除",
        items: [
          {
            question: "遇到404错误时应该怎么办？",
            answer: "如果您看到404错误，说明您尝试访问的页面不存在。使用\"返回首页\"选项回到主页面。"
          },
          {
            question: "如何将压缩选项重置为默认值？",
            answer: "使用\"重置选项\"按钮将所有压缩设置恢复为默认值。"
          }
        ]
      }
    ]
  },
};

export default localeData;
