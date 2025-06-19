// 韩语

import { LocaleData } from "@/type";
import koKR from "antd/locale/ko_KR";

const localeData: LocaleData = {
  antLocale: koKR,
  logo: "Small.im",
  initial: "초기화 중",
  previewHelp:
    "압축 효과를 비교하려면 구분선을 드래그하세요. 왼쪽은 원본 이미지, 오른쪽은 압축된 이미지입니다.",
  uploadCard: {
    title: "여기에서 파일을 선택하고 파일 및 폴더 끌기를 지원합니다.",
    subTitle: "오픈 소스 배치 이미지 압축 도구, %s 형식 지원",
  },

  listAction: {
    batchAppend: "일괄 추가",
    addFolder: "폴더 추가",
    clear: "목록 지우기",
    downloadAll: "모두 저장",
    downloadOne: "이미지 저장",
    removeOne: "사진 제거",
    reCompress: "재압축",
  },
  columnTitle: {
    status: "상태",
    name: "파일 이름",
    preview: "미리보기",
    size: "크기",
    dimension: "크기",
    decrease: "압축 비율",
    action: "액션",
    newSize: "새 크기",
    newDimension: "새 차원",
  },
  optionPannel: {
    failTip: "더 작게 만들 수 없습니다. 매개변수를 조정하고 다시 시도하세요.",
    help: "Small.im는 옵션에 대한 수정 사항이 모든 이미지에 적용되는 일괄 이미지 압축 응용 프로그램입니다.",
    resizeLable: "이미지 크기 조정",
    jpegLable: "JPEG/WEBP 매개변수",
    pngLable: "PNG 매개변수",
    gifLable: "GIF 매개변수",
    avifLable: "AVIF 매개변수",
    resizePlaceholder: "조정 모드 선택",
    fitWidth: "너비, 높이는 자동으로 조정됩니다.",
    fitHeight: "높이 설정, 너비 자동 조정",
    setShort: "짧은 쪽, 긴 쪽은 자동으로 크기 조절 설정",
    setLong: "긴 쪽, 짧은 쪽 자동 크기 조정",
    setCropRatio: "자르기 모드, 자르기 비율 설정",
    setCropSize: "자르기 모드, 자르기 크기 설정",
    cwRatioPlaceholder: "너비 비율 설정",
    chRatioPlaceholder: "높이 비율 설정",
    cwSizePlaceholder: "자르기 너비 설정",
    chSizePlaceholder: "자르기 높이 설정",
    widthPlaceholder: "출력 이미지의 너비를 설정합니다",
    heightPlaceholder: "출력 이미지의 높이를 설정합니다",
    shortPlaceholder: "출력 이미지의 짧은 쪽 길이를 설정합니다",
    longPlaceholder: "출력 이미지의 긴 쪽 길이를 설정합니다",
    resetBtn: "재설정 옵션",
    confirmBtn: "옵션 적용",
    qualityTitle: "출력 이미지 품질 설정(0-1)",
    colorsDesc: "출력 색상 수 설정(2-256)",
    pngDithering: "디더링 계수 설정(0-1)",
    gifDithering: "디더링 켜기",
    avifQuality: "출력 이미지 품질 설정(1-100)",
    avifSpeed: "압축 속도 설정(1-10)",
    outputFormat: "출력 형식 설정",
    outputFormatPlaceholder: "출력 이미지 형식 선택",
    transparentFillDesc: "투명한 채우기 색상 선택",
    cropCompareWarning: "자르기 모드는 비교 미리보기를 지원하지 않습니다.",
  },
  error404: {
    backHome: "홈 페이지로 돌아가기",
    description: "죄송합니다. 방문하신 페이지는 존재하지 않습니다~",
  },
  progress: {
    before: "압축 전",
    after: "압축 후",
    rate: "압축률",
  },
  faq: {
    title: "Small.im 이미지 압축 FAQ",
    sections: [
      {
        title: "일반적인 질문",
        items: [
          {
            question: "Small.im이 무엇인가요?",
            answer: "Small.im은 여러 이미지 형식을 지원하는 오픈 소스 일괄 이미지 압축 도구입니다. PicSmaller (https://github.com/joye61/pic-smaller)의 포크로, https://github.com/airyland/pic-smaller에서 이용할 수 있으며 MIT 라이선스로 배포됩니다."
          },
          {
            question: "Small.im은 어떤 이미지 형식을 지원하나요?",
            answer: "Small.im은 JPEG, WEBP, PNG, GIF, AVIF 등 다양한 형식을 지원합니다."
          },
          {
            question: "Small.im으로 이미지를 사용하는 것이 안전한가요?",
            answer: "네, 완전히 안전합니다. 모든 이미지 압축 및 변환 과정은 브라우저에서 로컬로 수행됩니다. 이미지가 서버에 업로드되지 않아 데이터 프라이버시와 보안이 보장됩니다."
          }
        ]
      },
      {
        title: "사용법",
        items: [
          {
            question: "Small.im에 이미지를 업로드하려면 어떻게 해야 하나요?",
            answer: "업로드 영역을 클릭하여 파일을 선택하거나 파일과 폴더를 드래그 앤 드롭하여 선택할 수 있습니다."
          },
          {
            question: "여러 이미지를 한 번에 추가할 수 있나요?",
            answer: "네, 이미지를 일괄 추가하거나 전체 폴더를 한 번에 추가할 수 있습니다."
          },
          {
            question: "원본 이미지와 압축된 이미지를 비교하려면 어떻게 해야 하나요?",
            answer: "미리보기 기능을 사용하여 구분선을 드래그하여 원본 이미지(왼쪽)와 압축된 이미지(오른쪽)를 비교할 수 있습니다."
          }
        ]
      },
      {
        title: "압축 옵션",
        items: [
          {
            question: "압축 중에 이미지 크기를 조정할 수 있나요?",
            answer: "네, 다양한 모드로 이미지 크기를 조정할 수 있습니다: 너비 설정(높이 자동 조정), 높이 설정(너비 자동 조정), 짧은 면 설정(긴 면 자동 조정), 긴 면 설정(짧은 면 자동 조정)."
          },
          {
            question: "다른 이미지 형식에서 어떤 매개변수를 조정할 수 있나요?",
            answer: "조정 가능한 항목: JPEG/WEBP: 출력 이미지 품질(0-1), PNG: 출력 색상 수(2-256) 및 디더링 계수(0-1), GIF: 디더링 옵션, AVIF: 출력 이미지 품질(1-100) 및 압축 속도(1-10)."
          }
        ]
      },
      {
        title: "압축된 이미지 관리",
        items: [
          {
            question: "압축된 이미지를 다운로드하려면 어떻게 해야 하나요?",
            answer: "개별 이미지를 다운로드하거나 압축된 모든 이미지를 한 번에 저장할 수 있습니다."
          },
          {
            question: "목록에서 이미지를 제거할 수 있나요?",
            answer: "네, 개별 이미지를 제거하거나 목록에서 모든 이미지를 지울 수 있습니다."
          }
        ]
      },
      {
        title: "문제 해결",
        items: [
          {
            question: "404 오류가 발생하면 어떻게 해야 하나요?",
            answer: "404 오류가 표시되면 접근하려는 페이지가 존재하지 않는다는 의미입니다. \"홈으로 돌아가기\" 옵션을 사용하여 메인 페이지로 돌아가세요."
          },
          {
            question: "압축 옵션을 기본값으로 재설정하려면 어떻게 해야 하나요?",
            answer: "\"옵션 재설정\" 버튼을 사용하여 모든 압축 설정을 기본값으로 복원하세요."
          }
        ]
      }
    ]
  },
};

export default localeData;
