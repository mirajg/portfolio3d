
"use client"
import React, { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import CodingStory from '@/components/CodingStory'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import BootingLoader from '@/components/BootingLoader'

const page = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <BootingLoader onComplete={() => setLoading(false)} />}
      {!loading &&
        <>
          <Header />
          <main style={{ minHeight: '100dvh', overflowY: 'auto', }}>
            <Hero />
            <Skills />
            <CodingStory />
            <Projects />
            <Contact />
          </main>
        </>
      }
    </div>
  )
}

export default page