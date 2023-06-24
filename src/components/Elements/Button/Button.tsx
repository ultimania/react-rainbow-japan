import React, { ReactNode } from 'react'
import { IconEnum } from '../../Types'
import { Icon } from '../Icon'
import { SimpleLink } from '../Link'

type ButtonProps = {
  children?: ReactNode
  icon?: IconEnum
  url?: string
  className?: string
  outline?: boolean
}

export const Button = (props: ButtonProps) => {
  const IconText = props.icon ? Icon[props.icon] : Icon.undefined

  return (
    <SimpleLink
      className={`button ${props.outline && 'outline'}`}
      href={props.url ?? '/dummy'}
      hoverEffect='button'
    >
      {props.icon && <IconText fontSize="small" />}
      <span className={`button-text ${props.className ?? ''}`}>
        {props.children}
      </span>
    </SimpleLink>
  )
}
