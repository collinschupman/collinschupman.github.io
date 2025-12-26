'use client'

interface ActivityCardProps {
  title: string
  description: string
  image?: string
  link?: string
}

export default function ActivityCard({ title, description, image, link }: ActivityCardProps) {
  const cardContent = (
    <div style={{ width: '100%' }}>
      <style jsx>{`
        .activity-card {
          position: relative;
          cursor: pointer;
        }
        .activity-image {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 0 0 8px 8px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          transition: box-shadow 0.3s;
        }
        .activity-image:hover {
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        .activity-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          opacity: 0;
          transition: all 0.3s;
        }
        .activity-image:hover .activity-overlay {
          background-color: rgba(0, 0, 0, 0.85);
          opacity: 1;
        }
        .activity-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: black;
          text-align: center;
          margin-top: 0;
          transition: color 0.3s;
          padding: 0.5rem;
          background-color: #f9fafb;
          border-radius: 6px 6px 0 0;
          border: 1px solid #e5e7eb;
          border-bottom: none;
        }
        .activity-card:hover .activity-title {
          color: #2563eb;
          background-color: #eff6ff;
        }
      `}</style>
      <div className="activity-card" style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}>
        <h3 className="activity-title">{title}</h3>
        <div className="activity-image">
          {image ? (
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>No image</div>
          )}
          <div className="activity-overlay">
            <p style={{ fontSize: '0.875rem', color: 'white', textAlign: 'center', lineHeight: '1.5' }}>{description}</p>
            {link && (
              <p style={{ fontSize: '0.75rem', color: '#60a5fa', marginTop: '0.75rem' }}>Click to learn more →</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
        {cardContent}
      </a>
    )
  }

  return cardContent
}
