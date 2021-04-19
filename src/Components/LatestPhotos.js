import React, { useState, useEffect } from "react";
import "./LatestPhotos.css";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel, A11y]);

function LatestPhotos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=19602021-f5337e663fa5c4a6fd94c0a04&q=people&image_type=photo&per_page=20&safesearch=true"
    )
      .then((response) => response.json())
      .then((data) => setPhotos(data.hits));
    //setStories(images);
  }, []);

  return (
    <div className="LatestPhotos">
      <h2 className="title">Latest photos</h2>

      <Swiper
        slidesPerView={'auto'}
        freeMode={true}
        freeModeSticky={false}
        mousewheel={true}
        height={'auto'}
        direction={"vertical"}
      >
        <SwiperSlide>
          <div className="photos-grid">
            {photos.map((photo, index) => (
              <img
                src={photo.largeImageURL}
                key={index}
                alt="user post"
                className="grid-photo shadow-sm"
              />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LatestPhotos;
