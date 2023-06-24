import React, { useState } from 'react'
import { SimpleLink } from '../Link'
import { IconEnum } from '../../Types'
import { Icon } from '../Icon'

type NavigationItem = {
  name: string
  href: string
  subItems?: NavigationItem[]
}

type NavigationListProps = {
  items: NavigationItem[]
}

export const NavigationList = (props: NavigationListProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const NextIcon = Icon[IconEnum.ArrowRight]

  const handleItemHover = (index: number | null) => {
    setHoverIndex(index)
  }

  const renderSubMenu = (item: NavigationItem) => {
    return (
      item.subItems && (
        <>
          <div className="submenu">
            <div className="title">{`${item.name}TOP`}</div>
            <div className="nav-items">
              {item.subItems?.map((subItem, index) => (
                <div className="nav-item" key={index}>
                  <SimpleLink href={subItem.href}>
                    <span className="text">{subItem.name}</span>
                    <span className="icon">
                      <NextIcon />
                    </span>
                  </SimpleLink>
                </div>
              ))}
            </div>
          </div>
        </>
      )
    )
  }

  return (
    <ul className="nav-main">
      {props.items.map((item, index) => (
        <li
          className="nav-item"
          key={index}
          onMouseEnter={() => handleItemHover(index)}
          onMouseLeave={() => handleItemHover(null)}
        >
          <SimpleLink href={item.href} hoverEffect="line">
            {item.name}
          </SimpleLink>
          {hoverIndex === index && renderSubMenu(item)}
        </li>
      ))}
    </ul>
  )
}
