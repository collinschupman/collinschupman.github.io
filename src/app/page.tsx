'use client'

import { useState } from 'react'
import ProjectsGrid from '@/components/ProjectsGrid'
import ActivitiesGrid from '@/components/ActivitiesGrid'
import MusicGrid from '@/components/MusicGrid'

const profileImages = ['/profile.jpg', '/profile2.jpeg', '/profile4.jpg', '/profile5.jpeg', '/profile6.jpeg']

export default function Home() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)

  const handleProfileClick = () => {
    setCurrentProfileIndex((prev) => (prev + 1) % profileImages.length)
  }

  return (
    <div className="text-black min-h-screen" style={{ backgroundColor: '#FAF8F3' }}>
      {/* Hero Section */}
      <section className="mx-auto px-6 pb-32" style={{ maxWidth: '1280px', paddingTop: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '4rem', alignItems: 'start' }}>
          <div style={{ position: 'relative', width: '400px' }}>
            <div 
              className="relative overflow-hidden flex-shrink-0" 
              style={{ width: '400px', height: '400px', borderRadius: '50%', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
            >
              <img
                src={profileImages[currentProfileIndex]}
                alt="Collin Schupman"
                className="w-full h-full object-cover"
                style={{ 
                  transition: 'opacity 0.3s ease-in-out',
                  objectPosition: currentProfileIndex === 1 ? 'center 30%' : 'center center'
                }}
              />
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentProfileIndex((prev) => (prev - 1 + profileImages.length) % profileImages.length)}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
            >
              ‹
            </button>
            <button
              onClick={() => setCurrentProfileIndex((prev) => (prev + 1) % profileImages.length)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
            >
              ›
            </button>

            {/* Dots Indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
              {profileImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProfileIndex(index)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: currentProfileIndex === index ? '#2563eb' : '#d1d5db',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="text-2xl font-bold mb-4">Connect</h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="mailto:collinschupman@gmail.com" className="hover:opacity-70 transition text-blue-600 hover:text-blue-800 hover:underline" title="Email">
                  Email
                </a>
                <a href="https://www.linkedin.com/in/cschupman/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition text-blue-600 hover:text-blue-800 hover:underline" title="LinkedIn">
                  LinkedIn
                </a>
                <a href="https://discord.com/users/collinschupman" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition text-blue-600 hover:text-blue-800 hover:underline" title="Discord">
                  Discord
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">About me</h2>
              <div className="text-base text-gray-700 leading-relaxed" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  Hi, I'm an audio programmer and musician with a deep interest in audio technology across games, tools, and creative software.
                </p>
                <p>
                  I live in Los Angeles and work as a Senior Audio Programmer at <a href="https://www.activision.com/studios/high-moon-studios" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">High Moon Studios</a> on the <a href="https://www.callofduty.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Call of Duty</a> franchise, where I focus on audio rendering, game audio systems, pipelines and tooling, and cross-platform development. Alongside my work in games, I'm an active musician and wear many hats in my band, <a href="https://noexitsla.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">No Exits</a>.
                </p>
                <p>
                  Before working in games, I spent several years developing audio plugins and desktop audio software at <a href="https://output.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Output, Inc.</a> Prior to that, I served as the programming lead on interactive exhibitions for <a href="https://futurecitieslab.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Future Cities Labs</a>, and earlier worked as a contractor for Float Hybrid (now defunct) and <a href="https://www.yeti.co/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Yeti LLC</a>. I began my career as an audio programming intern at Gas Powered Games (now defunct).
                </p>
                <p>
                  I earned my bachelor's degree from the University of Washington's <a href="https://dxarts.washington.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">Digital Arts and Experimental Media (DXARTS)</a> program, with a focus on audio programming, mechatronics, and general computer science.
                </p>
                <p>
                  I have a proven track record of shipping high-performance audio software used by millions of players and creators. My expertise includes C++, real-time audio systems, digital signal processing, game programming, audio tooling, cross-platform applications, and audio plugin development. I'm comfortable working on, and making decisions for, projects operating at a billion-dollar scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="mx-auto" style={{ maxWidth: '1280px', padding: '0 6rem' }}>
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent)' }}></div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-white" style={{ marginTop: '120px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1280px' }}>
          <h2 className="text-3xl font-bold text-center tracking-tight" style={{ marginBottom: '4rem' }}>Projects:</h2>
          <ProjectsGrid />
        </div>
      </section>

      {/* Section Divider */}
      <div className="mx-auto" style={{ maxWidth: '1280px', padding: '0 6rem' }}>
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent)' }}></div>
      </div>

      {/* Activities Section */}
      <section id="activities" className="py-32" style={{ marginTop: '120px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1280px' }}>
          <h2 className="text-3xl font-bold text-center tracking-tight" style={{ marginBottom: '4rem' }}>Education/Outreach:</h2>
          <ActivitiesGrid />
        </div>
      </section>

      {/* Section Divider */}
      <div className="mx-auto" style={{ maxWidth: '1280px', padding: '0 6rem' }}>
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent)' }}></div>
      </div>

      {/* Music Section */}
      <section id="music" className="py-32 bg-white" style={{ marginTop: '120px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1280px' }}>
          <h2 className="text-3xl font-bold text-center tracking-tight" style={{ marginBottom: '4rem' }}>Music:</h2>
          <MusicGrid />
        </div>
      </section>

      {/* Section Divider */}
      <div className="mx-auto" style={{ maxWidth: '1280px', padding: '0 6rem' }}>
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent)' }}></div>
      </div>

      {/* Press Section */}
      <section id="press" className="py-32" style={{ marginTop: '120px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1280px' }}>
          <h2 className="text-3xl font-bold text-center tracking-tight" style={{ marginBottom: '4rem' }}>Press:</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <a 
                  href="https://www.callofduty.com/blog/2024/10/call-of-duty-black-ops-6-dynamic-soundscape-audio-intel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition text-lg"
                >
                  Call of Duty: Black Ops 6 - Dynamic Soundscape Audio Intel
                </a>
              </li>
              <li style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <a 
                  href="https://variety.com/2025/gaming/news/game-audio-network-guild-2026-nominees-1236609132/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition text-lg"
                >
                  Game Audio Network Guild 2026 Nominees - Variety
                </a>
              </li>
              <li style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <a 
                  href="https://embody.co/pages/cod?currency=USD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition text-lg"
                >
                  Embody x Call of Duty Partnership
                </a>
              </li>
              <li style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <a 
                  href="https://www.destroyexist.com/2021/06/no-exits-modernized.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition text-lg"
                >
                  No Exits - Modernized - Destroy//Exist
                </a>
              </li>
              <li>
                <a 
                  href="https://www.engadget.com/2016-07-25-san-francisco-light-art-bay-bridge-lights.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition text-lg"
                >
                  San Francisco Light Art - Bay Bridge Lights - Engadget
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="mx-auto" style={{ maxWidth: '1280px', padding: '0 6rem' }}>
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent)' }}></div>
      </div>

      {/* Currently Section */}
      <section id="currently" className="py-32 bg-white" style={{ marginTop: '120px' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1280px' }}>
          <h2 className="text-3xl font-bold text-center tracking-tight" style={{ marginBottom: '4rem' }}>Currently:</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 600, color: '#374151' }}>Reading: </span>
                <span style={{ color: '#4b5563' }}>Multiplayer Game Programming: Architecting Networked Games</span>
              </li>
              <li style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 600, color: '#374151' }}>Watching: </span>
                <span style={{ color: '#4b5563' }}>PLUR1BUS</span>
              </li>
              <li style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 600, color: '#374151' }}>Playing: </span>
                <span style={{ color: '#4b5563' }}>Hollow Knight: Silksong</span>
              </li>
              <li>
                <span style={{ fontWeight: 600, color: '#374151' }}>Listening To: </span>
                <span style={{ color: '#4b5563' }}>David Bowie: Scary Monsters</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
