// 日语

import { LocaleData } from "@/type";
import jaJP from "antd/locale/ja_JP";

const localeData: LocaleData = {
  antLocale: jaJP,
  seo: {
    title: "Small.im – 無料のJPEG、PNG、WEBP、AVIF、SVG、GIF画像圧縮・変換ツール",
    description: "Small.imは、プライバシーを完全に保護しながらJPEG、PNG、WEBP、AVIF、SVG、GIF画像を安全に圧縮・変換する無料ツールです",
    keywords: "画像圧縮, jpeg, png, webp, avif, gif, svg, 画像圧縮ツール, 画像変換, 無料ツール"
  },
  logo: "Small.im",
  initial: "初期化中",
  previewHelp:
    "分割線をドラッグして圧縮効果を比較します。左が元の画像、右が圧縮された画像です",
  uploadCard: {
    title:
      "ここでファイルを選択し、ファイルとフォルダーのドラッグをサポートします",
    subTitle: "オープンソースのバッチ画像圧縮ツール、%s 形式をサポート",
  },
  listAction: {
    batchAppend: "バッチ追加",
    addFolder: "フォルダーを追加",
    clear: "リストをクリア",
    downloadAll: "すべて保存",
    downloadOne: "画像を保存",
    removeOne: "画像を削除",
    reCompress: "再圧縮",
  },
  columnTitle: {
    status: "ステータス",
    name: "ファイル名",
    preview: "プレビュー",
    size: "サイズ",
    dimension: "サイズ",
    decrease: "圧縮率",
    action: "アクション",
    newSize: "新しいサイズ",
    newDimension: "新しいディメンション",
  },
  optionPannel: {
    failTip:
      "小さくすることができません。パラメータを調整して再試行してください。",
    help: "Small.im はバッチ画像圧縮アプリケーションです。オプションの変更はすべての画像に適用されます。",
    resizeLable: "画像のサイズを変更する",
    jpegLable: "JPEG/WEBPパラメータ",
    pngLable: "PNG パラメータ",
    gifLable: "GIF パラメータ",
    avifLable: "AVIF パラメータ",
    resizePlaceholder: "調整モードの選択",
    fitWidth: "幅と高さを自動的に調整します",
    fitHeight: "高さと幅を自動的に調整します",
    setShort: "短辺と長辺を自動的に調整します",
    setLong: "長辺と短辺を自動的に調整します",
    setCropRatio: "クロップモード、クロップ率の設定",
    setCropSize: "切り抜きモード、切り抜きサイズを設定",
    cwRatioPlaceholder: "幅の比率を設定",
    chRatioPlaceholder: "高さの比率を設定",
    cwSizePlaceholder: "切り抜き幅を設定",
    chSizePlaceholder: "トリミングの高さを設定",
    widthPlaceholder: "出力画像の幅を設定します",
    heightPlaceholder: "出力画像の高さを設定します",
    shortPlaceholder: "出力画像の短辺の長さを設定する",
    longPlaceholder: "出力画像の長辺の長さを設定する",
    resetBtn: "オプションをリセット",
    confirmBtn: "オプションを適用",
    qualityTitle: "出力画質を設定します(0-1)",
    colorsDesc: "出力色の数を設定します (2-256)",
    pngDithering: "ディザリング係数を設定します (0-1)",
    gifDithering: "ディザリングをオンにする",
    avifQuality: "出力画質を設定します (1-100)",
    avifSpeed: "圧縮速度を設定します (1-10)",
    outputFormat: "出力形式を設定する",
    outputFormatPlaceholder: "出力画像フォーマットの選択",
    transparentFillDesc: "透明な塗りつぶしの色を選択します",
    cropCompareWarning: "クロップ モードは比較プレビューをサポートしていません",
  },
  error404: {
    backHome: "ホームページに戻る",
    description: "申し訳ありませんが、アクセスしたページは存在しません~",
  },
  progress: {
    before: "圧縮前",
    after: "圧縮後",
    rate: "圧縮率",
  },
  faq: {
    title: "Small.im 画像圧縮 FAQ",
    sections: [
      {
        title: "一般的な質問",
        items: [
          {
            question: "Small.imとは何ですか？",
            answer: "Small.imは複数の画像形式をサポートするオープンソースの一括画像圧縮ツールです。PicSmaller (https://github.com/joye61/pic-smaller) のフォークで、https://github.com/airyland/pic-smaller で入手でき、MITライセンスの下で配布されています。"
          },
          {
            question: "Small.imはどの画像形式をサポートしていますか？",
            answer: "Small.imはJPEG、WEBP、PNG、GIF、AVIFなど、さまざまな形式をサポートしています。"
          },
          {
            question: "Small.imで画像を使用するのは安全ですか？",
            answer: "はい、完全に安全です。すべての画像圧縮と変換処理はブラウザ内でローカルに実行されます。画像がサーバーにアップロードされることはなく、データのプライバシーとセキュリティが確保されています。"
          }
        ]
      },
      {
        title: "使用方法",
        items: [
          {
            question: "Small.imに画像をアップロードするにはどうすればよいですか？",
            answer: "アップロード領域をクリックしてファイルを選択するか、ファイルやフォルダをドラッグ&ドロップして選択できます。"
          },
          {
            question: "複数の画像を一度に追加できますか？",
            answer: "はい、一括で画像を追加したり、フォルダ全体を一度に追加したりできます。"
          },
          {
            question: "元の画像と圧縮後の画像を比較するにはどうすればよいですか？",
            answer: "プレビュー機能を使用してください。分割線をドラッグして、元の画像（左側）と圧縮後の画像（右側）を比較できます。"
          }
        ]
      },
      {
        title: "圧縮オプション",
        items: [
          {
            question: "圧縮中に画像のサイズを変更できますか？",
            answer: "はい、さまざまなモードで画像のサイズを変更できます：幅を設定（高さは自動スケール）、高さを設定（幅は自動スケール）、短辺を設定（長辺は自動スケール）、長辺を設定（短辺は自動スケール）。"
          },
          {
            question: "異なる画像形式でどのようなパラメータを調整できますか？",
            answer: "調整できる項目：JPEG/WEBP：出力画像品質（0-1）、PNG：出力色数（2-256）と抖色係数（0-1）、GIF：抖色オプション、AVIF：出力画像品質（1-100）と圧縮速度（1-10）。"
          }
        ]
      },
      {
        title: "圧縮画像の管理",
        items: [
          {
            question: "圧縮した画像をダウンロードするにはどうすればよいですか？",
            answer: "個別の画像をダウンロードしたり、圧縮したすべての画像を一度に保存したりできます。"
          },
          {
            question: "リストから画像を削除できますか？",
            answer: "はい、個別の画像を削除したり、リストからすべての画像をクリアしたりできます。"
          }
        ]
      },
      {
        title: "トラブルシューティング",
        items: [
          {
            question: "404エラーが発生した場合はどうすればよいですか？",
            answer: "404エラーが表示された場合、アクセスしようとしているページが存在しないことを意味します。「ホームに戻る」オプションを使用してメインページに戻ってください。"
          },
          {
            question: "圧縮オプションをデフォルトにリセットするにはどうすればよいですか？",
            answer: "「オプションをリセット」ボタンを使用して、すべての圧縮設定をデフォルト値に復元してください。"
          }
        ]
      }
    ]
  },
};

export default localeData;
