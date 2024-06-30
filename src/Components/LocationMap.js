import React from 'react';


//Component to display image of store location on a map. To be rendered right side of home page
//Author:
const LocationMap = () => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 bg-light" style={{ padding: '15px' }}>
      <article>
        <h4 style={{ backgroundColor: 'lightblue'}}>Where to find us</h4>
        <img src="http://dcg5367.atwebpages.com/Nuse%27s%20Deli/Images/mapLocation.png" className="img-fluid" alt="Map Location" />
      </article>
    </div>
  );
}

export default LocationMap;