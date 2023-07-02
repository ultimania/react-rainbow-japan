import React, { useState } from 'react'
import { SimpleLink } from '../Link'
import styleModule from './NavigationList.module.scss'

import type { RootState } from '../../../store'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../../modules/isHamburgerOpenSlice'

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
  const isHamburgerOpen = useSelector((state: RootState) => state.isHamburgerOpen)
  const dispatch = useDispatch()

  const handleItemHover = (index: number | null) => {
    setHoverIndex(index)
  }

  const renderMenuItem = (item: NavigationItem, navIndex: number) => {
    return (
      <>
        <SimpleLink
          href={item.href}
          drawer={"subItems"in item && isHamburgerOpen}
          onDrawerClick={() =>
            setHoverIndex(hoverIndex === navIndex ? null : navIndex)
          }
        >
          {item.name}
        </SimpleLink>
        {item.subItems && (
          <div
            className={`${styleModule['submenu']}`}
            onMouseEnter={() => handleItemHover(navIndex)}
          >
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
          </div>
        )}
      </>
    )
  }

  return (
    <nav
      className={`${styleModule['main']} ${
        isHamburgerOpen && styleModule['active']
      }`}
    >
      <ol className={`${isHamburgerOpen && styleModule['active']}`}>
        {props.items.map((item, index) => (
          <li
            className={`${styleModule['nav-item']} ${
              hoverIndex === index && styleModule['hoverd']
            }`}
            key={index}
            onMouseEnter={() => handleItemHover(index)}
            onMouseLeave={() => handleItemHover(null)}
          >
            {renderMenuItem(item, index)}
          </li>
        ))}
      </ol>
      <button
        className={styleModule['hamburger']}
        onClick={() => dispatch(toggle())}
      >
        {Array.from({ length: 3 }, (_, index) => (
          <span
            className={`${styleModule['bar']} ${
              isHamburgerOpen ? styleModule['active'] : ''
            }`}
            key={index}
          />
        ))}
      </button>
    </nav>
  )
}
