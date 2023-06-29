import React, { ReactNode, MouseEvent, useState } from 'react'
import styleModule from './SimpleLink.module.scss'
import { IconEnum } from '../../Types'
import { Icon } from '../Icon'

type SimpleLinkProps = {
  children: ReactNode
  href: string
  className?: string
  arrow?: boolean
  drawer?: boolean
  effect?: string
  onMouseEnter?: (event: MouseEvent<HTMLAnchorElement>) => void
  onMouseLeave?: (event: MouseEvent<HTMLAnchorElement>) => void
  onDrawerClick?: () => void
}

export const SimpleLink = (props: SimpleLinkProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const NextIcon = isHovered
    ? Icon[IconEnum.ArrowCircleRightOutlined]
    : Icon[IconEnum.ArrowCircleRight]

  const handleMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(true)
    if (props.onMouseEnter) {
      props.onMouseEnter(event)
    }
  }

  const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(false)
    if (props.onMouseLeave) {
      props.onMouseLeave(event)
    }
  }

  const handleDrawerClick = () => {
    if (props.onDrawerClick) {
      props.onDrawerClick()
    }
  }

  return (
    <div className={`${styleModule['simple-link']}`}>
      {props.drawer ? (
        <div className={styleModule['drawer']} onClick={handleDrawerClick}>
          <span
            className={`${styleModule['text']} ${
              styleModule[props.effect ?? 'line']
            }`}
          >
            {props.children}
          </span>
          <span className={`${styleModule['dli-plus']}`} />
        </div>
      ) : (
        <a
          href={props.href}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span
            className={`${styleModule['text']} ${
              styleModule[props.effect ?? 'line']
            }`}
          >
            {props.children}
          </span>
          <span
            className={`${styleModule['icon']} ${
              styleModule[props.effect ?? 'line']
            }`}
          >
            {props.arrow && <NextIcon />}
          </span>
        </a>
      )}
    </div>
  )
}
