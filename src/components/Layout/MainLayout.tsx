import React, { useState } from 'react'
import siteLogo from '../../assets/siteLogo.svg'
// import imgMv1 from '../../assets/img_mv_01.jpg'
// import imgMv2 from '../../assets/img_mv_02.jpg'
// import imgMv3 from '../../assets/img_mv_03.jpg'
// import imgSv1 from '../../assets/img_service_01.jpg'
// import imgSv2 from '../../assets/img_service_02.jpg'
// import imgSv3 from '../../assets/img_service_03.jpg'
// import imgSv4 from '../../assets/img_service_04.jpg'
// import imgAc1 from '../../assets/img_achibement_01.jpg'
// import imgAc2 from '../../assets/img_achibement_02.jpg'
// import imgAc3 from '../../assets/img_achibement_03.jpg'
// import imgAc4 from '../../assets/img_achibement_04.jpg'
import './App.scss'

import imgMv1 from '../../assets/siteLogo.svg'
import imgMv2 from '../../assets/siteLogo.svg'
import imgMv3 from '../../assets/siteLogo.svg'
import imgSv1 from '../../assets/siteLogo.svg'
import imgSv2 from '../../assets/siteLogo.svg'
import imgSv3 from '../../assets/siteLogo.svg'
import imgSv4 from '../../assets/siteLogo.svg'
import imgAc1 from '../../assets/siteLogo.svg'
import imgAc2 from '../../assets/siteLogo.svg'
import imgAc3 from '../../assets/siteLogo.svg'
import imgAc4 from '../../assets/siteLogo.svg'


