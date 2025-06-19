import { LocaleData } from "@/type";
import trTR from "antd/locale/tr_TR";

const localeData: LocaleData = {
  antLocale: trTR,
  seo: {
    title: "Small.im – JPEG, PNG, WEBP, AVIF, SVG ve GIF görüntülerini sıkıştırmak ve dönüştürmek için ücretsiz araç",
    description: "Small.im, gizlilik endişesi olmadan JPEG, PNG, WEBP, AVIF, SVG ve GIF görüntülerini güvenli bir şekilde sıkıştırmak ve dönüştürmek için ücretsiz bir araçtır",
    keywords: "görüntü sıkıştırma, jpeg, png, webp, avif, gif, svg, görüntü sıkıştırıcı, görüntü dönüştürücü, ücretsiz araç"
  },
  logo: "Small.im",
  initial: "Başlatılıyor",
  previewHelp:
    "Sıkıştırma etkisini karşılaştırmak için bölme çizgisini sürükleyin: soldaki orijinal görüntü, sağdaki sıkıştırılmış görüntü",
  uploadCard: {
    title: "Dosyaları buradan seçin, dosya ve klasör sürüklemeyi destekler",
    subTitle:
      "Açık kaynaklı toplu resim sıkıştırma aracı, %s formatını destekler",
  },
  listAction: {
    batchAppend: "Toplu ekle",
    addFolder: "Klasör ekle",
    clear: "Hepsini temizle",
    downloadAll: "Hepsini İndir",
    downloadOne: "İndir",
    removeOne: "Sil",
    reCompress: "Yeniden sıkıştır",
  },
  columnTitle: {
    status: "Durum",
    name: "İsim",
    preview: "Önizleme",
    size: "Boyut",
    dimension: "Boyut",
    decrease: "Sıkıştır",
    action: "Eylem",
    newSize: "Yeni boyut",
    newDimension: "Yeni boyutlar",
  },
  optionPannel: {
    failTip:
      "Daha küçük olamaz, lütfen parametreleri ayarlayın ve tekrar deneyin.",
    help: "Small.im, toplu resim sıkıştırma uygulamasıdır. Seçeneklerde yapılan değişiklikler tüm resimlere uygulanacaktır.",
    resizeLable: "Görüntüyü yeniden boyutlandır",
    jpegLable: "JPEG/WEBP parametreleri",
    pngLable: "PNG parametreleri",
    gifLable: "GIF parametreleri",
    avifLable: "AVIF parametreleri",
    resizePlaceholder: "Ayarlama modunu seçin",
    fitWidth: "Genişliği ayarla, yükseklik otomatik ayarlanır",
    fitHeight: "Yüksekliği ayarla, genişlik otomatik ayarlanır",
    setShort: "Kısa kenarı ayarla, uzun kenar otomatik ayarlanır",
    setLong: "Uzun kenarı ayarla, kısa kenar otomatik ayarlanır",
    setCropRatio: "Kırpma modu, kırpma oranını ayarlayın",
    setCropSize: "Kırpma modu, kırpma boyutunu ayarla",
    cwRatioPlaceholder: "Genişlik oranını ayarla",
    chRatioPlaceholder: "Yükseklik oranını ayarla",
    cwSizePlaceholder: "Kırpma genişliğini ayarla",
    chSizePlaceholder: "Kırpma yüksekliğini ayarla",
    widthPlaceholder: "Çıktının genişliğini ayarlayın",
    heightPlaceholder: "Çıktının yüksekliğini ayarlayın",
    shortPlaceholder: "Çıktının kısa kenar uzunluğunu ayarlayın",
    longPlaceholder: "Çıktının uzun kenar uzunluğunu ayarlayın",
    resetBtn: "Seçenekleri sıfırla",
    confirmBtn: "Seçenekleri uygula",
    qualityTitle: "Çıktının kalitesini ayarla (0-1)",
    colorsDesc: "Çıktınun renk sayısını ayarla (2-256)",
    pngDithering: "Dithering katsayısını ayarla (0-1)",
    gifDithering: "Dithering'i aç",
    avifQuality: "Çıktının kalitesini ayarla (1-100)",
    avifSpeed: "Sıkıştırma hızını ayarla (1-10)",
    outputFormat: "Çıktı formatını ayarla",
    outputFormatPlaceholder: "Çıktı formatını seçin",
    transparentFillDesc: "Şeffaflık rengini seçin",
    cropCompareWarning: "Kırpma modu karşılaştırma önizlemesini desteklemiyor",
  },
  error404: {
    backHome: "Ana sayfaya dön",
    description: "Üzgünüz, ziyaret ettiğiniz sayfa mevcut değil~",
  },
  progress: {
    before: "Sıkıştırmadan önce",
    after: "Sıkıştırmadan sonra",
    rate: "Sıkıştırma oranı",
  },
  faq: {
    title: "Small.im Görüntü Sıkıştırma SSS",
    sections: [
      {
        title: "Genel Sorular",
        items: [
          {
            question: "Small.im nedir?",
            answer: "Small.im, birden fazla görüntü formatını destekleyen açık kaynaklı toplu görüntü sıkıştırma aracıdır. PicSmaller (https://github.com/joye61/pic-smaller) projesinin bir çatalı olup, https://github.com/airyland/pic-smaller adresinde mevcuttur ve MIT lisansı altında dağıtılmaktadır."
          },
          {
            question: "Small.im hangi görüntü formatlarını destekler?",
            answer: "Small.im JPEG, WEBP, PNG, GIF ve AVIF dahil olmak üzere çeşitli formatları destekler."
          },
          {
            question: "Small.im ile görüntülerimi kullanmak güvenli mi?",
            answer: "Evet, tamamen güvenlidir. Tüm görüntü sıkıştırma ve dönüştürme işlemleri tarayıcınızda yerel olarak gerçekleştirilir. Görüntüleriniz hiçbir zaman sunucuya yüklenmez, veri gizliliğiniz ve güvenliğiniz sağlanır."
          }
        ]
      },
      {
        title: "Kullanım",
        items: [
          {
            question: "Small.im'e görüntüleri nasıl yüklerim?",
            answer: "Yükleme alanına tıklayarak dosyaları seçebilir veya dosya ve klasörleri sürükleyip bırakarak seçebilirsiniz."
          },
          {
            question: "Aynı anda birden fazla görüntü ekleyebilir miyim?",
            answer: "Evet, görüntüleri toplu olarak ekleyebilir veya tüm klasörleri bir seferde ekleyebilirsiniz."
          },
          {
            question: "Orijinal ve sıkıştırılmış görüntüleri nasıl karşılaştırabilirim?",
            answer: "Önizleme özelliğini kullanın; bu, orijinal görüntüyü (sol taraf) ile sıkıştırılmış görüntüyü (sağ taraf) karşılaştırmak için bölme çizgisini sürüklemenize olanak tanır."
          }
        ]
      },
      {
        title: "Sıkıştırma Seçenekleri",
        items: [
          {
            question: "Sıkıştırma sırasında görüntüleri yeniden boyutlandırabilir miyim?",
            answer: "Evet, çeşitli modları kullanarak görüntüleri yeniden boyutlandırabilirsiniz: Genişlik ayarla (yükseklik otomatik ölçeklenir), Yükseklik ayarla (genişlik otomatik ölçeklenir), Kısa kenar ayarla (uzun kenar otomatik ölçeklenir), Uzun kenar ayarla (kısa kenar otomatik ölçeklenir)."
          },
          {
            question: "Farklı görüntü formatları için hangi parametreleri ayarlayabilirim?",
            answer: "Ayarlayabileceğiniz parametreler: JPEG/WEBP: Çıktı görüntü kalitesi (0-1), PNG: Çıktı renk sayısı (2-256) ve dithering katsayısı (0-1), GIF: Dithering seçeneği, AVIF: Çıktı görüntü kalitesi (1-100) ve sıkıştırma hızı (1-10)."
          }
        ]
      },
      {
        title: "Sıkıştırılmış Görüntüleri Yönetme",
        items: [
          {
            question: "Sıkıştırılmış görüntülerimi nasıl indirebilirim?",
            answer: "Tek tek görüntüleri indirebilir veya tüm sıkıştırılmış görüntüleri bir seferde kaydedebilirsiniz."
          },
          {
            question: "Listeden görüntüleri kaldırabilir miyim?",
            answer: "Evet, tek tek görüntüleri kaldırabilir veya listeden tüm görüntüleri temizleyebilirsiniz."
          }
        ]
      },
      {
        title: "Sorun Giderme",
        items: [
          {
            question: "404 hatası ile karşılaştığımda ne yapmalıyım?",
            answer: "404 hatası görürseniz, erişmeye çalıştığınız sayfanın mevcut olmadığı anlamına gelir. Ana sayfaya dönmek için \"Ana sayfaya dön\" seçeneğini kullanın."
          },
          {
            question: "Sıkıştırma seçeneklerini varsayılan değerlere nasıl sıfırlarım?",
            answer: "Tüm sıkıştırma ayarlarını varsayılan değerlerine geri yüklemek için \"Seçenekleri sıfırla\" düğmesini kullanın."
          }
        ]
      }
    ]
  },
};

export default localeData;
