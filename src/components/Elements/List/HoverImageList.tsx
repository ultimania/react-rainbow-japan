import React, { useState } from 'react'
import styleModule from './HoverImageList.module.scss'

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  return (
    <div className={styleModule['hover-image-list']}>
      <ul className={styleModule['headline-list']}>
        {props.items.map((item, index) => (
          <a href={item.href} key={index} >
            <li
              onMouseEnter={() => handleMouseEnter(index)}
              className={`${styleModule['headline-item']} ${
                hoveredIndex === index ? styleModule['hovered'] : ''
              }`}
            >
              <div className={styleModule['headline-title']}>
                <span className={styleModule['dot']} />
                <span className={styleModule['text']}>{item.title}</span>
              </div>
              <div className={styleModule['headline-description']}>
                {item.description}
              </div>
            </li>
          </a>
        ))}
      </ul>
      <div className={styleModule['headline-image']}>
        {props.items.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt="imgSv"
            style={{ zIndex: hoveredIndex === index ? 1 : 0 }}
            className={`${
              hoveredIndex === index
                ? styleModule['fade-in']
                : styleModule['fade-out']
            }`}
          />
        ))}
      </div>
    </div>
  )
}
