import React from 'react'
import Chicken from '../../assets/PastaDish.png'
import ButterChicken from '../../assets/ButterChicken.png'
import spice from '../../assets/spice.png'
import Salad from '../../assets/MushroomSalad.png'

const HeroSection = () => {
  return (
    <div className='pt-32 justify-between flex'>

      <div className='flex-col flex mx-auto max-w-screen-xl lg:px-6'>
        <p className='text-6xl px-8 top-0 font-bold font-serif'> <span className='text-orange-400'>
          "FlavorFul </span> Fare: <br/> Exploring <span className='text-orange-400'>Culinary</span> <br /> <span className='text-orange-400 text-bold'>Delights</span>"</p>
        <p className='pt-10 text-lg sm:text-xl '>Where Taste Buds Are Tantalized And Culinary Horizons <br /> Expanded. This Websites Is A Treasure Trove For Food <br /> Enthusiasts, Offering A Diverse Array Of Recipes, Cooking Tips, And  Culinary Insights.</p>
      </div>
      <div>
        <div>
            <img className='grid justify-end ' src={Chicken} alt="" />
        </div>
          <div><img className='mt-[-90px] ml-16 hidden sm:block' src={spice} alt="" /></div>
          <div><img className='ml-72 mt-[-90px] w-44 hidden sm:block' src={ButterChicken} alt="" /></div>
          <div><img className='ml-[400px] mt-[-80px] w-72 hidden sm:block' src={Salad} alt="" /></div>
      </div>

    </div>
  )
}

export default HeroSection