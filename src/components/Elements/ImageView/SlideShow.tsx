import React, { useEffect, useState } from 'react'

type SlideShowProps = {
  items: SlideShowItem[]
}

type SlideShowItem = {
  src: string
}

export const SlideShow = (props: SlideShowProps) => {
  const slideInterval = 5600;
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % props.items.length)
    }, slideInterval)
    return () => clearInterval(interval)
  }, [props.items.length])

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  const renderSlides = () => {
    return props.items.map((slide, index) => (
      <li
        key={index}
        className={`slide${index === currentSlide ? ' active' : ''}`}
      >
        <img src={slide.src} alt={index.toString()} />
      </li>
    ))
  }

  const renderDots = () => {
    return props.items.map((_, index) => (
      <div
        key={index}
        className={`dot${index === currentSlide ? ' active' : ''}`}
        onClick={() => handleDotClick(index)}
      />
    ))
  }

  return (
    <div className="main-slideshow">
      <ul className="slideshow">{renderSlides()}</ul>
      <div className="paging">{renderDots()}</div>
    </div>
  )
}
