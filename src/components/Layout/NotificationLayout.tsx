import React from 'react'
import { ContentsTitle } from '../Elements/Label'
import { InformationList } from '../Elements/List'
import { ShowAllLink } from '../Elements/Link'
import {
  informations,
} from '../../data'
import styleModule from './NotificationLayout.module.scss'
import styleCommonModule from './App.module.scss'

export const NotificationLayout = () => {
  return (
    <div id={styleModule["layout-notification"]} className={styleCommonModule["contents"]}>
      <ContentsTitle title="Notifications" />
      <div className={styleModule["contents-main"]}>
        <InformationList contents={informations} />
      </div>
      <ShowAllLink>View all notifications</ShowAllLink>
    </div>
  )
}
