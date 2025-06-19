import { LocaleData } from "@/type";
import enUS from "antd/locale/en_US";

const localeData: LocaleData = {
  antLocale: enUS,
  seo: {
    title: "Small.im – A free tool to compress and convert JPEG, PNG, WEBP, AVIF, SVG and GIF images",
    description: "Small.im is a free tool to securely compress and convert JPEG, PNG, WEBP, AVIF, SVG and GIF images with zero privacy concerns",
    keywords: "image compression, jpeg, png, webp, avif, gif, svg, compress images, image converter, free tool"
  },
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
    setCropRatio: "Crop mode, set the crop ratio",
    setCropSize: "Crop mode, set the crop size",
    cwRatioPlaceholder: "Set width ratio",
    chRatioPlaceholder: "Set height ratio",
    cwSizePlaceholder: "Set crop width",
    chSizePlaceholder: "Set crop height",
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
    cropCompareWarning: "Crop mode does not support comparison preview",
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
  faq: {
    title: "Small.im Image Compression FAQ",
    sections: [
      {
        title: "General Questions",
        items: [
          {
            question: "What is Small.im?",
            answer: "Small.im is an open-source batch image compression tool that supports multiple image formats. It is a fork of PicSmaller (https://github.com/joye61/pic-smaller), available at https://github.com/airyland/pic-smaller, and is distributed under the MIT license."
          },
          {
            question: "What image formats does Small.im support?",
            answer: "Small.im supports various formats, including JPEG, WEBP, PNG, GIF, and AVIF."
          },
          {
            question: "Is it safe to use Small.im with my images?",
            answer: "Yes, it's completely safe. All image compression and conversion processes are performed locally in your browser. Your images are never uploaded to any server, ensuring your data privacy and security."
          }
        ]
      },
      {
        title: "Usage",
        items: [
          {
            question: "How do I upload images to Small.im?",
            answer: "You can select files by clicking on the upload area or by dragging and dropping files and folders onto it."
          },
          {
            question: "Can I add multiple images at once?",
            answer: "Yes, you can batch append images or add entire folders at once."
          },
          {
            question: "How can I compare the original and compressed images?",
            answer: "Use the preview feature, which allows you to drag a dividing line to compare the original image (left side) with the compressed image (right side)."
          }
        ]
      },
      {
        title: "Compression Options",
        items: [
          {
            question: "Can I resize images during compression?",
            answer: "Yes, you can resize images using various modes: Set width (height scales automatically), Set height (width scales automatically), Set short side (long side scales automatically), Set long side (short side scales automatically)."
          },
          {
            question: "What parameters can I adjust for different image formats?",
            answer: "You can adjust: JPEG/WEBP: Output image quality (0-1), PNG: Number of output colors (2-256) and dithering coefficient (0-1), GIF: Dithering option, AVIF: Output image quality (1-100) and compression speed (1-10)."
          }
        ]
      },
      {
        title: "Managing Compressed Images",
        items: [
          {
            question: "How can I download my compressed images?",
            answer: "You can download individual images or save all compressed images at once."
          },
          {
            question: "Can I remove images from the list?",
            answer: "Yes, you can remove individual images or clear all images from the list."
          }
        ]
      },
      {
        title: "Troubleshooting",
        items: [
          {
            question: "What should I do if I encounter a 404 error?",
            answer: "If you see a 404 error, it means the page you're trying to access doesn't exist. Use the \"Back to home\" option to return to the main page."
          },
          {
            question: "How can I reset the compression options to default?",
            answer: "Use the \"Reset options\" button to restore all compression settings to their default values."
          }
        ]
      }
    ]
  },
};

export default localeData;
