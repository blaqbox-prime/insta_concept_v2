import React, { useState, useEffect } from "react";
import "./ActualStories.css";
import MyStory from "./MyStory";
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel,A11y]);

function ActualStories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=19602021-f5337e663fa5c4a6fd94c0a04&q=landscape&image_type=photo&per_page=10"
    )
      .then((response) => response.json())
      .then((data) => setStories(data.hits));
  }, []);
console.log(stories);

//mockdata



  return (
    <div className="ActualStories">
      <h2 className="title">Actual Stories</h2>
      <div className="stories-carousel">
          
       <Swiper
       spaceBetween={50}
       slidesPerView={6}
       mousewheel={true}
       onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
       >
       {stories.map((image, index) => 
             <SwiperSlide key={image.id}>
              <MyStory image={image.previewURL}  title="collection"/>
            </SwiperSlide>
        )}

       </Swiper>
       </div>
    </div>
  );
}

export default ActualStories;
