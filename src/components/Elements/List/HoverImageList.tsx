import React, { useState } from 'react'
import { SimpleLink } from '../Link'

type HoverImageItem = {
  title: string
  description: string
  href: string
  img: string
}

type HoverImageListProps = {
  items: HoverImageItem[]
}

export const HoverImageList = (props: HoverImageListProps) => {
  const [currentImage, setCurrentImage] = useState(props.items[0].img)

  const handleMouseEnter = (img: string) => {
    setCurrentImage(img);
  };

  return (
    <>
      <div className="headline-list">
        <ul>
          {props.items.map((item, index) => (
            <SimpleLink href={item.href} key={index}>
              <li onMouseEnter={() => handleMouseEnter(item.img)}>
                <div className="headline-title">{item.title}</div>
                <div className="headline-description">{item.description}</div>
              </li>
            </SimpleLink>
          ))}
        </ul>
      </div>
      <div className="headline-image">
        <img src={currentImage} alt="imgSv" />
      </div>
    </>
  )
}
