import { LocaleData } from "@/type";
import enUS from "antd/locale/en_US";

const localeData: LocaleData = {
  antLocale: enUS,
  logo: "Small.im",
  initial: "Initializing",
  previewHelp:
    "Drag the dividing line to compare the compression effect: the left is the original image, the right is the compressed image",
  uploadCard: {
    title: "Click to select or drop files",
    subTitle: "Batch image compression tool, supports %s format",
  },
  listAction: {
    batchAppend: "Batch append",
    addFolder: "Add folder",
    clear: "Clear all",
    downloadAll: "Save all",
    downloadOne: "Save image",
    removeOne: "Remove image",
    reCompress: "Recompress",
  },
  columnTitle: {
    status: "Status",
    name: "Name",
    preview: "Preview",
    size: "Size",
    dimension: "Dimension",
    decrease: "Decrease",
    action: "Action",
    newSize: "New size",
    newDimension: "New Dimension",
  },
  optionPannel: {
    failTip: "Cannot be smaller, please adjust the parameters and try again.",
    help: "Small.im is a batch image compression application. Modifications to the options will be applied to all images.",
    resizeLable: "Resize image",
    jpegLable: "JPEG/WEBP parameters",
    pngLable: "PNG parameters",
    gifLable: "GIF parameters",
    avifLable: "AVIF parameters",
    resizePlaceholder: "Select adjustment mode",
    fitWidth: "Set width, height automatically scales",
    fitHeight: "Set height, width automatically scales",
    setShort: "Set short side, long side automatically scale",
    setLong: "Set long side, short side automatically scale",
    widthPlaceholder: "Set the width of the output image",
    heightPlaceholder: "Set the height of the output image",
    shortPlaceholder: "Set short side length of the output image",
    longPlaceholder: "Set long side length of the output image",
    resetBtn: "Reset options",
    confirmBtn: "Apply options",
    qualityTitle: "Set output image quality (0-1)",
    colorsDesc: "Set the number of output colors (2-256)",
    pngDithering: "Set dithering coefficient (0-1)",
    gifDithering: "Turn on dithering",
    avifQuality: "Set output image quality (1-100)",
    avifSpeed: "Set compression speed (1-10)",
    outputFormat: "Set output format",
    outputFormatPlaceholder: "Select output image format",
    transparentFillDesc: "Choose a transparent fill color",
  },
  error404: {
    backHome: "Back to home",
    description: "Sorry, the page you visited does not exist~",
  },
  progress: {
    before: "Before compression",
    after: "After compression",
    rate: "Decrease ratio",
  },
};

export default localeData;
