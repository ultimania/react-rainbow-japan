import React, { useEffect, useState } from 'react'
import { NavigationList } from '../Elements/List'
import { Button } from '../Elements/Button'
import { IconEnum } from '../Types'
import siteLogo from '../../assets/siteLogo.svg'
import styleModule from './NavigationLayout.module.scss'

import { headerNavItems } from '../..//data'

export const NavigationLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id={styleModule['layout-header']}>
      <header className={styleModule['header']}>
        <div className={styleModule['site-logo-area']}>
          <img src={siteLogo} className={styleModule['site-logo']} alt="logo" />
        </div>
        <div className={styleModule['nav-area']}>
          <NavigationList items={headerNavItems} />
          <div
            className={`${styleModule['contact']} ${
              isScrolled ? styleModule['is-scrolled'] : ''
            }`}
          >
            <Button minimum={isScrolled} icon={IconEnum.Mail} href="/contact">
              Consultation and Contact
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
