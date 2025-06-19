import { LocaleData } from "@/type";
import esES from "antd/locale/es_ES";

const localeData: LocaleData = {
  antLocale: esES,
  seo: {
    title: "Small.im – Herramienta gratuita para comprimir y convertir imágenes JPEG, PNG, WEBP, AVIF, SVG y GIF",
    description: "Small.im es una herramienta gratuita para comprimir y convertir de forma segura imágenes JPEG, PNG, WEBP, AVIF, SVG y GIF sin preocupaciones de privacidad",
    keywords: "compresión de imágenes, jpeg, png, webp, avif, gif, svg, comprimir imágenes, conversor de imágenes, herramienta gratuita"
  },
  logo: "Small.im",
  initial: "Inicializando",
  previewHelp:
    "Arrastra la línea divisoria para comparar el efecto de compresión: a la izquierda es la imagen original, a la derecha es la imagen comprimida",
  uploadCard: {
    title:
      "Selecciona tus archivos aquí, tambien puedes arrastrar archivos y carpetas",
    subTitle:
      "Herramienta de compresión de imágenes por lotes de código abierto, compatible con los formatos %s",
  },
  listAction: {
    batchAppend: "Añadir imagenes",
    addFolder: "Añadir carpeta",
    clear: "Eliminar todas",
    downloadAll: "Guardar todas",
    downloadOne: "Guardar imagen",
    removeOne: "Eliminar imagen",
    reCompress: "Recomprimir",
  },
  columnTitle: {
    status: "Estado",
    name: "Nombre",
    preview: "Miniatura",
    size: "Tamaño",
    dimension: "Resolución",
    decrease: "Compresión",
    action: "Acciones",
    newSize: "Nuevo tamaño",
    newDimension: "Nueva resolución",
  },
  optionPannel: {
    failTip:
      "Imposible de reducir más el tamaño, por favor ajusta los parámetros e inténtalo de nuevo.",
    help: "Small.im es una aplicación de compresión de imágenes por lotes. Las modificaciones se aplicarán a todas las imágenes.",
    resizeLable: "Cambia el tamaño de la imagen",
    jpegLable: "Parámetros JPEG/WEBP",
    pngLable: "Parámetros PNG",
    gifLable: "Parámetros GIF",
    avifLable: "Parámetros AVIF",
    resizePlaceholder: "Selecciona el ajuste de tamaño",
    fitWidth: "Ajusta la anchura, la altura se escala automáticamente",
    fitHeight: "Ajusta la altura, la anchura se escala automáticamente",
    setShort:
      "Ajusta el lado más corto, el lado más largo se adaptará automáticamente",
    setLong:
      "Ajusta el lado más largo, el lado más corto se adaptará automáticamente",
    setCropRatio: "Modo de recorte, establecer proporción de recorte",
    setCropSize: "Modo de recorte, establecer tamaño de recorte",
    cwRatioPlaceholder: "Establecer relación de ancho",
    chRatioPlaceholder: "Establecer relación de altura",
    cwSizePlaceholder: "Establecer ancho de recorte",
    chSizePlaceholder: "Establecer altura de recorte",
    widthPlaceholder: "Ajusta la anchura de la imagen",
    heightPlaceholder: "Ajusta la altura de la imagen",
    shortPlaceholder: "Ajusta el lado mas corto de la imagen",
    longPlaceholder: "Ajusta el lado mas largo de la imagen",
    resetBtn: "Reiniciar ajustes",
    confirmBtn: "Aplicar ajustes",
    qualityTitle: "Calidad de imagen (0-1)",
    colorsDesc: "Número de colores de salida (2-256)",
    pngDithering: "Coeficiente de difuminado (0-1)",
    gifDithering: "Difuminado",
    avifQuality: "Calidad de imagen (1-100)",
    avifSpeed: "Velocidad de compresión (1-10)",
    outputFormat: "Formato de fichero",
    outputFormatPlaceholder: "Selecciona el formato de imagen",
    transparentFillDesc: "Elige un color de relleno transparente",
    cropCompareWarning:
      "El modo de recorte no admite la vista previa de comparación",
  },
  error404: {
    backHome: "Volver al inicio",
    description: "Lo siento, la página visitada no existe~",
  },
  progress: {
    before: "Antes de comprimir",
    after: "Después de comprimir",
    rate: "Índice de compresión",
  },
  faq: {
    title: "FAQ de compresión de imágenes Small.im",
    sections: [
      {
        title: "Preguntas generales",
        items: [
          {
            question: "¿Qué es Small.im?",
            answer: "Small.im es una herramienta de compresión de imágenes por lotes de código abierto que admite múltiples formatos de imagen. Es un fork de PicSmaller (https://github.com/joye61/pic-smaller), disponible en https://github.com/airyland/pic-smaller, y se distribuye bajo la licencia MIT."
          },
          {
            question: "¿Qué formatos de imagen admite Small.im?",
            answer: "Small.im admite varios formatos, incluyendo JPEG, WEBP, PNG, GIF y AVIF."
          },
          {
            question: "¿Es seguro usar Small.im con mis imágenes?",
            answer: "Sí, es completamente seguro. Todos los procesos de compresión y conversión de imágenes se realizan localmente en tu navegador. Tus imágenes nunca se cargan en ningún servidor, garantizando la privacidad y seguridad de tus datos."
          }
        ]
      },
      {
        title: "Uso",
        items: [
          {
            question: "¿Cómo subo imágenes a Small.im?",
            answer: "Puedes seleccionar archivos haciendo clic en el área de carga o arrastrando y soltando archivos y carpetas en ella."
          },
          {
            question: "¿Puedo añadir múltiples imágenes a la vez?",
            answer: "Sí, puedes añadir imágenes por lotes o agregar carpetas enteras de una vez."
          },
          {
            question: "¿Cómo puedo comparar las imágenes originales y comprimidas?",
            answer: "Usa la función de vista previa, que te permite arrastrar una línea divisoria para comparar la imagen original (lado izquierdo) con la imagen comprimida (lado derecho)."
          }
        ]
      },
      {
        title: "Opciones de compresión",
        items: [
          {
            question: "¿Puedo redimensionar imágenes durante la compresión?",
            answer: "Sí, puedes redimensionar imágenes usando varios modos: Establecer ancho (la altura se escala automáticamente), Establecer altura (el ancho se escala automáticamente), Establecer lado corto (el lado largo se escala automáticamente), Establecer lado largo (el lado corto se escala automáticamente)."
          },
          {
            question: "¿Qué parámetros puedo ajustar para diferentes formatos de imagen?",
            answer: "Puedes ajustar: JPEG/WEBP: Calidad de imagen de salida (0-1), PNG: Número de colores de salida (2-256) y coeficiente de difuminado (0-1), GIF: Opción de difuminado, AVIF: Calidad de imagen de salida (1-100) y velocidad de compresión (1-10)."
          }
        ]
      },
      {
        title: "Gestión de imágenes comprimidas",
        items: [
          {
            question: "¿Cómo puedo descargar mis imágenes comprimidas?",
            answer: "Puedes descargar imágenes individuales o guardar todas las imágenes comprimidas de una vez."
          },
          {
            question: "¿Puedo eliminar imágenes de la lista?",
            answer: "Sí, puedes eliminar imágenes individuales o limpiar todas las imágenes de la lista."
          }
        ]
      },
      {
        title: "Solución de problemas",
        items: [
          {
            question: "¿Qué debo hacer si encuentro un error 404?",
            answer: "Si ves un error 404, significa que la página a la que intentas acceder no existe. Usa la opción \"Volver al inicio\" para regresar a la página principal."
          },
          {
            question: "¿Cómo puedo restablecer las opciones de compresión a los valores predeterminados?",
            answer: "Usa el botón \"Reiniciar ajustes\" para restaurar todas las configuraciones de compresión a sus valores predeterminados."
          }
        ]
      }
    ]
  },
};

export default localeData;
