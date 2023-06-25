import React from 'react'
import { SimpleLink } from '../Link'
import styleModule from './InformationList.module.scss'

type Information = {
  date: string
  title: string
  url?: string
}

type InformationListProps = {
  contents: Information[]
}

export const InformationList = (props: InformationListProps) => {
  return (
    <div className={styleModule['information-list']}>
      {props.contents.map((content, index) => {
        return (
          <div className={styleModule['row']} key={index}>
            <div className={styleModule['date']}>{content.date}</div>
            <div className={styleModule['title']}>
              {content.url ? (
                <SimpleLink arrow href={content.url}>{content.title}</SimpleLink>
              ) : (
                content.title
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