export const MainLayout = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  const slides = [
    { id: 1, imgSrc: imgMv1, alt: 'img-mv1' },
    { id: 2, imgSrc: imgMv2, alt: 'img-mv2' },
    { id: 3, imgSrc: imgMv3, alt: 'img-mv3' },
  ]

  return (
    <>
      <div id="layout-main-view" className="contents">
        <div className="main">
          <div className="main-theme">
            <h1>「つたえる」をデザインする。</h1>
            <h2>Web Marketing x Information Design</h2>
          </div>
          <div className="main-slideshow">
            <ul className="slideshow">
              {slides.map((slide, index) => (
                <li
                  key={slide.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={slide.imgSrc} alt={slide.alt} />
                </li>
              ))}
            </ul>
            <div className="paging">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="company-description">
          レインボー・ジャパンは、webサイト、インターネットメディアを活用し、企業課題を解決するコンサルティング・webサイト制作会社です。
        </div>
        <div className="important-info">
          レインボー・ジャパンは経済産業省により「健康経営優良法人2023」に認定されました。
        </div>
      </div>

      <div id="layout-service" className="contents">
        <div className="contents-title">
          <div className="title">サービス</div>
          <div className="description">
            webサイトの分析、設計、制作、運用、改善の一連を提供可能。
            <br />
            お悩みを解決し、ビジネス成果に繋げます。
          </div>
        </div>
        <div className="contents-main">
          <div className="headline-list">
            <ul>
              <li>
                <div className="headline-title">webサイト制作</div>
                <div className="headline-description">
                  大規模サイトからランディングページまで。ご要望の形式でwebサイトを制作いたします。
                </div>
              </li>
              <li>
                <div className="headline-title">webサイトの改善・更新</div>
                <div className="headline-description">
                  集客や動線の改善から定型のページ更新作業まで、webサイト管理者の困りごとに寄り添います。
                </div>
              </li>
              <li>
                <div className="headline-title">webマーケティング支援</div>
                <div className="headline-description">
                  課題発見のための調査分析から施策実施後の効果測定まで、特にGoogleアナリティクスの設定支援はお任せください。
                </div>
              </li>
              <li>
                <div className="headline-title">UIデザイン</div>
                <div className="headline-description">
                  スマホアプリ、webアプリ等のユーザーインターフェイスを制作します。デモ用のモック作成やデザインガイドラインの策定もご相談ください。
                </div>
              </li>
            </ul>
          </div>
          <div className="headline-image">
            <img src={imgSv1} alt="imgSv1" />
            <img src={imgSv2} alt="imgSv2" />
            <img src={imgSv3} alt="imgSv3" />
            <img src={imgSv4} alt="imgSv4" />
          </div>
        </div>
        <div className="content-show-all">サービスをすべて見る</div>
      </div>

      <div id="layout-achiebement" className="contents">
        <div className="contents-title">
          <div className="title">制作実績</div>
          <div className="description">
            30年で500社。
            <br />
            webサイトの制作・改善・保守を中心に数多くの対応実績があります。
          </div>
        </div>
        <div className="contents-main">
          <div className="pickup">
            <div className="image">
              <img src={imgAc1} alt="img_achibement" />
            </div>
            <div className="card">
              <div className="title">三愛オブリ</div>
              <div className="subtitle">株式会社三愛オブリ</div>
              <div className="description">
                エネルギーや石油製品全般を扱う企業へのリブランディング。より企業向けの訴求を強化したリニューアル。
                <br />
              </div>
              <div className="link">コーポレートサイト</div>
            </div>
          </div>
          <ul className="card-list">
            <li className="card">
              <div className="image">
                <img src={imgAc2} alt="imgAc2" />
              </div>
              <div className="title">COBOTTA PRO デンソーウェーブ</div>
              <div className="subtitle">株式会社デンソーウェーブ</div>
              <div className="link">ブランドサイト</div>
            </li>
            <li className="card">
              <div className="image">
                <img src={imgAc3} alt="imgAc3" />
              </div>
              <div className="title">アビタス</div>
              <div className="subtitle">株式会社アビタス</div>
              <div className="link">コーポレートサイト</div>
            </li>
            <li className="card">
              <div className="image">
                <img src={imgAc4} alt="imgAc4" />
              </div>
              <div className="title">アフレル</div>
              <div className="subtitle">株式会社アフレル</div>
              <div className="link">コーポレートサイト</div>
            </li>
          </ul>
        </div>
        <div className="content-show-all">制作実績をすべて見る</div>
      </div>

      <div id="layout-notification" className="contents">
        <div className="contents-title">
          <div className="title">お知らせ</div>
        </div>
        <div className="contents-main">
          <div className="notifications-list">
            <div className="row">
              <span className="date">2023年3月10日</span>
              <span className="title">
                経済産業省によりレインボー・ジャパンが「健康経営優良法人2023」に認定されました。
                今後も健康経営の取組みを続けます。
              </span>
            </div>
            <div className="row">
              <span className="date">2022年4月1日</span>
              <span className="title">
                ハイブリッドワーク（オフィスワークとテレワークを組み合わせた働き方）移行のお知らせ
              </span>
            </div>
            <div className="row">
              <span className="date">2022年3月9日</span>
              <span className="title">
                経済産業省によりレインボー・ジャパンが「健康経営優良法人2022」に認定されました。
                今後も健康経営の取組みを続けます。
              </span>
            </div>
          </div>
        </div>
        <div className="content-show-all">お知らせをすべて見る</div>
      </div>

      <div id="layout-footer">
        <div className="contact-area">
          <div className="title">ご相談・お問い合わせ</div>
          <div className="contact-link" />
        </div>
        <div className="nav">
          <ul className="nav-items">
            <li>個人情報の取り扱いについて</li>
            <li>サイトマップ</li>
            <li>品質方針・環境方針</li>
          </ul>
          <div className="copyright">
            Rainbow Japan Ltd., All rights reserved.
          </div>
        </div>
      </div>

      <div id="layout-header">
        <header className="header">
          <div className="site-logo-area">
            <img src={siteLogo} className="site-logo" alt="logo" />
          </div>
          <div className="nav-area">
            <ul className="nav-main">
              <li className="nav-item">特徴</li>
              <li className="nav-item">サービス</li>
              <li className="nav-item">制作実績</li>
              <li className="nav-item">会社情報</li>
              <li className="nav-item">採用情報</li>
              <li className="nav-item">お知らせ</li>
            </ul>
            <div className="contact">
              <span className="icon-label mail">ご相談・お問い合わせ</span>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
