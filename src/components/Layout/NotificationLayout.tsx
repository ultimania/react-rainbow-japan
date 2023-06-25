import React from 'react'
import { ContentsTitle } from '../Elements/Label'
import { InformationList } from '../Elements/List'
import { ShowAllLink } from '../Elements/Link'
import {
  informations,
} from '../../data'

export const NotificationLayout = () => {
  return (
    <div id="layout-notification" className="contents">
      <ContentsTitle title="Notifications" />
      <div className="contents-main">
        <InformationList contents={informations} />
      </div>
      <ShowAllLink>View all notifications</ShowAllLink>
    </div>
  )
}
