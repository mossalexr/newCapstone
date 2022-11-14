import React from 'react'

import '../index.css'

import cinci from '../pictures/cincinnati.jpeg'

const Home = () => {
  return (
    <div>
      <div className='center'>
        <img className='homeImg' src={cinci} alt="cinci" />
      </div>
      <div>

      </div>
      <br />
      <div className='center'>
        <h2>Welcome to Cincinnati!</h2>
        <p>As one of the most exciting places to be in Ohio, Cincinnati has quite a lot to offer. From the unique restaurants and breweries, to the historic museums and architecture, there's never a shortage of things to do. Cincinnati is also home to three major sports teams; the Cincinnati Bengals (NFL), the Cincinnati Reds (MLB), and FC Cincinnati (MLS). Who are you rooting for?</p>
      </div>
      <br />
      <br />
      <div className="map center">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.2280784062123!2d-84.51495408521403!3d39.10127724250668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3d47410517d%3A0xc6a5ed3b78ebe61a!2sFountain%20Square!5e0!3m2!1sen!2sus!4v1668123300813!5m2!1sen!2sus" width={400} height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <p>Explore the city with Google Maps!</p>

      </div>
    </div>

  )
}

export default Home