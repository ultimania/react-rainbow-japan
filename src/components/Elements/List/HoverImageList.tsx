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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsHovered(true)
  }

  const addDotAndAnimationToTitle = (title: string, index: number) => {
    return (
      <>
        <span
          className={`dot ${hoveredIndex === index ? 'fade-in' : 'fade-out'}`}
        />
        <span className={`text ${hoveredIndex === index ? 'hovered' : ''}`}>
          {title}
        </span>
      </>
    )
  }

  return (
    <>
      <div className="headline-list">
        <ul>
          {props.items.map((item, index) => (
            <SimpleLink href={item.href} key={index}>
              <li
                onMouseEnter={() => handleMouseEnter(index)}
                className="headline-item"
              >
                <div className="headline-title">
                  {addDotAndAnimationToTitle(item.title, index)}
                </div>
                <div className="headline-description">{item.description}</div>
              </li>
            </SimpleLink>
          ))}
        </ul>
      </div>
      <div className="headline-image">
        {props.items.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt="imgSv"
            style={{ zIndex: hoveredIndex === index ? 1 : 0 }}
            className={`${hoveredIndex === index ? 'fade-in' : 'fade-out'}`}
          />
        ))}
      </div>
    </>
  )
}
