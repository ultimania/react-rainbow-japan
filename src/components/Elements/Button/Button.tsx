import React, { ReactNode } from 'react'
import { IconEnum } from '../../Types'
import { Icon } from '../Icon'
import { SimpleLink } from '../Link'
import styleModule from './Button.module.scss'

type ButtonProps = {
  children?: ReactNode
  icon?: IconEnum
  href?: string
  className?: string
  outline?: boolean
  minimum?: boolean
}

export const Button = (props: ButtonProps) => {
  const IconText = props.icon ? Icon[props.icon] : Icon.undefined

  return (
    <div className={props.className ?? ''}>
      <SimpleLink
        className={`${styleModule['button']} ${
          props.outline && styleModule['outline']
        }`}
        href={props.href ?? '/dummy'}
        hoverEffect="button"
      >
        {props.icon && <IconText fontSize="small" />}
        <span className={`${styleModule['button-text']} ${props.minimum ? styleModule['minimum'] : ''}`}>{props.children}</span>
      </SimpleLink>
    </div>
  )
}
