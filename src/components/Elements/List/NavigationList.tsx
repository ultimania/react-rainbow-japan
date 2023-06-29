import React, { useState } from 'react'
import { SimpleLink } from '../Link'
import styleModule from './NavigationList.module.scss'

type NavigationItem = {
  name: string
  href: string
  subItems?: NavigationItem[]
}

type NavigationListProps = {
  items: NavigationItem[]
  drawer?: boolean
}

export const NavigationList = (props: NavigationListProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false)

  const handleHumburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen)
  }

  const handleItemHover = (index: number | null) => {
    setHoverIndex(index)
  }

  const renderSubMenu = (item: NavigationItem, navIndex: number) => {
    return (
      item.subItems && (
        <>
          <div
            className={`${styleModule['submenu']}`}
            onMouseEnter={() => handleItemHover(navIndex)}
          >
            <>
              <div className={styleModule['title']}>{`${item.name}TOP`}</div>
              <div className={styleModule['nav-items']}>
                {item.subItems?.map((subItem, index) => (
                  <div className={styleModule['nav-item']} key={index}>
                    <SimpleLink href={subItem.href} arrow>
                      {subItem.name}
                    </SimpleLink>
                  </div>
                ))}
              </div>
            </>
          </div>
        </>
      )
    )
  }

  return (
    <nav
      className={`${styleModule['main']} ${
        isHamburgerOpen ? styleModule['active'] : ''
      }`}
    >
      <ul
        className={`${isHamburgerOpen ? styleModule['active'] : ''} ${
          props.drawer ? styleModule['drawer'] : styleModule['non-drawer']
        }`}
      >
        {props.items.map((item, index) => (
          <li
            className={`${styleModule['nav-item']} ${hoverIndex === index ? styleModule['hoverd'] : ''}`}
            key={index}
            onMouseEnter={() => handleItemHover(index)}
            onMouseLeave={() => handleItemHover(null)}
          >
            <SimpleLink
              href={item.href}
              drawer={props.drawer && item.subItems ? true : false}
              onDrawerClick={()=>setHoverIndex(hoverIndex === index ? null : index)}
            >
              {item.name}
            </SimpleLink>
            {renderSubMenu(item, index)}
          </li>
        ))}
      </ul>
      {props.drawer ? (
        <button
          className={styleModule['hamburger']}
          onClick={handleHumburgerClick}
        >
          <span
            className={`${styleModule['bar']} ${
              isHamburgerOpen ? styleModule['active'] : ''
            }`}
          ></span>
          <span
            className={`${styleModule['bar']} ${
              isHamburgerOpen ? styleModule['active'] : ''
            }`}
          ></span>
          <span
            className={`${styleModule['bar']} ${
              isHamburgerOpen ? styleModule['active'] : ''
            }`}
          ></span>
        </button>
      ) : (
        ''
      )}
    </nav>
  )
}
