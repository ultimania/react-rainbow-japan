import React, { ReactNode, useState } from 'react'
import { IconEnum } from '../../Types'
import { Icon } from '../Icon'
import { SimpleLink } from './SimpleLink'

type ShowAllLinkProps = {
  children: ReactNode
  href?: string
}

export const ShowAllLink = (props: ShowAllLinkProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const NextIcon = isHovered
    ? Icon[IconEnum.ArrowCircleRightOutlined]
    : Icon[IconEnum.ArrowCircleRight]

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className="show-all-link">
      <SimpleLink
        href={props.href ?? '/dummy'}
        className="link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text">{props.children}</div>
        <div className="next-icon">
          <NextIcon fontSize="large" />
        </div>
      </SimpleLink>
    </div>
  )
}
