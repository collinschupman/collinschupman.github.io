'use client'

import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  category: 'pro-audio' | 'gaming'
  link?: string
  image?: string
}

export default function ProjectCard({ title, description, tags, category, link, image }: ProjectCardProps) {
  const cardContent = (
    <div style={{ width: '100%' }}>
      <style jsx>{`
        .project-card {
          position: relative;
          cursor: pointer;
        }
        .project-image {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 0 0 8px 8px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          transition: box-shadow 0.3s;
        }
        .project-image:hover {
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        .project-overlay {
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
        .project-image:hover .project-overlay {
          background-color: rgba(0, 0, 0, 0.85);
          opacity: 1;
        }
        .project-title {
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
        .project-card:hover .project-title {
          color: #2563eb;
          background-color: #eff6ff;
        }
      `}</style>
      <div className="project-card" style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}>
        <h3 className="project-title">{title}</h3>
        <div className="project-image">
          {image ? (
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>No image</div>
          )}
          <div className="project-overlay">
            <p style={{ fontSize: '0.875rem', color: 'white', marginBottom: '0.75rem', textAlign: 'center', lineHeight: '1.5' }}>{description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.75rem', color: '#d1d5db', backgroundColor: 'rgba(55, 65, 81, 0.5)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                  {tag}
                </span>
              ))}
            </div>
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

