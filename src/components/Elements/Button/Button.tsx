import React, { ReactHTMLElement, ReactNode, useEffect, useState } from 'react'
import { IconEnum } from '../../Types'
import { Icon } from '../Icon'

type ButtonProps = {
  children?: ReactNode
  icon?: IconEnum
  url?: string
  className?: string
  outline?: boolean
}

export const Button = (props: ButtonProps) => {
  const IconText = props.icon ? Icon[props.icon] : Icon.undefined ;

  return (
    <a className={`button ${props.outline && 'outline'}`} href={props.url ?? '/dummy'}>
      {props.icon && <IconText fontSize='small' />}
      <span className={`button-text ${props.className ?? ''}`}>{props.children}</span>
    </a>
  );
}