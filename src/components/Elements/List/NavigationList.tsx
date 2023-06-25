import React, { useState } from 'react'
import { SimpleLink } from '../Link'
import { IconEnum } from '../../Types'
import { Icon } from '../Icon'
import styleModule from './NavigationList.module.scss'

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

  const renderSubMenu = (item: NavigationItem, navIndex: number) => {
    return (
      item.subItems && (
        <>
          <div
            className={`${styleModule["submenu"]} ${hoverIndex === navIndex ? styleModule["hoverd"] : ''}`}
            onMouseEnter={() => handleItemHover(navIndex)}
          >
            {hoverIndex === navIndex && (
              <>
                <div className={styleModule["title"]}>{`${item.name}TOP`}</div>
                <div className={styleModule["nav-items"]}>
                  {item.subItems?.map((subItem, index) => (
                    <div className={styleModule["nav-item"]} key={index}>
                      <SimpleLink href={subItem.href}>
                        <span className="text">{subItem.name}</span>
                        <span className="icon">
                          <NextIcon />
                        </span>
                      </SimpleLink>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )
    )
  }

  return (
    <ul className={styleModule["nav-main"]}>
      {props.items.map((item, index) => (
        <li
          className={styleModule["nav-item"]}
          key={index}
          onMouseEnter={() => handleItemHover(index)}
          onMouseLeave={() => handleItemHover(null)}
        >
          <SimpleLink href={item.href} hoverEffect="line">
            {item.name}
          </SimpleLink>
          {renderSubMenu(item, index)}
        </li>
      ))}
    </ul>
  )
}
