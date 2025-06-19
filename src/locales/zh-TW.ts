// 台湾繁体

import { LocaleData } from "@/type";
import zhTW from "antd/locale/zh_TW";

const localeData: LocaleData = {
  antLocale: zhTW,
  logo: "圖小小",
  initial: "初始化中",
  previewHelp: "拖曳分割線對比壓縮效果：左邊是原始圖，右邊是壓縮圖",
  uploadCard: {
    title: "選取文件到這裡，支援拖曳文件和資料夾",
    subTitle: "開源的批量圖片壓縮工具，支援 %s 格式",
  },
  listAction: {
    batchAppend: "大量新增",
    addFolder: "新增資料夾",
    clear: "清空清單",
    downloadAll: "儲存全部",
    downloadOne: "儲存圖片",
    removeOne: "移除圖片",
    reCompress: "重新壓縮",
  },
  columnTitle: {
    status: "狀態",
    name: "檔案名稱",
    preview: "預覽",
    size: "大小",
    dimension: "尺寸",
    decrease: "壓縮率",
    action: "操作",
    newSize: "新大小",
    newDimension: "新尺寸",
  },
  optionPannel: {
    failTip: "無法更小，請調整參數後重試",
    help: "Small.im 是一款大量圖片壓縮應用，對選項的修改將套用到所有圖片上",
    resizeLable: "調整圖片尺寸",
    jpegLable: "JPEG/WEBP參數",
    pngLable: "PNG參數",
    gifLable: "GIF參數",
    avifLable: "AVIF參數",
    resizePlaceholder: "選擇調整模式",
    fitWidth: "設定寬度，高度自動縮放",
    fitHeight: "設定高度，寬度自動縮放",
    setShort: "設定短邊，長邊自動縮放",
    setLong: "設定長邊，短邊自動縮放",
    setCropRatio: "裁切模式，設定裁切比例",
    setCropSize: "裁切模式，設定裁切尺寸",
    cwRatioPlaceholder: "設定寬度比例",
    chRatioPlaceholder: "設定高度比例",
    cwSizePlaceholder: "設定裁切寬度",
    chSizePlaceholder: "設定裁切高度",
    widthPlaceholder: "設定輸出圖片寬度",
    heightPlaceholder: "設定輸出圖片高度",
    shortPlaceholder: "設定輸出圖片短邊長度",
    longPlaceholder: "設定輸出圖片長邊長度",
    resetBtn: "重置選項",
    confirmBtn: "應用選項",
    qualityTitle: "設定輸出圖片品質（0-1）",
    colorsDesc: "設定輸出顏色數量（2-256）",
    pngDithering: "設定抖色係數（0-1）",
    gifDithering: "開啟抖色",
    avifQuality: "設定輸出圖片品質（1-100）",
    avifSpeed: "設定壓縮速度（1-10）",
    outputFormat: "設定輸出格式",
    outputFormatPlaceholder: "選擇輸出圖片格式",
    transparentFillDesc: "選擇透明填充色",
    cropCompareWarning: "裁切模式不支援比較預覽",
  },
  error404: {
    backHome: "返回首頁",
    description: "抱歉，你造訪的頁面不存在~",
  },
  progress: {
    before: "壓縮前",
    after: "壓縮後",
    rate: "壓縮率",
  },
  faq: {
    title: "Small.im 圖片壓縮 FAQ",
    sections: [
      {
        title: "一般問題",
        items: [
          {
            question: "什麼是 Small.im？",
            answer: "Small.im 是一個支援多種圖片格式的開源批量圖片壓縮工具。它是 PicSmaller (https://github.com/joye61/pic-smaller) 的分支，可在 https://github.com/airyland/pic-smaller 取得，並在 MIT 授權下發布。"
          },
          {
            question: "Small.im 支援哪些圖片格式？",
            answer: "Small.im 支援各種格式，包括 JPEG、WEBP、PNG、GIF 和 AVIF。"
          },
          {
            question: "使用 Small.im 處理我的圖片安全嗎？",
            answer: "是的，完全安全。所有圖片壓縮和轉換程序都在您的瀏覽器中本地執行。您的圖片永遠不會上傳到任何伺服器，確保您的資料隱私和安全。"
          }
        ]
      },
      {
        title: "使用方法",
        items: [
          {
            question: "如何將圖片上傳到 Small.im？",
            answer: "您可以透過點擊上傳區域選擇檔案，或將檔案和資料夾拖放到上面來選擇檔案。"
          },
          {
            question: "可以一次添加多張圖片嗎？",
            answer: "是的，您可以批量添加圖片或一次添加整個資料夾。"
          },
          {
            question: "如何比較原始圖片和壓縮後的圖片？",
            answer: "使用預覽功能，它允許您拖動分割線來比較原始圖片（左側）和壓縮後的圖片（右側）。"
          }
        ]
      },
      {
        title: "壓縮選項",
        items: [
          {
            question: "可以在壓縮時調整圖片大小嗎？",
            answer: "是的，您可以使用各種模式調整圖片大小：設定寬度（高度自動縮放）、設定高度（寬度自動縮放）、設定短邊（長邊自動縮放）、設定長邊（短邊自動縮放）。"
          },
          {
            question: "對於不同的圖片格式，我可以調整哪些參數？",
            answer: "您可以調整：JPEG/WEBP：輸出圖片品質（0-1），PNG：輸出顏色數量（2-256）和抖色係數（0-1），GIF：抖色選項，AVIF：輸出圖片品質（1-100）和壓縮速度（1-10）。"
          }
        ]
      },
      {
        title: "管理壓縮圖片",
        items: [
          {
            question: "如何下載我的壓縮圖片？",
            answer: "您可以下載個別圖片或一次儲存所有壓縮圖片。"
          },
          {
            question: "可以從清單中移除圖片嗎？",
            answer: "是的，您可以移除個別圖片或清除清單中的所有圖片。"
          }
        ]
      },
      {
        title: "疑難排解",
        items: [
          {
            question: "遇到 404 錯誤時該怎麼辦？",
            answer: "如果您看到 404 錯誤，表示您嘗試存取的頁面不存在。使用「返回首頁」選項回到主頁面。"
          },
          {
            question: "如何將壓縮選項重設為預設值？",
            answer: "使用「重置選項」按鈕將所有壓縮設定恢復為預設值。"
          }
        ]
      }
    ]
  },
};

export default localeData;
