import React, { ReactNode } from 'react'

type ContentsTitleProps = {
  children?: ReactNode
  title: string
}

export const ContentsTitle = (props: ContentsTitleProps) => {
  return (
    <>
      <div className="contents-title">
        <div className="title">{props.title}</div>
        <div className="description">{props.children}</div>
      </div>
    </>
  )
}
