'use client'

import ActivityCard from './ActivityCard'

const activities = [
  {
    title: 'Book Contribution',
    description: 'Contributed a chapter on writing alias-free oscillators for real time synthesis in game engines',
    image: '/book.jpg',
    link: 'https://www.routledge.com/Game-Audio-Programming-5-Principles-and-Practices/Somberg/p/book/9781032852850',
    year: '2025',
  },
  {
    title: 'ADC Speaker',
    description: 'Mentor for budding audio programmers',
    image: '/adc.png',
    link: 'https://audio.dev/mentorship/',
    year: '2023-Present',
  },
  {
    title: 'Kadenze Course TA',
    description: 'Teaching Assistant for Output\'s course on creating audio plugins',
    image: '/kadenze.png',
    link: 'https://www.kadenze.com/programs/output-teaches-creating-audio-plugins-with-c-and-juce',
    year: '2019',
  },
  {
    title: 'Teaching at Gray Area',
    description: 'Mentor for creative coding bootcamp',
    image: '/grayArea.png',
    link: 'https://grayarea.org/course/creative-code-intensive/',
    year: '2017',
  },
]

export default function ActivitiesGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 280px)', gap: '2rem', justifyContent: 'center' }}>
      {activities.map((activity, index) => (
        <ActivityCard key={index} {...activity} />
      ))}
    </div>
  )
}
