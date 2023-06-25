import React, { useEffect, useState } from 'react'
import './App.scss'

import { Button } from '../Elements/Button'
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
  footerNavItems,
  achievements,
  headlines,
} from '../..//data'
import imgAc1 from '../../assets/img_achievement_01.webp'
import { NavigationLayout } from './NavigationLayout'

export const MainLayout = () => {
  const [fadeIn, setFadeIn] = useState(false)
  const mainTextH1 = "Your Company's Main Theme"
  const mainTextH2 = "Your Company's Concepts"

  useEffect(() => {
    setFadeIn(true)
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
          Company XYZ is a consulting and web development company that utilizes
          websites and internet media to solve corporate challenges.
        </div>
        <div className="important-info">
          Company XYZ has been recognized as a Healthy Business Excellent
          Company 2023 by the Ministry of Economy, Trade and Industry.
        </div>
      </div>

      <div id="layout-service" className="contents">
        <ContentsTitle title="Services">
          We provide a series of services including web analysis, design,
          development, operation, and improvement. We solve your problems and
          contribute to your business success.
        </ContentsTitle>
        <div className="contents-main">
          <HoverImageList items={headlines} />
        </div>
        <ShowAllLink>View all services</ShowAllLink>
      </div>

      <div id="layout-achievement" className="contents">
        <ContentsTitle title="Achievements">
          500 companies in 30 years. We have a wide range of experience in
          website development, improvement, and maintenance.
        </ContentsTitle>
        <div className="contents-main">
          <div className="pickup">
            <div className="image">
              <img src={imgAc1} alt="img_achibement" />
            </div>
            <div className="card">
              <div className="title">Company A</div>
              <div className="subtitle">Company B</div>
              <div className="description">
                Rebranding for a company dealing with energy and petroleum
                products. A renewal that enhances the appeal to corporate
                clients.
              </div>
              <div className="link">
                <Button outline>Corporate Website</Button>
              </div>
            </div>
          </div>
          <ImageCardList items={achievements} />
        </div>
        <ShowAllLink>View all achievements</ShowAllLink>
      </div>

      <div id="layout-notification" className="contents">
        <ContentsTitle title="Notifications" />
        <div className="contents-main">
          <InformationList contents={informations} />
        </div>
        <ShowAllLink>View all notifications</ShowAllLink>
      </div>

      <div id="layout-footer">
        <div className="contact-area">
          <div className="title">Consultation and Contact</div>
          <div className="contact-link" />
        </div>
        <div className="nav-area">
          <NavigationList items={footerNavItems} />
          <div className="copyright">
            Your Company Ltd., All rights reserved.
          </div>
        </div>
      </div>

      <NavigationLayout />
    </>
  )
}
