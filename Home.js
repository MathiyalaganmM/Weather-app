import React from 'react'
import Lottie from 'lottie-react';
import anime from './images/animation.json'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <p >Welcome to our weather website, where we believe that being prepared for any forecast is the key to embracing every day with confidence. Whether the sun graces the skies or raindrops dance upon your umbrella, we are here to keep you informed. Our mission is to provide you with accurate and up-to-date weather data, empowering you to plan your activities, dress for the occasion, and seize every moment with ease.</p>
      <Lottie animationData={anime} className='animation1'/>

    </div>
  )
}
