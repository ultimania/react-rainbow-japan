import React, { useEffect, useState } from 'react'
import './App.scss'

import { SlideShow } from '../Elements/ImageView'

import { slides } from '../..//data'
import { NavigationLayout, FooterLayout, NotificationLayout, AcievementLayout, ServiceLayout } from './'

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

      <ServiceLayout />

      <AcievementLayout />

      <NotificationLayout />

      <FooterLayout />

      <NavigationLayout />
    </>
  )
}
