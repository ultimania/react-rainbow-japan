import React, { useState } from 'react'
import siteLogo from './siteLogo.svg'
import imgMv1 from './img_mv_01.jpg'
import imgMv2 from './img_mv_02.jpg'
import imgMv3 from './img_mv_03.jpg'
import './App.css'

function App() {
  interface Slide {
    id: number
    imgSrc: string
    alt: string
  }

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
    <div className="App">
      <div id="layout-main-view">
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

      <div id="layout-service"></div>

      <div id="layout-achiebement"></div>

      <div id="layout-notification"></div>

      <div id="layout-footer"></div>

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
              <li className="nav-item">コラム</li>
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
    </div>
  )
}

export default App
