import React, { useEffect, useState } from 'react'
import siteLogo from '../../assets/siteLogo.svg'
import './App.scss'

import { Button } from '../Elements/Button'
import { IconEnum } from '../Types'
import { ShowAllLink } from '../Elements/Link'
import { ContentsTitle } from '../Elements/Label'
import {
  HoverImageList,
  ImageCardList,
  InformationList,
  NavigationList,
} from '../Elements/List'
import { SlideShow } from '../Elements/ImageView'

import {
  slides,
  informations,
  headerNavItems,
  footerNavItems,
  achiebements,
  headlines,
} from '../..//data'
import imgAc1 from '../../assets/img_achibement_01.jpg'

export const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const mainTextH1 = '「つたえる」をデザインする。'
  const mainTextH2 = 'Web Marketing x Information Design'

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    setFadeIn(true)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div id="layout-main-view" className="contents">
        <div className="main">
          <div className={`main-theme ${fadeIn ? 'fade-in' : ''}`}>
            <h1>
              {mainTextH1.split('').map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </h1>
            <h2>
              {mainTextH2.split('').map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </h2>
          </div>
          <SlideShow items={slides} />
        </div>
        <div className="company-description">
          レインボー・ジャパンは、webサイト、インターネットメディアを活用し、企業課題を解決するコンサルティング・webサイト制作会社です。
        </div>
        <div className="important-info">
          レインボー・ジャパンは経済産業省により「健康経営優良法人2023」に認定されました。
        </div>
      </div>

      <div id="layout-service" className="contents">
        <ContentsTitle title="サービス">
          webサイトの分析、設計、制作、運用、改善の一連を提供可能。
          <br />
          お悩みを解決し、ビジネス成果に繋げます。
        </ContentsTitle>
        <div className="contents-main">
          <HoverImageList items={headlines} />
        </div>
        <ShowAllLink>サービスをすべて見る</ShowAllLink>
      </div>

      <div id="layout-achiebement" className="contents">
        <ContentsTitle title="対応実績">
          30年で500社。
          <br />
          webサイトの制作・改善・保守を中心に数多くの対応実績があります。
        </ContentsTitle>
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
              <div className="link">
                <Button outline>コーポレートサイト</Button>
              </div>
            </div>
          </div>
          <ImageCardList items={achiebements} />
        </div>
        <ShowAllLink>制作実績をすべて見る</ShowAllLink>
      </div>

      <div id="layout-notification" className="contents">
        <ContentsTitle title="お知らせ" />
        <div className="contents-main">
          <InformationList contents={informations} />
        </div>
        <ShowAllLink>お知らせをすべて見る</ShowAllLink>
      </div>

      <div id="layout-footer">
        <div className="contact-area">
          <div className="title">ご相談・お問い合わせ</div>
          <div className="contact-link" />
        </div>
        <div className="nav-area">
          <NavigationList items={footerNavItems} />
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
            <NavigationList items={headerNavItems} />
            <Button
              className={`button-text ${isScrolled ? 'minimum' : ''}`}
              icon={IconEnum.Mail}
              url="/contact"
            >
              ご相談・お問い合わせ
            </Button>
          </div>
        </header>
      </div>
    </>
  )
}
