import React, { ReactNode, MouseEvent } from 'react'

type SimpleLinkProps = {
  children: ReactNode
  href: string
  className?: string
  hoverEffect?: string
  onMouseEnter?: (event: MouseEvent<HTMLAnchorElement>) => void
  onMouseLeave?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export const SimpleLink = (props: SimpleLinkProps) => {

  const handleMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    if (props.onMouseEnter) {
      props.onMouseEnter(event);
    }
  };

  const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    if (props.onMouseLeave) {
      props.onMouseLeave(event);
    }
  };

  return (
    <a href={props.href} className={`simple-link ${props.className} hover-effect-${props.hoverEffect ?? 'none'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {props.children}
    </a>
  )
}