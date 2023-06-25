import React from 'react'
import { ContentsTitle } from '../Elements/Label'
import { HoverImageList } from '../Elements/List'
import { ShowAllLink } from '../Elements/Link'
import { headlines } from '../..//data'
import styleModule from './ServiceLayout.module.scss'
import styleCommonModule from './App.module.scss'

export const ServiceLayout = () => {
  return (
    <div id={styleModule["layout-service"]} className={styleCommonModule["contents"]}>
      <ContentsTitle title="Services">
        We provide a series of services including web analysis, design,
        development, operation, and improvement. We solve your problems and
        contribute to your business success.
      </ContentsTitle>
      <div className={styleModule["contents-main"]}>
        <HoverImageList items={headlines} />
      </div>
      <ShowAllLink>View all services</ShowAllLink>
    </div>
  )
}
