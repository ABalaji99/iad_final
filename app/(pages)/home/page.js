import MainSerrvices from '@/app/components/(reusables)/(sections)/MainServices'
import LandingHero from '@/app/components/static/LandingHero'
import React from 'react'

export default function Home() {
  return (
    <main className=''>
        <LandingHero/>
        <MainSerrvices/>
    </main>
  )
}
