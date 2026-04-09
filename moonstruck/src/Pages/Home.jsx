import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Newsletter from '../Components/Newsletter/Newsletter'
import './CSS/Home.css'


const Home = () => {
  return (
    <div className='home-page'>
      <Hero/>

      <section className='home-intro'>
        <div className='home-intro-copy'>
          <p className='home-eyebrow'>Curated for the season</p>
          <h2>Style that feels elevated, bold, and effortless.</h2>
          <p>
            Explore standout essentials, limited drops, and premium edits built to make your next look feel intentional.
          </p>

          <div className='home-actions'>
            <Link to='/NEW-ARRIVALS' className='home-action-primary'>Shop New Arrivals</Link>
            <Link to='/COLLECTIONS' className='home-action-secondary'>Browse Collections</Link>
          </div>
        </div>

        <div className='home-highlights'>
          <article>
            <span>01</span>
            <h3>Fresh drops</h3>
            <p>New product stories added with a sharper visual rhythm.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Exclusive offers</h3>
            <p>Highlighted deals are framed as a premium editorial feature.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Easy discovery</h3>
            <p>Clearer section spacing and stronger contrast guide the eye down the page.</p>
          </article>
        </div>
      </section>

      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}

export default Home
