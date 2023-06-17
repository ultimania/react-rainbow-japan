import React from 'react'
import { SimpleLink } from '../Link'

type NavigationItem = {
  name: string
  href: string
}

type NavigationListProps = {
  items: NavigationItem[];
}

export const NavigationList = (props: NavigationListProps) => {
  return (
    <ul className="nav-main">
      {props.items.map((item, index) => (
        <li className="nav-item" key={index}>
          <SimpleLink href={item.href}>{item.name}</SimpleLink>
        </li>
      ))}
    </ul>
  )
}
