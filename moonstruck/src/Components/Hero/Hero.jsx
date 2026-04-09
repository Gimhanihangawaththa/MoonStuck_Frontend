import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'



const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-p">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-tag">MoonStuck Edit</p>
          <h1>Fashion with a darker edge and a cleaner silhouette.</h1>
          <p>
            Discover a sharper storefront experience with curated drops, seasonal offers, and collections arranged to feel premium from the first glance.
          </p>

          <div className="hero-actions">
            <Link to="/NEW-ARRIVALS" className="hero-primary-btn">Shop New Arrivals</Link>
            <Link to="/SHOP-BY-BRANDS" className="hero-secondary-btn">Explore Brands</Link>
          </div>

          <div className="hero-spotlight">
            <div>
              <strong>Limited drop</strong>
              <span>Fresh pieces added weekly</span>
            </div>
            <div>
              <strong>Exclusive curation</strong>
              <span>Focused picks with a premium feel</span>
            </div>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div className='left-line'></div>

        <div className="letters">
          <h2>#MOONSTRUCK </h2>
        </div>

        <div className='right-line'></div>
      </div>
    </section>
  )
}

export default Hero
