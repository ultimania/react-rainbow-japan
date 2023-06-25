import React, { ReactNode } from 'react'
import { SimpleLink } from './SimpleLink'
import styleModule from './ShowAllLink.module.scss'

type ShowAllLinkProps = {
  children: ReactNode
  href?: string
}

export const ShowAllLink = (props: ShowAllLinkProps) => {
  return (
    <div className={styleModule['show-all-link']}>
      <div className={styleModule['link']}>
        <SimpleLink
          href={props.href ?? '/dummy'}
          arrow
        >
          <div className="text">{props.children}</div>
        </SimpleLink>
      </div>
    </div>
  )
}
