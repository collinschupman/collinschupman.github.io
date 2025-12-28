'use client'

import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Call of Duty®: Black Ops 7',
    description: 'Latest entry in the iconic Call of Duty franchise.',
    tags: ['C++', 'Audio Programming', 'Game Development', '2025'],
    category: 'gaming' as const,
    image: '/bo7Square.png',
    link: 'https://www.callofduty.com/',
  },
  {
    title: 'Call of Duty®: Black Ops 6',
    description: 'One of 2024\'s best-selling AAA titles.',
    tags: ['C++', 'Audio Programming', 'Game Development', '2024'],
    category: 'gaming' as const,
    image: '/bo6Square.jpg',
    link: 'https://www.callofduty.com/',
  },
  {
    title: 'Output Creator',
    description: 'Output Creator is a music creation desktop app where new ideas start with incredible sounds.',
    tags: ['C++', 'Audio Programming', 'Pro Audio', 'Desktop Audio Software'],
    category: 'pro-audio' as const,
    image: '/creator.png',
    link: 'https://output.com/products/creator',
  },
  {
    title: 'Thermal',
    description: 'Thermal makes it easy to experiment and dial in new distortion sounds.',
    tags: ['C++', 'Audio Programming', 'Pro Audio', 'Audio Plugins'],
    category: 'pro-audio' as const,
    image: '/thermalSquare.jpg',
    link: 'https://output.com/products/thermal',
  },
  {
    title: 'Portal',
    description: 'With Portal, granular synthesis takes your sounds to another dimension.',
    tags: ['C++', 'Audio Programming', 'Pro Audio', 'Audio Plugins'],
    category: 'pro-audio' as const,
    image: '/portalSquare.jpg',
    link: 'https://output.com/products/portal',
  },
  {
    title: 'Output Arcade',
    description: 'Output Arcade is the hitmaker’s go-to plugin for inspiration. Produce with unlimited pro samples and instruments that you can play, shape, and tweak.',
    tags: ['C++', 'Audio Programming', 'Pro Audio', 'Audio Plugins'],
    category: 'gaming' as const,
    image: '/arcadeSquare.jpg',
  },
  {
    title: 'Movement',
    description: 'Your sounds, insane rhythms. Add extreme effects to any input in real time, in the studio or on the stage.',
    tags: ['C++', 'Audio Programming', 'Pro Audio', 'Audio Plugins'],
    category: 'pro-audio' as const,
    image: '/movementSquare.png',
    link: 'https://output.com/products/movement',
  },
  {
    title: 'Lightweave',
    description: 'Interactive light installation project.',
    tags: ['Interactive Art', 'Technology'],
    category: 'gaming' as const,
    image: '/lightweave.png',
    link: 'https://www.futureforms.us/lightweave',
  },
  {
    title: 'Murmur Wall',
    description: 'Interactive audio-visual wall installation.',
    tags: ['Interactive Art', 'Audio-Visual'],
    category: 'gaming' as const,
    image: '/murmurwall.png',
    link: 'https://www.futureforms.us/murmur-wall',
  },
  {
    title: '4480 Pixels in Space',
    description: 'Large-scale pixel art installation.',
    tags: ['Interactive Art', 'Visual'],
    category: 'gaming' as const,
    image: '/4800.png',
    link: 'https://www.futureforms.us/4480-pixels-in-space',
  },
  {
    title: 'Bitstream',
    description: 'Data flow visualization project.',
    tags: ['Data Art', 'Interactive'],
    category: 'gaming' as const,
    image: '/bitstream.png',
    link: 'https://www.futureforms.us/bitstream',
  },
  {
    title: 'Data Lantern',
    description: 'Interactive data illumination installation.',
    tags: ['Data Art', 'Interactive'],
    category: 'gaming' as const,
    image: '/datalantern.png',
    link: 'https://www.futureforms.us/data-lantern',
  },
]

export default function ProjectsGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 280px)', gap: '2rem', justifyContent: 'center' }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}
