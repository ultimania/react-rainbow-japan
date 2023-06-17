import React, { ReactNode } from 'react'
import { IconEnum } from '../../Types'
import { Icon } from '../Icon'

type ShowAllLinkProps = {
  children: ReactNode
  href?: string
}

export const ShowAllLink = (props: ShowAllLinkProps) => {
  const NextIcon = Icon[IconEnum.ArrowCircleRight]
  return (
    <a href={props.href ?? '/dummy'} className="link contents-show-all">
      <span className="text">
        {props.children}
      </span> 
      <NextIcon fontSize='large'/>
    </a>
  )
}
