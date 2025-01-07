import MainSerrvices from '@/app/components/(reusables)/(sections)/MainServices'
import LandingHero from '@/app/components/static/LandingHero'
import Herosection from '@/app/components/static/LandingHero2'
import React from 'react'

export default function Home() {
  return (
    <main className=''>
        <LandingHero/>
        <Herosection/>
        <MainSerrvices/>
    </main>
  )
}
