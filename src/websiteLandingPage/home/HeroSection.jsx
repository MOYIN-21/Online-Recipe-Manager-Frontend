import React from 'react'
import Chicken from '../../assets/PastaDish.png'
import ButterChicken from '../../assets/ButterChicken.png'
import spice from '../../assets/spice.png'
import Salad from '../../assets/MushroomSalad.png'

const HeroSection = () => {
  return (
    <div className='justify-between pt-5 md:pt-20 lg:pt-40 flex'>

      <div className='flex-col flex mx-auto max-w-screen-xl lg:px- sm:px-10'>
      <p className="md:text-7xl md:justify-center md:flex-col text-5xl font-serif top-0 text-center md:text-left leading-tight font-bold">
        <span className='text-orange-400 '>"FlavorFul
        </span> Fare: <br/> Exploring 
        <span className='text-orange-400'> Culinary
        </span> <br />
        <span className='text-orange-400 text-bold'>Delights</span>"
      </p>
      <p className="pt-10 sm:text-xl text-center md:text-left tracking-wider leading-relaxed">
          Where Taste Buds Are Tantalized And Culinary Horizons <br />
          Expanded This Websites Is A Treasure Trove For Food <br /> 
          Enthusiasts, Offering A Diverse Array Of Recipes, Cooking Tips, And  Culinary Insights
      </p>
      </div>
        <div className="hidden lg:block">
            <div>
                <img className='justify-end lg:max-w-1/2 xl:max-w-1/3 ' src={Chicken} alt=""/>
            </div>
            <div>
                <img className='ml-18 lg:max-w-1/2 xl:max-w-1/3 ' src={spice} alt=""/>
            </div>
            <div className="ml-52 mt-[-60px] w-36 mr-2 hidden lg:block lg:max-w-1/2 xl:max-w-1/3">
                <img src={ButterChicken} alt=""/>
            </div>
            {/*<div>*/}
            {/*    <img className='ml-52 mt-[-60px] w-36 mr-2 lg:max-w-1/2 xl:max-w-1/3  ' src={ButterChicken} alt=""/>*/}
            {/*</div>*/}
            <div>
                <img className='ml-72 mt-[-80px] w-72 lg:max-w-1/2 xl:max-w-1/3 lg:block hidden ' src={Salad} alt=""/>
            </div>
        </div>


    </div>
  )
}

export default HeroSection