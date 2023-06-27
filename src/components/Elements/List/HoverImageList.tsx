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
    <>
      <ul className={styleModule['hover-image-list']}>
        {props.items.map((item, index) => (
          <li
            onMouseEnter={() => handleMouseEnter(index)}
            className={`${styleModule['headline-item']} ${
              hoveredIndex === index ? styleModule['hovered'] : ''
            }`}
            key={index}
          >
            <a href={item.href}>
              <div className={styleModule['headline-title']}>
                <span className={styleModule['dot']} />
                <span className={styleModule['text']}>{item.title}</span>
              </div>
              <div className={styleModule['headline-description']}>
                {item.description}
              </div>
            </a>
            <div
              className={`${styleModule['headline-image']} ${
                hoveredIndex === index
                  ? styleModule['fade-in']
                  : styleModule['fade-out']
              }`}
              style={{ zIndex: hoveredIndex === index ? 1 : 0 }}
            >
              <img key={index} src={item.img} alt="imgSv" />
            </div>
          </li>
        ))}
      </ul>
      <div className="viewer" />
    </>
  )
}
