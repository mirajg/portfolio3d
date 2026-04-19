
import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CodingWrapper from '@/components/CodingWrapper'
import Skills from '@/components/Skills'

const page = () => {
  return (
    <div>
      <Header />
      <main className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto">
        {/* <Hero /> */}
        <CodingWrapper />
        <Skills />
      </main>

    </div>
  )
}

export default page