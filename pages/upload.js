import React from 'react'

// INTERNAL IMPORTS
import Style from "../styles/upload.module.css"
import Upload from '../Upload/Upload'

const upload = () => {
  return (
    <div className={Style.uploadNFT}>
        <div className={Style.uploadNFT_box}>
            <div className={Style.uploadNFT_box_heading}>
                <h1>Create New Plastic</h1>
                <p>You can set preferred display name, create your profile URL and manage other personnel settings</p>
            </div>

            <div className={Style.uploadNFT_box_title}>
                <h2>Image, Video, Audio, or 3D Model</h2>
                    <p>Files type supported: JPG, PNG, GIF SVG, MP4, WEBM, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>

            </div>

            <div className={Style.uploadNFT_box_form}>
                <Upload/>

            </div>

        </div>

    </div>
  )
}

export default upload