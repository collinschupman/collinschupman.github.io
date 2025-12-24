'use client'

import WorkCard from './WorkCard'

const work = [
  {
    title: 'High Moon Studios',
    description: 'Game development studio',
    image: '/highMoonStudios.png',
  },
  {
    title: 'Output',
    description: 'Professional audio software development',
    image: '/output.png',
  },
  {
    title: 'Future Forms Lab',
    description: 'Design and development work',
    image: '/futureForms.jpg',
  },
  {
    title: 'Float Hybrid',
    description: 'Technology and development',
    image: '/floatHybridjpg.jpg',
  },
  {
    title: 'Yeti LLC',
    description: 'Software development',
    image: '/yetijpg.jpg',
  },
  {
    title: 'Gas Powered Games',
    description: 'Game development',
    image: '/gasPoweredGames.jpg',
  },
]

export default function WorkGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 280px)', gap: '2rem', justifyContent: 'center' }}>
      {work.map((job, index) => (
        <WorkCard key={index} {...job} />
      ))}
    </div>
  )
}
