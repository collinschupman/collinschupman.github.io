'use client'

import MusicCard from './MusicCard'

const music = [
  {
    title: 'No Exits EP',
    description: 'Full EP from No Exits',
    image: '/noexitsEp1.png',
    link: 'https://noexitsla.bandcamp.com/album/no-exits-ep',
  },
  {
    title: 'Modernized',
    description: 'Single track from No Exits',
    image: '/noexitsModernized.png',
    link: 'https://noexitsla.bandcamp.com/track/modernized',
  },
  {
    title: 'Utopian Voids Fall 2025 Compilation',
    description: 'No Exits featured on this compilation',
    image: '/utopianVoidsComp.png',
    link: 'https://utopianvoids.bandcamp.com/album/fall-2025-compilation',
  },
]

export default function MusicGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 280px)', gap: '2rem', justifyContent: 'center' }}>
      {music.map((item, index) => (
        <MusicCard key={index} {...item} />
      ))}
    </div>
  )
}
