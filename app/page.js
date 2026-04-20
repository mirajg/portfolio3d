
import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CodingWrapper from '@/components/CodingWrapper'
import Skills from '@/components/Skills'
import CodingStory from '@/components/CodingStory'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const page = () => {

  return (
    <div>
      <Header />
      <main style={{ minHeight: '100dvh', overflowY: 'auto', }}>
        {/* <Hero /> */}
        <Skills />
        <CodingWrapper />
        {/* <CodingStory /> */}
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default page