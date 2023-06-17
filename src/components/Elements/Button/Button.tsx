import React, { ReactHTMLElement, ReactNode, useEffect, useState } from 'react'
import { IconEnum } from '../../Types'
import { Icon } from '../Icon'

interface ButtonProps{
  children: ReactNode
  icon: IconEnum
  url: string
}

export const Button = (props: ButtonProps) => {
  const IconText = Icon[props.icon]
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

  return (
    <a className="button" href={props.url}>
      <span className="button-icon">
        <IconText fontSize='small' />
      </span>
      <span className={`button-text ${isScrolled ? 'minimum' : ''}`}>{props.children}</span>
    </a>
  );
}