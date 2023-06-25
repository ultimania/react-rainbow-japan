import React from 'react'
import { SimpleLink } from '../Link'
import { Button } from '../Button'
import styleModule from './ImageCardList.module.scss'

type ImageCard = {
  src: string
  title: string
  subtitle: string
  href: string
  buttonLabel: string
}

type ImageCardListProps = {
  items: ImageCard[]
}

export const ImageCardList = (props: ImageCardListProps) => {
  return (
    <ul className={styleModule['card-list']}>
      {props.items.map((card, index) => (
        <li key={index} className={styleModule['card']}>
          <a href={card.href}>
            <div className={styleModule['image']}>
              <img src={card.src} alt={card.title} />
            </div>
            <div className={styleModule['title']}>
              <span className="text">{card.title}</span>
            </div>
            <div className={styleModule['subtitle']}>{card.subtitle}</div>
            <Button outline>{card.buttonLabel}</Button>
          </a>
        </li>
      ))}
    </ul>
  )
}
