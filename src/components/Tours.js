import React from 'react'
import Title from './Title'
import { tours } from '../data'

const Section = () => {
  return (
        <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, date, title, info, location, duration, price } = tour
          return(
          <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{duration}</p>
              <p>from {price}</p>
            </div>
          </div>
        </article>
          )
        })}
      </div>
    </section>
  )
}

export default Section
