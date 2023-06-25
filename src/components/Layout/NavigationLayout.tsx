import React, { useEffect, useState } from 'react'
import { NavigationList } from '../Elements/List'
import { Button } from '../Elements/Button'
import { IconEnum } from '../Types'
import siteLogo from '../../assets/siteLogo.svg';

import {
  headerNavItems,
} from '../..//data';

export const NavigationLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
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
            Consultation and Contact
          </Button>
        </div>
      </header>
    </div>
  )
}
