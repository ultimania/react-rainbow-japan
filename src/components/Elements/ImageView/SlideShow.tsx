import React, { useState } from 'react'

type SlideShowProps = {
  items: SlideShowItem[]
}

type SlideShowItem = {
  src: string
}

export const SlideShow = (props: SlideShowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="main-slideshow">
      <ul className="slideshow">
        {props.items.map((slide, index) => (
          <li
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.src} alt={index.toString()} />
          </li>
        ))}
      </ul>
      <div className="paging">
        {props.items.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
