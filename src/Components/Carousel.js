import React from 'react';


//Carousel component for home page to display a handful of specials offered by the store
//Author: 
const Carousel = () => {
  // Define carousel data array with dynamic imports for multiple images
  const carouselData = [
    {
      imageUrl: require('../Images/NusesDeliCarousel1.jpg').default,
      title: 'Happy St. Pats!',
      description: 'Celebrate with our bacon rueban burger - 100% angus beef with swiss cheese, topped with russian dressing, coleslaw, corned beef, and bacon'
    },
    {
      imageUrl: require('../Images/NusesDeliCarousel2.jpg').default,
      title: 'Happy St. Pats!',
      description: 'Celebrate with our loaded rueban fries - crispy golden fries loaded with russian dressing, coleslaw, and corned beef.'
    },
    {
      imageUrl: require('../Images/NusesDeliCarousel3.jpg').default,
      title: 'Happy St. Pats!',
      description: 'Celebrate with our loaded rueban fries - crispy golden fries loaded with russian dressing, coleslaw, and corned beef.'
    },
    {
      imageUrl: require('../Images/NusesDeliCarousel4.jpg').default,
      title: 'Happy St. Pats!',
      description: 'Celebrate with our loaded rueban fries - crispy golden fries loaded with russian dressing, coleslaw, and corned beef.'
    },
    {
      imageUrl: require('../Images/NusesDeliCarousel5.jpg').default,
      title: 'Happy St. Pats!',
      description: 'Celebrate with our loaded rueban fries - crispy golden fries loaded with russian dressing, coleslaw, and corned beef.'
    },
    //-- Add more slides as needed here --


    //--                                --
  ];

  // Map over carouselData to generate carousel items
  const carouselItems = carouselData.map((item, index) => (
    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
      <img src={item.imageUrl} className="d-block carousel-image" alt={`Slide ${index + 1}`} />
      <article>
        <h6>{item.title}</h6>
        <p>{item.description}</p>
      </article>
    </div>
  ));

  return (
    <div className="col-sm-6 col-md-8 col-lg-6 bg-light">
      <section>
        <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {carouselItems}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Carousel;