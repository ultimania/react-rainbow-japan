import React from 'react'
import { SimpleLink } from '../Link'

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
    <div className="notifications-list">
      {props.contents.map((content, index) => {
        return (
          <div className="row" key={index}>
            <span className="date">{content.date}</span>
            {content.url ? (
              <SimpleLink className="title" href={content.url} hoverEffect='line'>
                {content.title}
              </SimpleLink>
            ) : (
              <span className="title">{content.title}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}
