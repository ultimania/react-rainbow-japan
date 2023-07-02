import React, { ReactNode } from 'react'
import { IconEnum } from '../../../assets/Types'
import { Icon } from '../Icon'
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

  const buttonContent = (
    <div
      className={`${props.className ?? ''} ${styleModule['button']} ${
        props.outline && styleModule['outline']
      }`}
    >
      {props.icon && <IconText fontSize="small" />}
      <span
        className={`${styleModule['button-text']} ${
          props.minimum ? styleModule['minimum'] : ''
        }`}
      >
        {props.children}
      </span>
    </div>
  )

  if (props.href) {
    return <a href={props.href}>{buttonContent}</a>
  } else {
    return buttonContent
  }
}
