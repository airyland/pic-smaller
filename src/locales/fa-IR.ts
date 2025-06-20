import { LocaleData } from "@/type";
import faIR from "antd/locale/fa_IR";

const localeData: LocaleData = {
  antLocale: faIR,
  seo: {
    title: "Small.im – ابزار رایگان فشرده‌سازی و تبدیل تصاویر JPEG، PNG، WEBP، AVIF، SVG و GIF",
    description: "Small.im ابزاری رایگان برای فشرده‌سازی و تبدیل امن تصاویر JPEG، PNG، WEBP، AVIF، SVG و GIF بدون هیچ نگرانی حریم خصوصی است",
    keywords: "فشرده‌سازی تصاویر, jpeg, png, webp, avif, gif, svg, فشرده کننده تصاویر, مبدل تصاویر, ابزار رایگان"
  },
  logo: "پیک کوچولو",
  initial: "در حال راه‌اندازی",
  previewHelp:
    "خط تقسیم را برای مقایسه اثر فشرده سازی بکشید: سمت چپ تصویر اصلی و سمت راست تصویر فشرده است",
  uploadCard: {
    title:
      "فایل‌ها را اینجا انتخاب کنید (پشتیبانی از روش کشیدن و انداختن فایل‌ها و پوشه‌ها)",
    subTitle: "ابزار فشرده‌سازی هوشمند دسته‌ای تصاویر، پشتیبانی از فرمت‌های %s",
  },
  listAction: {
    batchAppend: "افزودن دسته‌ای",
    addFolder: "افزودن پوشه",
    clear: "پاک کردن همه",
    downloadAll: "ذخیره همه",
    downloadOne: "بارگذاری تصویر",
    removeOne: "پاک کردن تصویر",
    reCompress: "فشرده‌سازی مجدد",
  },
  columnTitle: {
    status: "وضعیت",
    name: "نام",
    preview: "پیش‌نمایش",
    size: "اندازه",
    dimension: "ابعاد",
    decrease: "کاهش",
    action: "عملیات",
    newSize: "اندازه جدید",
    newDimension: "ابعاد جدید",
  },
  optionPannel: {
    failTip:
      "کوچکتر از این نمی‌شود! لطفا پارامترها را تغییر دهید و دوباره امتحان کنید",
    help: "پیک کوچولو یک برنامه فشرده‌سازی دسته‌ای تصاویر است. تغییرات در گزینه‌ها به همه تصاویر اعمال خواهد شد.",
    resizeLable: "تغییر اندازه تصویر",
    jpegLable: "پارامترهای JPEG/WEBP",
    pngLable: "پارامترهای PNG",
    gifLable: "پارامترهای GIF",
    avifLable: "پارامترهای AVIF",
    resizePlaceholder: "حالت تنظیم را انتخاب کنید",
    fitWidth: "تنظیم عرض، ارتفاع به طور خودکار مقیاس می‌شود",
    fitHeight: "تنظیم ارتفاع، عرض به طور خودکار مقیاس می‌شود",
    setShort: "تنظیم ضلع کوتاه، ضلع بلند به طور خودکار مقیاس می‌شود",
    setLong: "تنظیم ضلع بلند، ضلع کوتاه به طور خودکار مقیاس می‌شود",
    setCropRatio: "حالت برش، نسبت برش را تنظیم کنید",
    setCropSize: "حالت برش، اندازه برش را تنظیم کنید",
    cwRatioPlaceholder: "نسبت عرض را تنظیم کنید",
    chRatioPlaceholder: "نسبت ارتفاع را تنظیم کنید",
    cwSizePlaceholder: "عرض برش را تنظیم کنید",
    chSizePlaceholder: "ارتفاع برش را تنظیم کنید",
    widthPlaceholder: "عرض تصویر خروجی را تنظیم کنید",
    heightPlaceholder: "ارتفاع تصویر خروجی را تنظیم کنید",
    shortPlaceholder: "طول ضلع کوتاه تصویر خروجی را تنظیم کنید",
    longPlaceholder: "طول ضلع بلند تصویر خروجی را تنظیم کنید",
    resetBtn: "بازنشانی گزینه‌ها",
    confirmBtn: "اعمال گزینه‌ها",
    qualityTitle: "تنظیم کیفیت تصویر خروجی (0-1)",
    colorsDesc: "تنظیم تعداد رنگ‌های خروجی (2-256)",
    pngDithering: "تنظیم ضریب دانه‌بندی (0-1)",
    gifDithering: "فعال کردن دانه‌بندی",
    avifQuality: "تنظیم کیفیت تصویر خروجی (1-100)",
    avifSpeed: "تنظیم سرعت فشرده‌سازی (1-10)",
    outputFormat: "تنظیم فرمت خروجی",
    outputFormatPlaceholder: "فرمت تصویر خروجی را انتخاب کنید",
    transparentFillDesc: "انتخاب رنگ شفاف",
    cropCompareWarning: "حالت برش از پیش‌نمایش مقایسه پشتیبانی نمی‌کند",
  },
  error404: {
    backHome: "بازگشت به خانه",
    description: "متاسفانه صفحه‌ای که بازدید کردید وجود ندارد",
  },
  progress: {
    before: "قبل از فشرده‌سازی",
    after: "بعد از فشرده‌سازی",
    rate: "نسبت کاهش",
  },
  faq: {
    title: "سوالات متداول فشرده‌سازی تصاویر Small.im",
    sections: [
      {
        title: "سوالات عمومی",
        items: [
          {
            question: "Small.im چیست؟",
            answer: "Small.im یک ابزار فشرده‌سازی دسته‌ای تصاویر متن باز است که از چندین فرمت تصویری پشتیبانی می‌کند. این ابزار یک فورک از PicSmaller (https://github.com/joye61/pic-smaller) است که در https://github.com/airyland/pic-smaller در دسترس بوده و تحت مجوز MIT توزیع می‌شود."
          },
          {
            question: "Small.im از چه فرمت‌های تصویری پشتیبانی می‌کند؟",
            answer: "Small.im از فرمت‌های مختلفی شامل JPEG، WEBP، PNG، GIF و AVIF پشتیبانی می‌کند."
          },
          {
            question: "آیا استفاده از Small.im برای تصاویرم امن است؟",
            answer: "بله، کاملاً امن است. تمام فرآیندهای فشرده‌سازی و تبدیل تصاویر به صورت محلی در مرورگر شما انجام می‌شود. تصاویر شما هرگز به هیچ سروری آپلود نمی‌شوند و حریم خصوصی و امنیت داده‌هایتان تضمین می‌شود."
          }
        ]
      },
      {
        title: "نحوه استفاده",
        items: [
          {
            question: "چگونه تصاویر را به Small.im آپلود کنم؟",
            answer: "می‌توانید با کلیک بر روی ناحیه آپلود فایل‌ها را انتخاب کنید یا فایل‌ها و پوشه‌ها را به آن بکشید و رها کنید."
          },
          {
            question: "آیا می‌توانم چندین تصویر را همزمان اضافه کنم؟",
            answer: "بله، می‌توانید تصاویر را به صورت دسته‌ای اضافه کنید یا کل پوشه‌ها را یکجا اضافه کنید."
          },
          {
            question: "چگونه می‌توانم تصاویر اصلی و فشرده شده را مقایسه کنم؟",
            answer: "از ویژگی پیش‌نمایش استفاده کنید که به شما امکان کشیدن خط تقسیم برای مقایسه تصویر اصلی (سمت چپ) با تصویر فشرده شده (سمت راست) را می‌دهد."
          }
        ]
      },
      {
        title: "گزینه‌های فشرده‌سازی",
        items: [
          {
            question: "آیا می‌توانم در هنگام فشرده‌سازی اندازه تصاویر را تغییر دهم؟",
            answer: "بله، می‌توانید با استفاده از حالت‌های مختلف اندازه تصاویر را تغییر دهید: تنظیم عرض (ارتفاع به طور خودکار مقیاس می‌شود)، تنظیم ارتفاع (عرض به طور خودکار مقیاس می‌شود)، تنظیم ضلع کوتاه (ضلع بلند به طور خودکار مقیاس می‌شود)، تنظیم ضلع بلند (ضلع کوتاه به طور خودکار مقیاس می‌شود)."
          },
          {
            question: "برای فرمت‌های مختلف تصویری چه پارامترهایی را می‌توانم تنظیم کنم؟",
            answer: "می‌توانید تنظیم کنید: JPEG/WEBP: کیفیت تصویر خروجی (0-1)، PNG: تعداد رنگ‌های خروجی (2-256) و ضریب دانه‌بندی (0-1)، GIF: گزینه دانه‌بندی، AVIF: کیفیت تصویر خروجی (1-100) و سرعت فشرده‌سازی (1-10)."
          }
        ]
      },
      {
        title: "مدیریت تصاویر فشرده شده",
        items: [
          {
            question: "چگونه می‌توانم تصاویر فشرده شده‌ام را دانلود کنم؟",
            answer: "می‌توانید تصاویر را به صورت جداگانه دانلود کنید یا همه تصاویر فشرده شده را یکجا ذخیره کنید."
          },
          {
            question: "آیا می‌توانم تصاویر را از لیست حذف کنم؟",
            answer: "بله، می‌توانید تصاویر را به صورت جداگانه حذف کنید یا همه تصاویر را از لیست پاک کنید."
          }
        ]
      },
      {
        title: "عیب‌یابی",
        items: [
          {
            question: "اگر با خطای 404 مواجه شدم چه کار کنم؟",
            answer: "اگر خطای 404 را می‌بینید، به این معنی است که صفحه‌ای که سعی در دسترسی به آن دارید وجود ندارد. از گزینه «بازگشت به خانه» برای بازگشت به صفحه اصلی استفاده کنید."
          },
          {
            question: "چگونه گزینه‌های فشرده‌سازی را به حالت پیش‌فرض بازنشانی کنم؟",
            answer: "از دکمه «بازنشانی گزینه‌ها» برای بازگرداندن همه تنظیمات فشرده‌سازی به مقادیر پیش‌فرض استفاده کنید."
          }
        ]
      }
    ]
  },
};

export default localeData;
