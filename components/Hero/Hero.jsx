import React from 'react'
import Image from 'next/image'
import Style from "./Hero.module.css"
import Button from '../Button/Button'
import images from "../../img"

const Hero = () => {
  return (
    <div className={Style.heroSection}>
        <div className={Style.heroSection_box}>
            <div className={Style.heroSection_box_left}>
                <h1>Discover, collect, and sell NFTs 🖼️</h1>
                <p>Discover the most outstanding NFTs in all topic 
                    your NFTs and sell them
                </p>

                 <Button btnName="Start Your search"/> 
            </div>
            <div className={Style.heroSection_box_right}>
                <Image src={images.hero} alt="Hero section" width={600} height={600}/>
            </div>
        </div>
    </div>
  )
}

export default Hero