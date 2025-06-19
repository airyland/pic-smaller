import { LocaleData } from "@/type";
import frFR from "antd/locale/fr_FR";

const localeData: LocaleData = {
  antLocale: frFR,
  seo: {
    title: "Small.im – Outil gratuit de compression et conversion d'images JPEG, PNG, WEBP, AVIF, SVG et GIF",
    description: "Small.im est un outil gratuit pour compresser et convertir en toute sécurité les images JPEG, PNG, WEBP, AVIF, SVG et GIF sans aucune préoccupation de confidentialité",
    keywords: "compression d'images, jpeg, png, webp, avif, gif, svg, compresser images, convertisseur d'images, outil gratuit"
  },
  logo: "Small.im",
  initial: "Initialisation",
  previewHelp:
    "Faites glisser la ligne de séparation pour comparer l'effet de compression : l'image de gauche est l'image originale, celle de droite est l'image compressée",
  uploadCard: {
    title: "Selectionnez ou glissez-déposez vos fichiers et dossiers ici",
    subTitle:
      "Outil open source de compression d'images par lot, prend en charge les formats %s",
  },
  listAction: {
    batchAppend: "Ajouter des fichiers",
    addFolder: "Ajouter dossier",
    clear: "Tout retirer",
    downloadAll: "Tout sauvegarder",
    downloadOne: "Sauvegarder l'image",
    removeOne: "Retirer l'image",
    reCompress: "Relancer compression",
  },
  columnTitle: {
    status: "Status",
    name: "Nom",
    preview: "Aperçu",
    size: "Taille",
    dimension: "Dimensions",
    decrease: "Réduction",
    action: "Action",
    newSize: "Nouvelle taille",
    newDimension: "Nouvelles dimensions",
  },
  optionPannel: {
    failTip:
      "Impossible de réduire la taille, veuillez ajuster les paramètres et réessayer.",
    help: "Small.im est une application de compression d'images par lot. Les modifications apportées aux options seront appliquées à toutes les images.",
    resizeLable: "Redimensionner l'image",
    jpegLable: "Paramètres JPEG/WEBP",
    pngLable: "Paramètres PNG",
    gifLable: "Paramètres GIF",
    avifLable: "Paramètres AVIF",
    resizePlaceholder: "Sélectionner le mode d'ajustement",
    fitWidth: "Régler la largeur, la hauteur s'ajuste automatiquement",
    fitHeight: "Régler la hauteur, la largeur s'ajuste automatiquement",
    setShort: "Régler le petit côté, le long côté s'ajuste automatiquement",
    setLong: "Régler le long côté, le petit côté s'ajuste automatiquement",
    setCropRatio: "Mode de recadrage, définir le rapport de recadrage",
    setCropSize: "Mode recadrage, définir la taille du recadrage",
    cwRatioPlaceholder: "Définir le rapport de largeur",
    chRatioPlaceholder: "Définir le rapport de hauteur",
    cwSizePlaceholder: "Définir la largeur du recadrage",
    chSizePlaceholder: "Définir la hauteur de recadrage",
    widthPlaceholder: "Largeur de l'image de sortie",
    heightPlaceholder: "Hauteur de l'image de sortie",
    shortPlaceholder: "Longueur du petit côté de l'image de sortie",
    longPlaceholder: "Longueur du côté long de l'image de sortie",
    resetBtn: "Réinitialiser",
    confirmBtn: "Appliquer",
    qualityTitle: "Qualité de l'image de sortie (0-1)",
    colorsDesc: "Nombre de couleurs de sortie (2-256)",
    pngDithering: "Coefficient de tramage (0-1)",
    gifDithering: "Activer le tramage",
    avifQuality: "Qualité de l'image de sortie (1-100)",
    avifSpeed: "Vitesse de compression (1-10)",
    outputFormat: "Format de sortie",
    outputFormatPlaceholder: "Format de l'image de sortie",
    transparentFillDesc: "Couleur de remplissage transparente",
    cropCompareWarning:
      "Le mode Recadrage ne prend pas en charge l'aperçu de comparaison",
  },
  error404: {
    backHome: "Retour à l'accueil",
    description: "Désolé, la page que vous avez visitée n'existe pas~",
  },
  progress: {
    before: "Avant compression",
    after: "Après compression",
    rate: "Taux de diminution",
  },
  faq: {
    title: "FAQ de compression d'images Small.im",
    sections: [
      {
        title: "Questions générales",
        items: [
          {
            question: "Qu'est-ce que Small.im ?",
            answer: "Small.im est un outil de compression d'images par lots open source qui prend en charge plusieurs formats d'image. Il s'agit d'un fork de PicSmaller (https://github.com/joye61/pic-smaller), disponible sur https://github.com/airyland/pic-smaller, et distribué sous licence MIT."
          },
          {
            question: "Quels formats d'image Small.im prend-il en charge ?",
            answer: "Small.im prend en charge divers formats, notamment JPEG, WEBP, PNG, GIF et AVIF."
          },
          {
            question: "Est-il sûr d'utiliser Small.im avec mes images ?",
            answer: "Oui, c'est totalement sûr. Tous les processus de compression et de conversion d'images sont effectués localement dans votre navigateur. Vos images ne sont jamais téléchargées sur un serveur, garantissant ainsi la confidentialité et la sécurité de vos données."
          }
        ]
      },
      {
        title: "Utilisation",
        items: [
          {
            question: "Comment télécharger des images sur Small.im ?",
            answer: "Vous pouvez sélectionner des fichiers en cliquant sur la zone de téléchargement ou en faisant glisser et déposer des fichiers et dossiers dessus."
          },
          {
            question: "Puis-je ajouter plusieurs images à la fois ?",
            answer: "Oui, vous pouvez ajouter des images par lots ou ajouter des dossiers entiers à la fois."
          },
          {
            question: "Comment puis-je comparer les images originales et compressées ?",
            answer: "Utilisez la fonction de prévisualisation, qui vous permet de faire glisser une ligne de division pour comparer l'image originale (côté gauche) avec l'image compressée (côté droit)."
          }
        ]
      },
      {
        title: "Options de compression",
        items: [
          {
            question: "Puis-je redimensionner les images lors de la compression ?",
            answer: "Oui, vous pouvez redimensionner les images en utilisant différents modes : Définir la largeur (la hauteur s'ajuste automatiquement), Définir la hauteur (la largeur s'ajuste automatiquement), Définir le côté court (le côté long s'ajuste automatiquement), Définir le côté long (le côté court s'ajuste automatiquement)."
          },
          {
            question: "Quels paramètres puis-je ajuster pour différents formats d'image ?",
            answer: "Vous pouvez ajuster : JPEG/WEBP : Qualité de l'image de sortie (0-1), PNG : Nombre de couleurs de sortie (2-256) et coefficient de tramage (0-1), GIF : Option de tramage, AVIF : Qualité de l'image de sortie (1-100) et vitesse de compression (1-10)."
          }
        ]
      },
      {
        title: "Gestion des images compressées",
        items: [
          {
            question: "Comment puis-je télécharger mes images compressées ?",
            answer: "Vous pouvez télécharger des images individuelles ou enregistrer toutes les images compressées en une seule fois."
          },
          {
            question: "Puis-je supprimer des images de la liste ?",
            answer: "Oui, vous pouvez supprimer des images individuelles ou effacer toutes les images de la liste."
          }
        ]
      },
      {
        title: "Dépannage",
        items: [
          {
            question: "Que dois-je faire si je rencontre une erreur 404 ?",
            answer: "Si vous voyez une erreur 404, cela signifie que la page que vous essayez d'accéder n'existe pas. Utilisez l'option \"Retour à l'accueil\" pour revenir à la page principale."
          },
          {
            question: "Comment puis-je réinitialiser les options de compression par défaut ?",
            answer: "Utilisez le bouton \"Réinitialiser les options\" pour restaurer tous les paramètres de compression à leurs valeurs par défaut."
          }
        ]
      }
    ]
  },
};

export default localeData;
