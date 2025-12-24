'use client'

import ActivityCard from './ActivityCard'

const activities = [
  {
    title: 'Book Contribution',
    description: 'Contributed to audio programming literature',
    image: '/book.jpg',
  },
  {
    title: 'Teaching at Gray Area',
    description: 'Instructor teaching audio programming and creative coding',
    image: '/grayArea.png',
  },
  {
    title: 'ADC Speaker',
    description: 'Presented at Audio Developer Conference',
    image: '/adc.png',
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
