import React from 'react'
import { SimpleLink } from '../Link'
import { Button } from '../Button'

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
    <ul className="card-list">
      {props.items.map((card, index) => (
        <li key={index} className="card">
          <SimpleLink href={card.href}>
            <div className="image">
              <img src={card.src} alt={card.title} />
            </div>
            <div className="title">{card.title}</div>
            <div className="subtitle">{card.subtitle}</div>
            <div className="link">
              <Button outline>{card.buttonLabel}</Button>
            </div>
          </SimpleLink>
        </li>
      ))}
    </ul>
  )
}
