import React from 'react'

// INTERNAL IMPORTS 
import Style from "../styles/searchPage.module.css"
import {Slider} from "../components/componentIndex"
import { SearchBar } from '../SearchPage/searchBarIndex'
import {Filter} from '../components/componentIndex'
import {CardTwo, Banner} from "../collectionPage/collectionIndex"
import images from "../img"

const searchPage = () => {

    const collectionArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
    ]

  return (
    <div className={Style.searchPage}>
        <Banner bannerImage={images.creatorbackground2}/>
        <SearchBar/>
        <Filter/>
        <CardTwo NFTData={collectionArray}/>
        <Slider/>
       

    </div>
  )
}

export default searchPage