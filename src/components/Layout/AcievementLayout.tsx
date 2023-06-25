import React from 'react'
import { ContentsTitle } from '../Elements/Label'
import { Button } from '../Elements/Button'
import { ImageCardList } from '../Elements/List'
import { ShowAllLink } from '../Elements/Link'
import { achievements } from '../..//data'
import imgAc1 from '../../assets/img_achievement_01.webp'
import styleModule from './AcievementLayout.module.scss'
import styleCommonModule from './App.module.scss'

export const AcievementLayout = () => {
  return (
    <div
      id={styleModule['layout-achievement']}
      className={styleCommonModule['contents']}
    >
      <ContentsTitle title="Achievements">
        500 companies in 30 years. We have a wide range of experience in website
        development, improvement, and maintenance.
      </ContentsTitle>
      <div className={styleCommonModule['contents-main']}>
        <div className={styleModule['pickup']}>
          <div className={styleModule['image']}>
            <img src={imgAc1} alt="img_achibement" />
          </div>
          <div className={styleModule['card']}>
            <div className={styleModule['title']}>Company A</div>
            <div className={styleModule['subtitle']}>Company B</div>
            <div className={styleModule['description']}>
              Rebranding for a company dealing with energy and petroleum
              products. A renewal that enhances the appeal to corporate clients.
            </div>
            <Button outline>Corporate Website</Button>
          </div>
        </div>
        <ImageCardList items={achievements} />
      </div>
      <ShowAllLink>View all achievements</ShowAllLink>
    </div>
  )
}
