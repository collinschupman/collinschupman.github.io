'use client'

import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Call of Duty®: Black Ops 7',
    description: 'Latest entry in the iconic Call of Duty franchise with advanced audio systems.',
    tags: ['C++', 'Audio Programming', 'Game Development', '2025'],
    category: 'gaming' as const,
    image: '/bo7Square.png',
    link: 'https://www.callofduty.com/',
  },
  {
    title: 'Call of Duty®: Black Ops 6',
    description: 'Major AAA title with comprehensive audio implementation and real-time processing.',
    tags: ['C++', 'Audio Systems', 'Game Engine', '2024'],
    category: 'gaming' as const,
    image: '/bo6Square.png',
    link: 'https://www.callofduty.com/',
  },
  {
    title: 'Output Creator',
    description: 'Professional audio plugin for creative sound design and music production.',
    tags: ['C++', 'VST/AU', 'Audio Plugin', 'Pro Audio'],
    category: 'pro-audio' as const,
    image: '/creator.png',
  },
  {
    title: 'Thermal',
    description: 'Advanced thermal audio processing tool for professional workflows.',
    tags: ['Audio Tools', 'Pro Audio', 'C++'],
    category: 'pro-audio' as const,
    image: '/thermal.png',
  },
  {
    title: 'Portal',
    description: 'Audio solution enabling seamless professional audio experiences.',
    tags: ['Audio Platform', 'C++', 'Pro Audio'],
    category: 'pro-audio' as const,
    image: '/portal.png',
  },
  {
    title: 'Output Arcade',
    description: 'Interactive audio experience combining gaming and professional audio.',
    tags: ['Audio Programming', 'Interactive', 'C++'],
    category: 'gaming' as const,
    image: '/arcade.png',
  },
  {
    title: 'Movement',
    description: 'Dynamic audio tool for music and sound design in professional studios.',
    tags: ['Audio Plugin', 'Pro Audio', 'VST/AU'],
    category: 'pro-audio' as const,
    image: '/movement.png',
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
