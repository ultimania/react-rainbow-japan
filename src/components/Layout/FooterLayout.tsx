import React from 'react'
import { NavigationList } from '../Elements/List'
import {
  footerNavItems,
} from '../..//data'
import sytleModule from './FooterLayout.module.scss'

export const FooterLayout = () => {

  return (
    <div id={sytleModule["layout-footer"]}>
      <div className={sytleModule["contact-area"]}>
        <div className={sytleModule["title"]}>Consultation and Contact</div>
        <div className={sytleModule["contact-link"]} />
      </div>
      <div className={sytleModule["nav-area"]}>
        <NavigationList items={footerNavItems} />
        <div className={sytleModule["copyright"]}>Your Company Ltd., All rights reserved.</div>
      </div>
    </div>
  )
}
