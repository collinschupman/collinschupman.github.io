'use client'

import MusicCard from './MusicCard'

const music = [
  {
    title: 'Utopian Voids Fall 2025 Compilation',
    description: 'No Exits featured on this compilation',
    image: '/utopianVoidsComp.png',
    link: 'https://utopianvoids.bandcamp.com/album/fall-2025-compilation',
    year: '2025',
  },
  {
    title: 'Modernized',
    description: 'Single track from No Exits',
    image: '/noexitsModernized.png',
    link: 'https://noexitsla.bandcamp.com/track/modernized',
    year: '2021',
  },
  {
    title: 'No Exits EP',
    description: 'Full EP from No Exits',
    image: '/noexitsEp1.png',
    link: 'https://noexitsla.bandcamp.com/album/no-exits-ep',
    year: '2020',
  },
  {
    title: 'Fortune',
    description: 'Single track from No Exits',
    image: '/fortune.png',
    link: 'https://noexitsla.bandcamp.com/track/fortune',
    year: '',
  },
  {
    title: 'Shapes',
    description: 'Single track from No Exits',
    image: '/shapes.png',
    link: 'https://noexitsla.bandcamp.com/track/shapes',
    year: '',
  },
  {
    title: 'Catatonic',
    description: 'Single track from No Exits',
    image: '/catatonic.png',
    link: 'https://noexitsla.bandcamp.com/track/catatonic',
    year: '',
  },
  {
    title: 'No Exits Demos',
    description: 'Demo recordings from No Exits',
    image: '/demos.png',
    link: 'https://noexitsla.bandcamp.com/album/demos',
    year: '',
  },
  {
    title: 'Loveless Colorado: Sunrise Single',
    description: 'Single - bass guitar contribution',
    image: '/loveless.png',
    link: 'https://lovelesscolorado.bandcamp.com/track/sunrise-2',
    year: '2017',
  },
  {
    title: 'Kingling',
    description: 'Indie Rock EP - bass, guitar, and lyrics',
    image: '/kingling.png',
    link: 'https://kingling.bandcamp.com/album/kingling',
    year: '2016',
  },
]

export default function MusicGrid() {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', 
      gap: '2rem', 
      justifyContent: 'center' 
    }}>
      {music.map((item, index) => (
        <MusicCard key={index} {...item} />
      ))}
    </div>
  )
}
