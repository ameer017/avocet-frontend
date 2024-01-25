import React from 'react'
import Image from 'next/image'

// INTERNAL IMPORTS
import Style from "./Notification.module.css"
import images from "../../../img"

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
        <div className={Style.notification_box}>
          <div className={Style.notification_box_img}>
            <Image src={images.avatar} alt='Profile Image' width={50} height={50} className={Style.notification_box_img}/>
          </div>
          <div className={Style.notification_box_info}>
            <h4>John Doe</h4>
            <p>Hello world...</p>
            <small>3 minutes ago</small>
          </div>
          <span className={Style.notification_box_new}></span>
        </div>
    </div>
  )
}

export default Notification