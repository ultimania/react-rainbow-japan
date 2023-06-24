import imgMv1 from './assets/img_mv_01.jpg'
import imgMv2 from './assets/img_mv_02.jpg'
import imgMv3 from './assets/img_mv_03.jpg'

import imgSv1 from './assets/img_service_01.jpg'
import imgSv2 from './assets/img_service_02.jpg'
import imgSv3 from './assets/img_service_03.jpg'
import imgSv4 from './assets/img_service_04.jpg'
import imgAc2 from './assets/img_achibement_02.jpg'
import imgAc3 from './assets/img_achibement_03.jpg'
import imgAc4 from './assets/img_achibement_04.jpg'

// import imgSv4 from './assets/siteLogo.svg'
// import imgAc4 from './assets/siteLogo.svg'

export const slides = [{ src: imgMv1 }, { src: imgMv2 }, { src: imgMv3 }]

export const informations = [
  {
    date: '20230310',
    title:
      '経済産業省によりレインボー・ジャパンが「健康経営優良法人2023」に認定されました。今後も健康経営の取組みを続けます。',
    url: '/dummy',
  },
  {
    date: '20220401',
    title:
      'ハイブリッドワーク（オフィスワークとテレワークを組み合わせた働き方）移行のお知らせ',
  },
  {
    date: '20220309',
    title:
      '経済産業省によりレインボー・ジャパンが「健康経営優良法人2022」に認定されました。今後も健康経営の取組みを続けます。',
  },
]

export const headerNavItems = [
  {
    name: '特徴',
    href: '/dummy',
  },
  {
    name: 'サービス',
    href: '/dummy',
  },
  {
    name: '制作実績',
    href: '/dummy',
  },
  {
    name: '会社情報',
    href: '/dummy',
  },
  {
    name: '採用情報',
    href: '/dummy',
  },
  {
    name: 'お知らせ',
    href: '/dummy',
  },
]

export const footerNavItems = [
  {
    name: '個人情報の取り扱いについて',
    href: '/dummy',
  },
  {
    name: 'サイトマップ',
    href: '/dummy',
  },
  {
    name: '品質方針・環境方針',
    href: '/dummy',
  },
]

export const achiebements = [
  {
    src: imgAc2,
    title: 'COBOTTA PRO デンソーウェーブ',
    subtitle: '株式会社デンソーウェーブ',
    href: '/dummy',
    buttonLabel: 'ブランドサイト',
  },
  {
    src: imgAc3,
    title: 'アビタス',
    subtitle: '株式会社アビタス',
    href: '/dummy',
    buttonLabel: 'コーポレートサイト',
  },
  {
    src: imgAc4,
    title: 'アフレル',
    subtitle: '株式会社アフレル',
    href: '/dummy',
    buttonLabel: 'コーポレートサイト',
  },
]

export const headlines = [
  {
    title: 'webサイト制作',
    description:
      '大規模サイトからランディングページまで。ご要望の形式でwebサイトを制作いたします。',
    href: 'https://example.com/website-creation',
    img: imgSv1,
  },
  {
    title: 'webサイトの改善・更新',
    description:
      '集客や動線の改善から定型のページ更新作業まで、webサイト管理者の困りごとに寄り添います。',
    href: 'https://example.com/website-improvement',
    img: imgSv2,
  },
  {
    title: 'webマーケティング支援',
    description:
      '課題発見のための調査分析から施策実施後の効果測定まで、特にGoogleアナリティクスの設定支援はお任せください。',
    href: 'https://example.com/web-marketing-support',
    img: imgSv3,
  },
  {
    title: 'UIデザイン',
    description:
      'スマホアプリ、webアプリ等のユーザーインターフェイスを制作します。デモ用のモック作成やデザインガイドラインの策定もご相談ください。',
    href: 'https://example.com/ui-design',
    img: imgSv4,
  },
]
