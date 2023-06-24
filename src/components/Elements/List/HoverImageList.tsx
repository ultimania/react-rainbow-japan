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

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  return (
    <>
      <div className="headline-list">
        <ul>
          {props.items.map((item, index) => (
            <SimpleLink href={item.href} key={index}>
              <li
                onMouseEnter={() => handleMouseEnter(index)}
                className={`headline-item ${hoveredIndex === index ? 'hovered' : ''}`}
              >
                <div className="headline-title">
                  <span className="dot" /><span className='text'>{item.title}</span>
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
