import { Locale } from "antd/es/locale";

export interface LocaleData {
  antLocale: Locale;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  logo: string;
  initial: string;
  previewHelp: string;
  error404: {
    backHome: string;
    description: string;
  };
  uploadCard: {
    title: string;
    subTitle: string;
  };
  listAction: {
    batchAppend: string;
    addFolder: string;
    clear: string;
    downloadAll: string;
    downloadOne: string;
    removeOne: string;
    reCompress: string;
  };
  columnTitle: {
    status: string;
    name: string;
    preview: string;
    size: string;
    newSize: string;
    dimension: string;
    newDimension: string;
    decrease: string;
    action: string;
  };
  optionPannel: {
    resizeLable: string;
    jpegLable: string;
    pngLable: string;
    gifLable: string;
    avifLable: string;
    avifQuality: string;
    avifSpeed: string;
    help: string;
    failTip: string;
    resizePlaceholder: string;
    fitWidth: string;
    fitHeight: string;
    setShort: string;
    setLong: string;
    setCropRatio: string;
    setCropSize: string;
    widthPlaceholder: string;
    heightPlaceholder: string;
    shortPlaceholder: string;
    longPlaceholder: string;
    cwRatioPlaceholder: string;
    chRatioPlaceholder: string;
    cwSizePlaceholder: string;
    chSizePlaceholder: string;
    cropCompareWarning: string;
    qualityTitle: string;
    resetBtn: string;
    confirmBtn: string;
    colorsDesc: string;
    pngDithering: string;
    gifDithering: string;
    outputFormat: string;
    outputFormatPlaceholder: string;
    transparentFillDesc: string;
  };
  progress: {
    before: string;
    after: string;
    rate: string;
  };
  faq: {
    title: string;
    sections: Array<{
      title: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    }>;
  };
}
