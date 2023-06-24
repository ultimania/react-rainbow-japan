import React, { ReactNode } from 'react'

type SimpleLinkProps = {
  children: ReactNode
  href: string
  className?: string
  hoverEffect?: string
}

export const SimpleLink = (props: SimpleLinkProps) => {

  return (
    <a href={props.href} className={`simple-link ${props.className} hover-effect-${props.hoverEffect ?? 'none'}`}>
      {props.children}
    </a>
  )
}