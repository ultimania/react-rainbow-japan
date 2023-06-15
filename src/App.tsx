import React from 'react'
import siteLogo from './siteLogo.svg'
import imgMv1 from './img_mv_01.jpg'
import imgMv2 from './img_mv_02.jpg'
import imgMv3 from './img_mv_03.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="layout-header">
        <header className="header">
          <img src={siteLogo} className="site-logo" alt="logo" />
          <div className="navigation">
            <ul className="nav-area">
              <li className="nav-item">特徴</li>
              <li className="nav-item">サービス</li>
              <li className="nav-item">制作実績</li>
              <li className="nav-item">コラム</li>
              <li className="nav-item">会社情報</li>
              <li className="nav-item">採用情報</li>
              <li className="nav-item">お知らせ</li>
            </ul>
          </div>
          <div className="contact">
            <span className="icon-label mail">ご相談・お問い合わせ</span>
          </div>
        </header>
      </div>

      <div className="layout-main-view">
        <div className="main-theme">
          <h1>「つたえる」をデザインする。</h1>
          <h2>Web Marketing x Information Design</h2>
        </div>
        <div className="main-slideshow">
          <ul className="slideshow">
            <li className="slide">
              <img src={imgMv1} alt="img-mv1"></img>
            </li>
            <li className="slide">
              <img src={imgMv2} alt="img-mv2"></img>
            </li>
            <li className="slide">
              <img src={imgMv3} alt="img-mv3"></img>
            </li>
          </ul>
        </div>
        <div className="company-description">
          レインボー・ジャパンは、webサイト、インターネットメディアを活用し、企業課題を解決するコンサルティング・webサイト制作会社です。
        </div>
        <div className="important-info">
          レインボー・ジャパンは経済産業省により「健康経営優良法人2023」に認定されました。
        </div>
      </div>

      <div className="layout-service"></div>

      <div className="layout-achiebement"></div>

      <div className="layout-notification"></div>

      <div className="layout-footer"></div>
    </div>
  )
}

export default App
