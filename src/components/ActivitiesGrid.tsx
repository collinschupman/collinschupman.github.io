'use client'

import ActivityCard from './ActivityCard'

const activities = [
  {
    title: 'Book Contribution',
    description: 'Contributed to audio programming literature',
    image: '/book.jpg',
    year: '2025',
  },
  {
    title: 'ADC Speaker',
    description: 'Presented at Audio Developer Conference',
    image: '/adc.png',
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
    description: 'Instructor teaching audio programming and creative coding',
    image: '/grayArea.png',
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
