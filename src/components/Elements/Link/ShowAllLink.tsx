import React, { ReactNode } from 'react'
import { IconEnum } from '../../Types'
import { Icon } from '../Icon'
import { SimpleLink } from './SimpleLink'

type ShowAllLinkProps = {
  children: ReactNode
  href?: string
}

export const ShowAllLink = (props: ShowAllLinkProps) => {
  const NextIcon = Icon[IconEnum.ArrowCircleRight]
  return (
    <div className="show-all-link">
      <SimpleLink
        href={props.href ?? '/dummy'}
        className="link"
      >
        <div className="text">{props.children}</div>
        <div className="next-icon">
          <NextIcon fontSize="large"/>
        </div>
      </SimpleLink>
    </div>
  )
}
